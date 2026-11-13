import Image from "next/image";
import { Avatars } from "./Avatars";
import { Button } from "./Button";
import { StarIcon } from "./Icons";
import { SectionLabel } from "./SectionLabel";

export function Hero() {
  return (
    <section
      className="overflow-x-clip bg-cream py-[60px] md:py-16 lg:py-[100px]"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid w-full max-w-[1184px] gap-10 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-[minmax(0,1fr)_500px] lg:gap-[60px]">
        <div className="order-2 md:order-1">
          <SectionLabel>Learn at your own pace</SectionLabel>

          <h1
            id="hero-title"
            className="mt-4 font-display text-[40px] font-extrabold leading-[1.1] tracking-[-1px] text-ink md:text-[52px] md:tracking-[-1.3px] lg:text-[64px] lg:leading-[70px] lg:tracking-[-1.6px]"
          >
            Build skills that actually move you forward.
          </h1>

          <p className="mt-6 max-w-[480px] text-base leading-[26px] text-muted lg:text-lg lg:leading-7">
            Practical courses taught by people who do the work every day. Learn design, technology,
            business and more — one focused lesson at a time.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#courses" className="h-[52px]! px-7! font-bold lg:h-[54px]!">
              Explore courses
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              className="h-[52px]! border-line! px-7! font-bold lg:h-[54px]!"
            >
              See how it works
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-muted sm:justify-start">
            <Avatars />
            <p>
              <strong className="font-bold text-ink">Trusted by 24,000+</strong> learners
            </p>
          </div>
        </div>

        <div className="relative order-1 mx-2 sm:mx-auto sm:w-full sm:max-w-[500px] md:order-2 md:mx-0 md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute bottom-[14px] left-[92.5px] top-6 w-[271.5px] rounded-2xl bg-peach sm:left-auto sm:right-[-18px] sm:w-1/2 md:bottom-7 md:top-6 md:w-1/2 lg:right-[-39px] lg:bottom-7 lg:top-6 lg:w-[89px]"
          />
          <div
            aria-hidden="true"
            className="absolute -left-[18px] bottom-[12px] h-16 w-16 rounded-full bg-brand-soft lg:-left-[45px] lg:bottom-[11px] lg:h-[106px] lg:w-[106px]"
          />

          <div className="relative aspect-[173/190] overflow-hidden rounded-2xl md:aspect-[25/26] md:rounded-3xl">
            <Image
              src="/images/hero.jpg"
              alt="A smiling learner working on a laptop in a bright workspace"
              fill
              priority
              sizes="(min-width: 1024px) 500px, (min-width: 768px) 45vw, (min-width: 640px) 500px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-2 top-1.5 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.1)] lg:-left-[22px] lg:top-4">
            <span className="flex h-8 w-11 items-center justify-center rounded-lg bg-brand-soft text-sm font-bold text-brand">
              120+
            </span>
            <span className="text-sm text-ink">expert-led courses</span>
          </div>

          <div className="absolute -right-[27px] bottom-9 flex items-center gap-2.5 rounded-xl bg-white px-4 py-3.5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] lg:-right-[57px]">
            <span className="flex gap-[3px] text-sun" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </span>
            <span className="text-sm text-ink">4.9 avg rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
