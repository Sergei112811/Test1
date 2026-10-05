import { NextRequest, NextResponse } from "next/server";

const vehicleNames: Record<string, string> = {
  largus: "LADA Largus",
  uaz: "УАЗ Профи",
  help: "Нужна помощь с выбором",
};

function clean(value: unknown, maxLength = 300) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function GET() {
  return NextResponse.json({
    configured: {
      telegram: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
      email: false,
    },
  });
}

export async function POST(request: NextRequest) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { ok: false, code: "delivery_not_configured", message: "Онлайн-приём заявок настраивается." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { ok: false, code: "invalid_json", message: "Проверьте данные формы." },
      { status: 400 },
    );
  }

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 40);
  const date = clean(body.date, 30);
  const term = clean(body.term, 80);
  const vehicle = vehicleNames[clean(body.vehicle, 20)] || "Не указан";
  const cargo = clean(body.cargo, 500) || "Не указан";

  if (!name || !phone || !date || !term) {
    return NextResponse.json(
      { ok: false, code: "validation_error", message: "Заполните обязательные поля." },
      { status: 400 },
    );
  }

  const text = [
    "Новая заявка с лендинга",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Автомобиль: ${vehicle}`,
    `Дата получения: ${date}`,
    `Срок: ${term}`,
    `Груз: ${cargo}`,
  ].join("\n");

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(8_000),
    });

    if (!response.ok) {
      console.error("Telegram delivery failed", response.status, await response.text());
      return NextResponse.json(
        { ok: false, code: "telegram_send", message: "Не удалось доставить заявку." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Telegram connection failed", error);
    return NextResponse.json(
      { ok: false, code: "telegram_connect", message: "Не удалось связаться с каналом заявок." },
      { status: 502 },
    );
  }
}
