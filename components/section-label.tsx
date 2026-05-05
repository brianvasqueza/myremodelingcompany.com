interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-gold text-xs font-medium tracking-widest uppercase mb-4 ${className}`}
    >
      {children}
    </span>
  )
}
