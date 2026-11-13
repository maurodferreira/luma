"use client";

import { useState, type FormEvent } from "react";
import { Button } from "./Button";

type Fields = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!emailRe.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Tell us a bit more (at least 10 characters).";
  }

  return errors;
}

const fieldControlClassName =
  "mt-2 w-full rounded-lg border border-line bg-cream px-4 py-3 text-sm leading-6 placeholder:text-tertiary aria-[invalid=true]:border-red-500";

const inputClassName = `${fieldControlClassName} h-12`;

export function ContactForm() {
  const [values, setValues] = useState<Fields>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const updateField = (field: keyof Fields) =>
    (event: { target: { value: string } }) => {
      setValues((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("sent");
    setValues({ name: "", email: "", message: "" });
  }

  function renderField(field: keyof Fields, label: string) {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={field} className="text-sm font-bold leading-6 text-ink">
          {label}
        </label>

        {field === "message" ? (
          <textarea
            id={field}
            rows={4}
            value={values[field]}
            onChange={updateField(field)}
            placeholder="Tell us how we can help..."
            aria-invalid={Boolean(errors[field])}
            aria-describedby={errors[field] ? `${field}-error` : undefined}
            className={`${fieldControlClassName} h-[100px] resize-y md:h-[120px]`}
          />
        ) : (
          <input
            id={field}
            type={field === "email" ? "email" : "text"}
            value={values[field]}
            onChange={updateField(field)}
            autoComplete={field === "email" ? "email" : "name"}
            placeholder={field === "email" ? "youremail@example.com" : "Your name"}
            aria-invalid={Boolean(errors[field])}
            aria-describedby={errors[field] ? `${field}-error` : undefined}
            className={inputClassName}
          />
        )}

        {errors[field] && (
          <p id={`${field}-error`} className="text-xs leading-5 text-red-600">
            {errors[field]}
          </p>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex w-full flex-col gap-6 rounded-2xl border border-line bg-white px-5 py-6 shadow-[0_12px_16px_rgba(23,27,44,0.04)] md:p-10"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-bold leading-8 text-ink">
          Contact us
        </h3>
        <p className="text-sm leading-6 text-muted">
          Fill out the fields and we will get in touch.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {renderField("name", "Full name")}
        {renderField("email", "Email")}
        {renderField("message", "Your question")}
      </div>

      <Button
        type="submit"
        className="h-[52px] !w-full !px-7 !py-[14px]"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>

      <p role="status" aria-live="polite" className="text-center text-xs text-brand">
        {status === "sent" ? "Thanks! We’ll reply within 24 hours on business days." : ""}
      </p>
    </form>
  );
}
