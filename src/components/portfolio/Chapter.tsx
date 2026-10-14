import type { Chapter as ChapterType } from '../../types/portfolio'
import { ProjectCard } from './ProjectCard'
import { Timeline } from './Timeline'

type ChapterProps = {
  chapter: ChapterType
}

export function Chapter({ chapter }: ChapterProps) {
  return (
    <section className="chapter" aria-labelledby={`chapter-${chapter.index}`}>
      <header className="chapter__header">
        <div className="chapter__identity">
          <span className="chapter__index">{chapter.index}</span>
          <h2 id={`chapter-${chapter.index}`}>{chapter.company}</h2>
        </div>
        <span className="chapter__period">{chapter.period}</span>
      </header>

      <Timeline points={chapter.timeline} />

      <div className={`chapter__projects chapter__projects--${Math.min(chapter.projects.length, 3)}`}>
        {chapter.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={chapter.projects.length === 1 || index === 0} />
        ))}
      </div>

    </section>
  )
}
