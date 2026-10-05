import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    configured: {
      telegram: Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
      email: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD),
    },
  });
}

export async function POST() {
  const telegramReady = Boolean(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID);
  const emailReady = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD);

  if (!telegramReady && !emailReady) {
    return NextResponse.json(
      { ok: false, code: "delivery_not_configured", message: "Приём заявок настраивается." },
      { status: 503 },
    );
  }

  return NextResponse.json(
    { ok: false, code: "delivery_not_implemented", message: "Канал приёма ещё подключается." },
    { status: 503 },
  );
}
