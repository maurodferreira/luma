import { steps, type Step } from "@/data/content";
import { SectionLabel } from "./SectionLabel";

function StepIcon({ shape }: { shape: Step["shape"] }) {
  const box = "relative z-10 block h-14 w-14";

  if (shape === "square") {
    return (
      <span aria-hidden="true" className={`${box} rounded-full bg-brand-soft`}>
        <span className="absolute left-2 top-2 h-6 w-6 rounded-[5px] bg-brand" />
      </span>
    );
  }
  if (shape === "orange") {
    return (
      <span aria-hidden="true" className={`${box} rotate-[10deg] rounded-xl bg-peach`}>
        <span className="absolute left-6 top-6 h-7 w-7 rounded-full bg-coral" />
      </span>
    );
  }
  return (
    <span aria-hidden="true" className={`${box} rounded-xl bg-sun-bg`}>
      <span className="absolute left-2 top-7 h-5 w-5 rounded-full bg-sun-accent" />
    </span>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-16 md:pb-32 md:pt-24" aria-labelledby="how-title">
      {/* inner width = 1120px at ≥1248px viewports, like the design */}
      <div className="mx-auto w-full max-w-[1184px] px-5 md:px-8">
        <div className="md:text-center">
          <SectionLabel>How Luma works</SectionLabel>
          <h2
            id="how-title"
            className="mt-5 font-display text-[32px] font-extrabold leading-9 tracking-tight text-ink md:text-[48px] md:leading-[56px]"
          >
            Less browsing. More learning.
          </h2>
        </div>

        <ol className="mt-12 grid gap-10 md:mt-[104px] md:grid-cols-3 md:gap-x-10 lg:gap-x-20">
          {steps.map((s, i) => (
            <li key={s.id} className="relative">
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-14 top-7 hidden h-px w-[calc(100%-16px)] bg-line md:block lg:w-[calc(100%+24px)]"
                />
              )}
              <StepIcon shape={s.shape} />
              <p className="mt-6 text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-tertiary">
                Step {s.id}
              </p>
              <h3 className="mt-3 font-display text-xl font-bold leading-7 text-ink md:leading-8">{s.title}</h3>
              <p className="mt-4 max-w-[320px] text-sm leading-6 text-muted md:text-base md:leading-7">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}