import Image from "next/image";
import { courseMeta } from "@/data/content";
import { Button } from "./Button";
import { Container } from "./Container";
import { ArrowRight } from "./Icons";

export function FeaturedCourse() {
  return (
    <section id="featured" className="bg-brand py-14 text-white md:py-20" aria-labelledby="featured-title">
      <Container className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src="/images/couse.jpg"
            alt="Overhead view of a designer arranging material samples and prototypes on a desk"
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover"
          />
          <span className="absolute left-0 top-3 rounded-r-md bg-sun px-2.5 py-1 text-xs font-bold uppercase leading-4 tracking-[1.44px] text-ink">
            Featured course
          </span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-white/80">Most popular this month</p>
          <h2 id="featured-title" className="mt-3 font-display text-[32px] font-extrabold leading-9 tracking-tight md:text-[48px] md:leading-[56px]">
            Designing products people understand.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/85 md:text-base md:leading-7">
            Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.
          </p>
          <p className="mt-5 text-sm leading-6 text-white/85 md:text-base md:leading-7">with Maya Chen · Senior Product Designer</p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm leading-6">
            {courseMeta.map((m) => (
              <li key={m} className="rounded-md border border-white/40 px-2.5 py-1 text-sm leading-6">{m}</li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Button href="#contact" variant="sun">View course</Button>
            <a href="#courses" className="inline-flex items-center justify-center gap-2 text-sm font-bold hover:underline">
              Browse all courses <ArrowRight />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
