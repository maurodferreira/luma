export function SectionLabel({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.14em] text-brand ${className}`}>
      {children}
    </p>
  );
}
