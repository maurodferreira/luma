"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!emailRe.test(v.email)) e.email = "Please enter a valid email address.";
  if (v.message.trim().length < 10) e.message = "Tell us a bit more (at least 10 characters).";
  return e;
}

const inputCls =
  "mt-1.5 w-full rounded-md border border-line bg-cream px-3 py-2.5 text-sm leading-6 placeholder:text-tertiary aria-[invalid=true]:border-red-500";

export function ContactForm() {
  const [values, setValues] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: keyof Fields) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 700)); // mock request – no backend required
    setStatus("sent");
    setValues({ name: "", email: "", message: "" });
  }

  const field = (id: keyof Fields, label: string) => (
    <div className="mt-4">
      <label htmlFor={id} className="text-sm font-bold leading-6">{label}</label>
      {id === "message" ? (
        <textarea
          id={id} rows={4} value={values[id]} onChange={set(id)}
          placeholder="Tell us how we can help..."
          aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined}
          className={`${inputCls} resize-y`}
        />
      ) : (
        <input
          id={id} type={id === "email" ? "email" : "text"} value={values[id]} onChange={set(id)}
          autoComplete={id === "email" ? "email" : "name"}
          placeholder={id === "email" ? "youremail@example.com" : "Your name"}
          aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined}
          className={inputCls}
        />
      )}
      {errors[id] && <p id={`${id}-err`} className="mt-1 text-xs text-red-600">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-xl border border-line bg-white p-6 shadow-lg shadow-ink/5 md:p-7">
      <h3 className="font-display text-xl font-bold leading-8">Contact us</h3>
      <p className="mt-1 text-sm leading-6 text-muted">Fill out the fields and we will get in touch.</p>
      {field("name", "Full name")}
      {field("email", "Email")}
      {field("message", "Your question")}
      <Button type="submit" className="mt-5 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-center text-xs text-brand">
        {status === "sent" ? "Thanks! We’ll reply within 24 hours on business days." : ""}
      </p>
    </form>
  );
}
