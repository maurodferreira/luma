import Image from "next/image";
import { stats } from "@/data/content";

function QuoteMark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 26 22"
      className="h-[22px] w-[26px] fill-brand stroke-brand"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M1 1h8L7.5 21h-5z" />
      <path d="M16 1h8l-1.5 20h-5z" />
    </svg>
  );
}

export function Testimonial() {
  return (
    <section
      className="bg-white py-[60px] md:py-[100px]"
      aria-label="Learner stories and numbers"
    >
      <div className="mx-auto grid w-full max-w-[1184px] gap-[60px] px-5 md:grid-cols-[735fr_385fr] md:items-center md:gap-0 md:px-8">
        <figure className="max-w-[600px]">
          <QuoteMark />

          <blockquote className="mt-4 font-display text-xl font-semibold leading-8 text-ink md:text-[30px] md:leading-[44px] md:tracking-[-0.75px]">
            <p>
              The lessons are short enough to fit into my week, but detailed enough that I actually
              leave with something I can use.
            </p>
          </blockquote>

          <figcaption className="mt-8 flex items-center gap-4">
            <Image
              src="/avatar/alex-morgan.jpg"
              alt="Alex Morgan"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <span className="block text-base font-bold leading-7 text-ink">
                Alex Morgan
              </span>
              <span className="block text-sm leading-6 text-muted">
                Product Manager
              </span>
            </div>
          </figcaption>
        </figure>

        <dl className="grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-5 md:border-l md:border-line md:pl-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse">
              <dt className="mt-1 text-sm leading-6 text-tertiary">{stat.label}</dt>
              <dd className="font-display text-[40px] font-extrabold leading-[44px] tracking-[-1px] text-brand md:text-[64px] md:leading-[70px] md:tracking-[-1.6px]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
