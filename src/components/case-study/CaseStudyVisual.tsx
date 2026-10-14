type CaseStudyVisualProps = {
  label?: string
  caption?: string
  variant?: 'aurora' | 'sunset' | 'mono' | 'violet' | 'ember'
  aspect?: 'wide' | 'tall' | 'square'
}

export function CaseStudyVisual({
  label = 'Replace with project image',
  caption,
  variant = 'sunset',
  aspect = 'wide',
}: CaseStudyVisualProps) {
  return (
    <figure className={`case-visual case-visual--${variant} case-visual--${aspect}`}>
      <div className="case-visual__inner" aria-hidden="true">
        <span>{label}</span>
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
