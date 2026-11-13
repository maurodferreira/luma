import { footerColumns } from "@/data/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy pb-5 pt-[60px] text-white lg:pb-10 lg:pt-20">
      <div className="mx-auto w-full max-w-[1184px] px-5 md:px-8">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 lg:grid-cols-[1fr_repeat(3,192px)] lg:gap-x-12 lg:gap-y-0">
          <div className="col-span-2 lg:col-span-1">
            <Logo light className="-mt-[3px] block w-fit text-[22px] leading-none" />
            <p className="mt-3 text-sm leading-6 text-footer-muted lg:max-w-[240px]">
              Practical learning for curious people who want to keep moving forward.
            </p>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold uppercase leading-4 tracking-[0.12em] text-white-muted">
                {column.title}
              </h2>

              <ul className="mt-4 grid gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm leading-6 text-footer-muted transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-muted pt-6 text-center text-[13px] leading-[19.5px] text-white lg:mt-16 lg:text-left">
          © {new Date().getFullYear()} Luma Learning
        </p>
      </div>
    </footer>
  );
}
