import type { Project } from '../../types/portfolio'

type GradientArtworkProps = {
  project: Project
  size?: 'large' | 'compact'
}

export function GradientArtwork({ project, size = 'large' }: GradientArtworkProps) {
  if (project.image) {
    return (
      <div className={`gradient-artwork gradient-artwork--image gradient-artwork--${size}`}>
        <img src={project.image} alt={project.imageAlt ?? ''} loading="lazy" />
      </div>
    )
  }

  return (
    <div className={`gradient-artwork gradient-artwork--${project.visual} gradient-artwork--${size}`} aria-hidden="true">
      <div className="gradient-artwork__grain" />
      <div className="gradient-artwork__orb gradient-artwork__orb--one" />
      <div className="gradient-artwork__orb gradient-artwork__orb--two" />
      <div className="gradient-artwork__frame">
        <span className="gradient-artwork__label">{project.title}</span>
        <span className="gradient-artwork__year">{project.year}</span>
      </div>
    </div>
  )
}
