import Image from "next/image";
import { Button } from "./Button";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function People() {
  return (
    <section id="people" className="bg-cream py-16 md:py-24" aria-labelledby="people-title">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <SectionLabel>The people</SectionLabel>
          <h2 id="people-title" className="mt-3 font-display text-[32px] font-extrabold leading-9 tracking-tight md:text-[48px] md:leading-[56px]">
            Meet international students &amp; teachers
          </h2>
          <p className="mt-5 max-w-md text-base leading-[26px] text-muted md:text-lg md:leading-7">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec, magna hendrerit. Placerat ipsum sit lectus urna, faucibus aenean lorem facilisi tincidunt.
          </p>
          <Button href="#contact" variant="light" className="mt-7 w-full sm:w-auto">
            Explore teachers and students
          </Button>
        </div>
        <div className="relative mx-auto aspect-[10/9] w-full max-w-[520px]">
          <Image
            src="/images/peoples.png"
            alt="Collage of international students and teachers studying, teaching and celebrating together"
            fill
            sizes="(min-width: 768px) 520px, 100vw"
            className="object-contain"
          />
        </div>
      </Container>
    </section>
  );
}
