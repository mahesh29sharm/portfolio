import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../../types/portfolio'
import { GradientArtwork } from './GradientArtwork'

type ProjectCardProps = {
  project: Project
  featured?: boolean
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const content = (
    <>
      <GradientArtwork project={project} size={featured ? 'large' : 'compact'} />
      <div className="project-card__body">
        <div className="project-card__topline">
          <span>{project.eyebrow}</span>
          <span>{project.year}</span>
        </div>
        <div className="project-card__title-row">
          <h3>{project.title}</h3>
          {project.href ? <ArrowUpRight className="project-card__arrow" size={22} strokeWidth={1.5} /> : null}
        </div>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__footer">
          <div className="project-card__tags">
            {project.tags?.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          {(project.metric || project.secondaryMetric) ? (
            <div className="project-card__metrics">
              {project.metric ? (
                <div className="project-card__metric">
                  <strong>{project.metric}</strong>
                  <span>{project.metricLabel}</span>
                </div>
              ) : null}
              {project.secondaryMetric ? (
                <div className="project-card__metric">
                  <strong>{project.secondaryMetric}</strong>
                  <span>{project.secondaryMetricLabel}</span>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="project-card__action-row">
          {project.href ? (
            <span className="project-card__cta">{project.cta ?? 'View case study'} <ArrowUpRight size={16} strokeWidth={1.7} /></span>
          ) : (
            <span className="project-card__status">Case study coming soon</span>
          )}
        </div>
      </div>
    </>
  )

  if (project.href) {
    return (
      <a className={`project-card project-card--linked ${featured ? 'project-card--featured' : ''}`} href={project.href} aria-label={`${project.cta ?? 'View case study'}: ${project.title}`}>
        {content}
      </a>
    )
  }

  return <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>{content}</article>
}
