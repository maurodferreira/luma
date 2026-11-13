import type { ReactNode } from "react";
import { ContactForm } from "./ContactForm";
import { Container } from "./Container";
import { ClockIcon, MailIcon } from "./Icons";
import { SectionLabel } from "./SectionLabel";

function InfoRow({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <li className="flex items-center gap-3 rounded-lg bg-cream p-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">{icon}</span>
      <div className="text-xs">
        <p className="font-semibold">{title}</p>
        <p className="mt-0.5 text-muted">{children}</p>
      </div>
    </li>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24" aria-labelledby="contact-title">
      <Container className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <SectionLabel>Contact</SectionLabel>
          <h2 id="contact-title" className="mt-3 font-display text-[32px] font-extrabold leading-[1.1] tracking-tight md:text-[44px]">
            Get in touch
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.
          </p>
          <ul className="mt-7 grid max-w-sm gap-3">
            <InfoRow icon={<MailIcon />} title="Email">
              <a href="mailto:contact@luma.com" className="text-brand hover:underline">contact@luma.com</a>
            </InfoRow>
            <InfoRow icon={<ClockIcon />} title="Response Time">Up to 24 hours on business days</InfoRow>
          </ul>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
