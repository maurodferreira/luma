import { categories, type Category } from "@/data/content";
import { Container } from "./Container";
import { ArrowRight } from "./Icons";
import { SectionLabel } from "./SectionLabel";

function CategoryCard({ id, title, text }: Category) {
  return (
    <li className="flex flex-col rounded-xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(18,22,43,0.04)] transition-shadow hover:shadow-md">
      <span className="w-fit rounded-md bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand">{id}</span>
      <h3 className="mt-5 font-display text-xl font-bold leading-7 md:leading-8">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-tertiary">{text}</p>
      <a href="#featured" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold" aria-label={`Explore ${title}`}>
        Explore <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </li>
  );
}

export function Categories() {
  return (
    <section id="courses" className="py-16 md:py-20" aria-labelledby="categories-title">
      <Container>
        <SectionLabel>Find your next skill</SectionLabel>
        <h2 id="categories-title" className="mt-3 max-w-md font-display text-[32px] font-extrabold leading-9 tracking-tight md:text-[48px] md:leading-[56px]">
          Learn something worth knowing.
        </h2>
        <p className="mt-4 max-w-sm text-base leading-[26px] text-muted md:text-lg md:leading-7">
          Short, practical courses designed around skills you can put to work immediately.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => <CategoryCard key={c.id} {...c} />)}
        </ul>
      </Container>
    </section>
  );
}
