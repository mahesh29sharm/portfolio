import type { ReactNode } from 'react'

type CaseStudySectionProps = {
  index: string
  eyebrow: string
  title: string
  intro?: string
  children?: ReactNode
}

export function CaseStudySection({ index, eyebrow, title, intro, children }: CaseStudySectionProps) {
  return (
    <section className="case-section">
      <div className="case-section__rail">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="case-section__content">
        <h2>{title}</h2>
        {intro ? <p className="case-section__intro">{intro}</p> : null}
        {children}
      </div>
    </section>
  )
}
