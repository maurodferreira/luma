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
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-5 md:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm text-ink">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-brand">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a href="#contact" className="text-sm transition-colors hover:text-brand">Log in</a>
          <Button href="#courses" className="!py-2.5">Start learning</Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
          className="border-t border-line bg-cream px-5 pb-6 pt-3 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="block py-3 text-base font-medium">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-3">
            <Button href="#courses">Start learning</Button>
            <Button href="#contact" variant="secondary">Log in</Button>
          </div>
        </nav>
      )}
    </header>
  );
}
