import type { ReactNode } from "react";
import { ContactForm } from "./ContactForm";
import { Container } from "./Container";
import { ClockIcon, MailIcon } from "./Icons";
import { SectionLabel } from "./SectionLabel";

function InfoRow({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex items-center gap-4 rounded-xl bg-cream p-4 md:p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
        {icon}
      </span>

      <div className="text-sm leading-6">
        <p className="font-semibold">{title}</p>
        <p className="mt-0.5 text-muted md:mt-1">{children}</p>
      </div>
    </li>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-[60px] md:py-[100px]"
      aria-labelledby="contact-title"
    >
      <Container className="grid items-center gap-10 xl:grid-cols-[480px_minmax(0,1fr)] xl:gap-[100px]">
        <div className="flex flex-col gap-8 md:gap-10">
          <div>
            <SectionLabel>Contact</SectionLabel>

            <h2
              id="contact-title"
              className="mt-4 font-display text-[32px] font-extrabold leading-9 tracking-[-0.8px] md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]"
            >
              Get in touch
            </h2>

            <p className="mt-4 text-sm leading-6 text-muted md:text-lg md:leading-7">
              Have a question? We’re here to help. Whether you’re looking for the right course,
              learning with your team or interested in teaching with Luma, we’d love to hear from
              you.
            </p>
          </div>

          <ul className="grid gap-4">
            <InfoRow icon={<MailIcon />} title="Email">
              <a href="mailto:contact@luma.com" className="text-brand hover:underline">
                contact@luma.com
              </a>
            </InfoRow>

            <InfoRow icon={<ClockIcon />} title="Response Time">
              Up to 24 hours on business days
            </InfoRow>
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
