export default function Eyebrow({ children, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-echo-soft ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-echo shadow-[0_0_10px_2px_rgba(124,140,255,0.7)]" />
      {children}
    </div>
  )
}
