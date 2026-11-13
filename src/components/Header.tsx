"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { Button } from "./Button";
import { CloseIcon, MenuIcon } from "./Icons";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 h-[69px] border-b border-line bg-cream md:h-[70px]">
      <div className="relative mx-auto flex h-[68px] w-full max-w-[1184px] items-center justify-between px-5 md:h-[69px] md:px-8">
        <Logo />

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <ul className="flex items-center gap-8 text-sm leading-6 text-muted">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-brand"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href="#contact"
            className="px-4 py-2.5 text-sm leading-6 text-muted transition-colors hover:text-brand"
          >
            Log in
          </a>
          <Button href="#courses" className="!py-2.5 !leading-6">
            Start learning
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) {
              setOpen(false);
            }
          }}
          className="border-t border-line bg-cream px-5 pb-6 pt-3 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-3 text-base font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-col gap-3">
            <Button href="#courses">Start learning</Button>
            <Button href="#contact" variant="secondary">
              Log in
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
