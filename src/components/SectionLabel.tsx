export function SectionLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`text-xs font-semibold uppercase leading-4 tracking-[1.44px] text-brand ${className}`}>
      {children}
    </p>
  );
}
