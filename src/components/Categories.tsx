import { categories, type Category } from "@/data/content";
import { Container } from "./Container";
import { ArrowRight } from "./Icons";
import { SectionLabel } from "./SectionLabel";

function CategoryCard({ id, title, text }: Category) {
  return (
    <li className="flex min-h-[200px] flex-col justify-between rounded-2xl border border-line bg-white p-6 md:min-h-[260px] md:p-7">
      <div>
        <div className="flex h-[46.5px] items-start">
          <span className="mt-0.5 w-fit rounded-md bg-brand-soft px-2 py-1 text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-brand">
            {id}
          </span>
        </div>

        <h3 className="font-display text-xl font-bold leading-7 md:leading-8">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-tertiary">{text}</p>
      </div>

      <a
        href="#featured"
        className="mt-6 inline-flex h-11 items-center gap-2 text-sm font-bold text-ink transition-colors hover:text-brand"
        aria-label={`Explore ${title}`}
      >
        Explore
        <ArrowRight className="h-5 w-5" />
      </a>
    </li>
  );
}

export function Categories() {
  return (
    <section
      id="courses"
      className="bg-white py-[60px] md:py-[100px]"
      aria-labelledby="categories-title"
    >
      <Container>
        <div className="max-w-[560px]">
          <SectionLabel>Find your next skill</SectionLabel>

          <h2
            id="categories-title"
            className="mt-4 font-display text-[32px] font-extrabold leading-9 tracking-tight md:text-[48px] md:leading-[56px]"
          >
            Learn something worth knowing.
          </h2>

          <p className="mt-4 text-base leading-[26px] text-muted md:text-lg md:leading-7">
            Short, practical courses designed around skills you can put to work immediately.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
