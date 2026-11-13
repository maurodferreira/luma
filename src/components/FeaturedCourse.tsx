import Image from "next/image";
import { courseMeta } from "@/data/content";
import { Button } from "./Button";
import { Container } from "./Container";
import { ArrowRight } from "./Icons";

export function FeaturedCourse() {
  return (
    <section
      id="featured"
      className="bg-brand py-[60px] text-white md:py-[100px]"
      aria-labelledby="featured-title"
    >
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-[60px]">
        <div className="relative">
          <div className="relative h-[280px] overflow-hidden rounded-2xl md:h-[408px]">
            <Image
              src="/images/couse.jpg"
              alt="Overhead view of a designer arranging material samples and prototypes on a desk"
              fill
              sizes="(min-width: 768px) 50vw, calc(100vw - 40px)"
              className="object-cover"
            />
          </div>

          <span className="absolute -left-3 -top-3 rounded-md bg-sun px-3 py-1.5 text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-ink">
            Featured course
          </span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-white">
            Most popular this month
          </p>

          <h2
            id="featured-title"
            className="mt-4 font-display text-[32px] font-extrabold leading-9 tracking-[-0.8px] md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]"
          >
            Designing products people understand.
          </h2>

          <p className="mt-5 max-w-[536px] text-sm leading-6 text-white md:text-base md:leading-7">
            Learn how to turn complex workflows into simple, intentional product experiences through
            research, structure and thoughtful interaction design.
          </p>

          <p className="mt-6 text-sm leading-6 text-white md:text-base md:leading-7">
            with Maya Chen · Senior Product Designer
          </p>

          <ul className="mt-6 flex flex-wrap gap-3 text-sm leading-6">
            {courseMeta.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-line px-3.5 py-1.5 text-white-muted"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="#contact"
              variant="sun"
              className="h-[52px] px-7 py-[14px] font-bold"
            >
              View course
            </Button>

            <a
              href="#courses"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 px-4 py-[14px] text-sm font-bold text-white-muted transition-colors hover:text-white"
            >
              Browse all courses
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
