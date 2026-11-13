import { steps, type Step } from "@/data/content";
import { SectionLabel } from "./SectionLabel";

function StepIcon({ shape }: { shape: Step["shape"] }) {
  const baseClassName = "relative z-10 block h-14 w-14";

  if (shape === "square") {
    return (
      <span aria-hidden="true" className={`${baseClassName} rounded-full bg-brand-soft`}>
        <span className="absolute left-2 top-2 h-6 w-6 rounded-[6px] bg-brand" />
      </span>
    );
  }

  if (shape === "orange") {
    return (
      <span
        aria-hidden="true"
        className={`${baseClassName} rotate-[10deg] rounded-xl bg-coral/15 md:bg-peach`}
      >
        <span className="absolute left-6 top-6 h-7 w-7 rounded-full bg-coral" />
      </span>
    );
  }

  return (
    <span aria-hidden="true" className={`${baseClassName} rounded-xl bg-sun-bg`}>
      <span className="absolute left-2 top-7 h-5 w-5 rounded-full bg-sun-accent" />
    </span>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-cream py-[60px] md:py-[100px]"
      aria-labelledby="how-title"
    >
      <div className="mx-auto w-full max-w-[1184px] px-5 md:px-8">
        <div className="text-center">
          <SectionLabel>How Luma works</SectionLabel>
          <h2
            id="how-title"
            className="mt-4 font-display text-[32px] font-extrabold leading-9 tracking-[-0.8px] text-ink md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]"
          >
            Less browsing. More learning.
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-0 md:mt-[104px] md:grid-cols-3 md:gap-x-10 lg:gap-x-20">
          {steps.map((step, index) => (
            <li
              key={step.id}
              className={index < 2 ? "relative pb-12 md:pb-0" : "relative"}
            >
              {index < steps.length - 1 && (
                <>
                  <span
                    aria-hidden="true"
                    className={`absolute left-7 w-px bg-line md:hidden ${
                      index === 0 ? "top-[221px] h-[50px]" : "top-[224px] h-[47px]"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-14 top-7 hidden h-px w-[calc(100%-16px)] bg-line md:block lg:w-[calc(100%+24px)]"
                  />
                </>
              )}

              <StepIcon shape={step.shape} />

              <p className="mt-6 text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-tertiary">
                Step {step.id}
              </p>

              <h3 className="mt-2 font-display text-xl font-bold leading-7 text-ink md:leading-8">
                {step.title}
              </h3>

              <p className="mt-3 max-w-full text-sm leading-6 text-muted md:max-w-[320px] md:text-base md:leading-7">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
