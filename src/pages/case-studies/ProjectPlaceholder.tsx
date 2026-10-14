import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { SiteHeader } from '../../components/layout/SiteHeader'
import { GradientArtwork } from '../../components/portfolio/GradientArtwork'
import { independentChapters, mainChapters } from '../../content/portfolio'

type ProjectPlaceholderProps = {
  slug: string
}

const slugify = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export function ProjectPlaceholder({ slug }: ProjectPlaceholderProps) {
  const project = [...mainChapters, ...independentChapters]
    .flatMap((chapter) => chapter.projects)
    .find((item) => slugify(item.title) === slug || item.href === `/work/${slug}`)

  return (
    <div className="page placeholder-page">
      <SiteHeader />
      <main>
        <Container>
          <a className="case-back" href="/#work"><ArrowLeft size={15} /> Back to selected work</a>
          <section className="placeholder-hero">
            <div className="placeholder-hero__copy">
              <p>{project?.eyebrow ?? 'Selected project'}</p>
              <h1>{project?.title ?? 'Project case study'}</h1>
              <p>{project?.description ?? 'This story is being prepared.'}</p>
              <div className="placeholder-hero__status"><span /> Case study in progress</div>
            </div>
            {project ? <GradientArtwork project={project} size="large" /> : null}
          </section>
          <section className="placeholder-note">
            <p>The full story is taking shape.</p>
            <h2>I’m editing this case study around the decisions, trade-offs and shipped outcomes that mattered—not a wall of process screenshots.</h2>
            <a href="mailto:hello@example.com">Ask me about this work <ArrowUpRight size={17} /></a>
          </section>
        </Container>
      </main>
    </div>
  )
}
