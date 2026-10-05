"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Phone } from "lucide-react";

const initialState = { name: "", phone: "", vehicle: "help", date: "", term: "", cargo: "" };

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };

export function LeadForm() {
  const [form, setForm] = useState(initialState);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(data.message || "Не удалось отправить заявку.");

      setForm(initialState);
      setConsent(false);
      setStatus({ type: "success", message: "Заявка отправлена. Мы свяжемся с вами." });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? `${error.message} Позвоните нам по номеру +7 (965) 202-88-73.`
            : "Не удалось отправить заявку. Позвоните нам: +7 (965) 202-88-73.",
      });
    }
  }

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="lead-form" onSubmit={submit} aria-describedby="form-note">
      <div className="form-grid">
        <label>
          <span>Ваше имя</span>
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Как к вам обращаться"
          />
        </label>
        <label>
          <span>Номер телефона</span>
          <input
            required
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            placeholder="+7 999 000-00-00"
          />
        </label>
        <label>
          <span>Автомобиль</span>
          <select value={form.vehicle} onChange={(event) => update("vehicle", event.target.value)}>
            <option value="help">Нужна помощь с выбором</option>
            <option value="largus">LADA Largus</option>
            <option value="uaz">УАЗ Профи</option>
          </select>
        </label>
        <label>
          <span>Дата получения</span>
          <input
            required
            type="date"
            value={form.date}
            onChange={(event) => update("date", event.target.value)}
          />
        </label>
        <label className="form-wide">
          <span>Предполагаемый срок</span>
          <input
            required
            value={form.term}
            onChange={(event) => update("term", event.target.value)}
            placeholder="Например, 2 недели"
          />
        </label>
        <label className="form-wide">
          <span>Что планируете перевозить? <em>Необязательно</em></span>
          <textarea
            rows={3}
            value={form.cargo}
            onChange={(event) => update("cargo", event.target.value)}
            placeholder="Коротко опишите задачу"
          />
        </label>
      </div>

      <label className="consent">
        <input
          required
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
        />
        <span>
          Согласен на обработку данных для ответа на заявку. Паспортные данные через сайт не
          передаются.
        </span>
      </label>

      <button className="button button-light form-submit" disabled={status.type === "loading"}>
        {status.type === "loading" ? <LoaderCircle className="spin" aria-hidden="true" /> : null}
        {status.type === "loading" ? "Отправляем…" : "Узнать доступность и стоимость"}
      </button>

      {status.type === "error" ? (
        <p className="form-status error" role="alert">
          <AlertCircle aria-hidden="true" /> {status.message}
        </p>
      ) : null}
      {status.type === "success" ? (
        <p className="form-status success" role="status">
          <CheckCircle2 aria-hidden="true" /> {status.message}
        </p>
      ) : null}

      <p id="form-note" className="form-note">
        Онлайн-приём настраивается. Пока заявку гарантированно можно оставить по телефону.
      </p>
      <a className="form-phone" href="tel:+79652028873">
        <Phone aria-hidden="true" /> +7 (965) 202-88-73
      </a>
    </form>
  );
}
