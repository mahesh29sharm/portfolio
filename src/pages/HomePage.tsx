import { ArrowDown, ArrowDownLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { SectionHeader } from '../components/layout/SectionHeader'
import { SiteHeader } from '../components/layout/SiteHeader'
import { Chapter } from '../components/portfolio/Chapter'
import { about, experiments, hero, independentChapters, mainChapters, personality } from '../content/portfolio'

export function HomePage() {
  return (
    <div className="page" id="top">
      <SiteHeader />

      <main>
        <section className="hero">
          <Container>
            <div className="hero__layout">
              <div className="hero__copy">
                <p className="hero__kicker">{hero.kicker}</p>
                <h1>
                  {hero.personality.map((item) => <span key={item}>{item}</span>)}
                </h1>

                <p className="hero__body">{hero.body}</p>

                <div className="hero__actions">
                  <a href="#work">Selected work <ArrowDown size={16} strokeWidth={1.6} /></a>
                  <a href="#about">How I work <ArrowRight size={16} strokeWidth={1.6} /></a>
                </div>

                <p className="hero__availability"><span className="status-dot" />{hero.availability}</p>
              </div>

              <figure className="hero__portrait">
                <div className="hero__portrait-note" aria-hidden="true">
                  <span>Supervised by Vi</span>
                  <ArrowDownLeft size={34} strokeWidth={1.25} />
                </div>
                <img
                  src="/images/mahesh-vi-hero.png"
                  alt="An illustrated portrait of Mahesh with Vi, his cat, looking over his shoulder"
                  width="1366"
                  height="1151"
                  fetchPriority="high"
                />
                <figcaption>{hero.personalNote}</figcaption>
              </figure>
            </div>

            <a className="hero__scroll-cue" href="#work" aria-label="Jump to selected work">
              <span>Scroll to explore</span>
              <ArrowDown size={15} strokeWidth={1.5} />
            </a>
          </Container>
        </section>

        <section className="work-section" id="work">
          <Container>
            {mainChapters.map((chapter) => <Chapter key={chapter.index} chapter={chapter} />)}
          </Container>
        </section>

        <section className="independent-section" id="independent">
          <Container>
            <h2 className="independent-section__title">Independent creations</h2>
            {independentChapters.map((chapter) => <Chapter key={chapter.company} chapter={chapter} />)}
          </Container>
        </section>

        <section className="lab-section" id="lab">
          <Container>
            <SectionHeader index="02" label="Play / experiments" aside="Useful detours, failed bets and things I had to know" />
            <div className="lab-heading-grid">
              <h2>Some things are useful because they changed what I believed.</h2>
              <p>
                Not everything needs a 20-minute case study. These are the smaller experiments, awkward signals and questions that made the next product decision better.
              </p>
            </div>

            <div className="experiment-list">
              {experiments.map((experiment, index) => (
                <article className="experiment" key={experiment.question}>
                  <span className="experiment__index">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="experiment__meta">{experiment.meta}</p>
                    <h3>{experiment.question}</h3>
                  </div>
                  <p className="experiment__answer">{experiment.answer}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="personality-section" id="personality">
          <Container>
            <SectionHeader index="03" label="Outside the pixels" aside="The things that keep the work human" />
            <div className="personality-heading">
              <h2>A few things I keep making room for.</h2>
              <p>Some are hobbies, some are obsessions, and all of them quietly find their way back into how I design.</p>
            </div>
            <ul className="sticker-board" aria-label="Interests and creative pursuits">
              {personality.map((item) => (
                <li className="personality-sticker" key={item.label}>
                  <span className="personality-sticker__emoji" aria-hidden="true">{item.emoji}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>

            <figure className="workspace-feature">
              <img
                src="/images/mahesh-workspace.jpeg"
                alt="Mahesh's desk by a window, with a laptop, books, plants and warm lighting"
                width="1040"
                height="585"
                loading="lazy"
              />
              <figcaption>
                <span>Where most of the work happens</span>
                <p>A small desk, plenty of daylight, and usually one idea being taken apart and put back together.</p>
              </figcaption>
            </figure>
          </Container>
        </section>

        <section className="about-section" id="about">
          <Container>
            <SectionHeader index="04" label="About / now" aside="The short version" />
            <div className="about-grid">
              <h2>{about.title}</h2>
              <div className="about-copy">
                <p>{about.body}</p>
                <p>{about.now}</p>
              </div>
            </div>

            <div className="about-system">
              <div><span>01</span><strong>Understand behaviour</strong></div>
              <div><span>02</span><strong>Find the riskiest assumption</strong></div>
              <div><span>03</span><strong>Build enough to test it</strong></div>
              <div><span>04</span><strong>Ship before certainty arrives</strong></div>
              <div><span>05</span><strong>Watch what people actually do</strong></div>
              <div><span>06</span><strong>Keep, change or kill</strong></div>
            </div>
          </Container>
        </section>

        <section className="contact-section">
          <Container>
            <p className="contact-section__eyebrow">Have an ambitious product problem?</p>
            <a className="contact-section__headline" href="mailto:hello@example.com">
              Let&apos;s build something worth caring about.
              <ArrowUpRight size={42} strokeWidth={1.3} />
            </a>
            <div className="footer-row">
              <span>Mahesh · Design Engineer · Bengaluru</span>
              <div>
                <a href="https://www.linkedin.com/in/mahesh-sharma-64196a145/">LinkedIn</a>
                <a href="https://drive.google.com/file/d/1QZFUUoq6Znqqd5v2CX2VGmZbrhjp1ltb/view?usp=drive_link">Resume</a>
                <a href="#top">Back to top ↑</a>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  )
}
