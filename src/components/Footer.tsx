import { footerColumns } from "@/data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy pb-6 pt-[61px] text-white lg:pb-11 lg:pt-20">
      <div className="mx-auto w-full max-w-[1184px] px-5 md:px-8">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-[1fr_repeat(3,192px)] lg:gap-x-12 lg:gap-y-0">
          <div className="col-span-2 lg:col-span-1">
            <Logo light className="-mt-[3px] block w-fit text-[22px] leading-none" />
            <p className="mt-2.5 text-sm leading-6 text-footer-muted lg:max-w-[200px]">
              Practical learning for curious people.
            </p>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-semibold uppercase leading-4 tracking-[0.12em] text-white-muted">
                {col.title}
              </h2>
              <ul className="mt-4 grid gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm leading-6 text-footer-muted transition-colors hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-9 border-t border-white/30 pt-[25px] text-center text-[13px] leading-[19.5px] text-white-muted lg:mt-[66px] lg:text-left">
          © {new Date().getFullYear()} Luma Learning
        </p>
      </div>
    </footer>
  );
}