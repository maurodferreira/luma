import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function People() {
  return (
    <section
      id="people"
      className="bg-cream py-[60px] md:py-[100px]"
      aria-labelledby="people-title"
    >
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-[60px]">
        <div>
          <SectionLabel>The people</SectionLabel>

          <h2
            id="people-title"
            className="mt-2 font-display text-[32px] font-extrabold leading-9 tracking-[-0.8px] md:text-[48px] md:leading-[56px] md:tracking-[-1.2px]"
          >
            Meet international students &amp; teachers
          </h2>

          <p className="mt-6 text-base leading-[26px] text-ink md:mt-8 md:text-lg md:leading-7 md:text-muted">
            Learning feels more meaningful when you can learn from people who have been there.
            Meet the practitioners behind our courses and the curious learners who share ideas,
            ask thoughtful questions and put new skills into practice.
          </p>

          <Button
            href="#contact"
            variant="light"
            className="mt-6 h-[54px] !px-7 !py-[14px] md:mt-8"
          >
            Get involved with the community
          </Button>
        </div>

        <div className="relative mx-auto aspect-[724/619] w-full md:aspect-[265/261]">
          <Image
            src="/images/peoples.png"
            alt="Collage of international students and teachers studying, teaching and celebrating together"
            fill
            sizes="(min-width: 768px) 530px, 100vw"
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
