import { Avatars } from "./Avatars";
import { Button } from "./Button";

const peach = "var(--color-peach)";
const peachSoft = "var(--color-peach)";

function Decorations() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
      {/* always visible from md */}
      <span className="absolute -top-5 right-3 h-[120px] w-[112px] rotate-[8deg] rounded-[18px] bg-peach" />
      <span className="absolute left-14 top-[372px] h-[120px] w-[120px] rounded-full bg-peach max-lg:left-6 max-lg:top-auto max-lg:-bottom-12 max-lg:h-24 max-lg:w-24" />

      {/* only on wide screens, where there is room around the centered text */}
      <div className="hidden lg:block">
        <span className="absolute left-[22px] top-[22px] h-[108px] w-[108px] rounded-full border-2 border-peach" />
        <span className="absolute left-[319px] top-[44px] h-16 w-16 rotate-[14deg] rounded-xl border-[1.5px] border-peach" />
        <span className="absolute right-[371px] top-[43px] h-8 w-8 rounded-full border-2 border-peach" />
        <span className="absolute -left-2 top-[236px] h-[58px] w-10 rotate-[8deg] rounded-xl bg-peach" />
        <span className="absolute right-[40px] top-[429px] h-8 w-8 rounded-full border-2 border-peach" />

        {/* speech bubble */}
        <svg className="absolute left-[142px] top-[215px]" width="30" height="30" viewBox="0 0 30 30" fill={peach}>
          <circle cx="15" cy="14" r="13" />
          <path d="M5 21 2 29l9-4z" />
        </svg>

        {/* "b" block */}
        <span className="absolute left-[303px] top-[383px] h-[54px] w-9 -rotate-[12deg]">
          <span className="absolute left-0 top-0 h-full w-4 rounded-md bg-peach" />
          <span className="absolute bottom-0 right-0 h-7 w-6 rounded-lg bg-peach" />
        </span>

        {/* droplet with rays */}
        <svg
          className="absolute right-[206px] top-[91px]"
          width="56"
          height="40"
          viewBox="0 0 56 40"
          fill="none"
          stroke={peach}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M28 1v8M7 10l5 5M49 10l-5 5M1 34h10M45 34h10" />
          <path d="M28 17s-7 8-7 13a7 7 0 0 0 14 0c0-5-7-13-7-13z" fill={peach} stroke="none" />
        </svg>

        {/* outlined cube */}
        <svg
          className="absolute right-[89px] top-[229px]"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          stroke={peachSoft}
          strokeWidth="1.5"
          strokeLinejoin="round"
        >
          <path d="M32 2l28 15v30L32 62 4 47V17z" />
          <path d="M32 32 60 17M32 32 4 17M32 32v30" />
        </svg>

        {/* outlined panel */}
        <svg
          className="absolute right-[272px] top-[389px]"
          width="44"
          height="32"
          viewBox="0 0 44 32"
          fill="none"
          stroke={peachSoft}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <rect x="1" y="1" width="42" height="30" rx="3" />
          <path d="M16 1v30M28 1v30M10 12v8M34 12v8" />
        </svg>
      </div>
    </div>
  );
}

export function CtaBand() {
  return (
    <section
      className="relative overflow-hidden bg-sun-bg px-5 py-16 text-center md:px-8 lg:py-[101px]"
      aria-labelledby="cta-title"
    >
      <Decorations />

      <div className="relative z-10 mx-auto max-w-[1184px]">
        <div className="flex justify-center">
          <Avatars size={38} count={4} overlap={6} ringClassName="border-sun" />
        </div>

        <h2
          id="cta-title"
          className="mt-9 font-display text-[36px] font-extrabold leading-10 tracking-[-0.9px] text-ink md:text-[56px] md:leading-[64px] md:tracking-[-1.4px]"
        >
          What will you learn next?
        </h2>
        <p className="mt-4 text-base leading-[26px] text-muted md:text-lg md:leading-7">
          Start with one course. Build from there.
        </p>

        <div className="mx-auto mt-10 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button href="#courses" className="h-[52px]! px-7! font-bold">
            Explore all courses
          </Button>
          <Button href="#contact" variant="light" className="h-[52px]! px-7! font-bold">
            Join Luma
          </Button>
        </div>
      </div>
    </section>
  );
}