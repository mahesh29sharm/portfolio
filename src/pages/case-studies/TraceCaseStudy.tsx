import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { CaseStudySection } from '../../components/case-study/CaseStudySection'
import { Container } from '../../components/layout/Container'
import { SiteHeader } from '../../components/layout/SiteHeader'

const liveProductUrl = 'https://play.google.com/store/apps/details?id=com.mahesh.trace'

type TraceScreen = {
  src: string
  alt: string
  label: string
}

function TraceScreenGallery({ screens, tone = 'peach', hero = false }: { screens: TraceScreen[]; tone?: 'peach' | 'blue' | 'violet'; hero?: boolean }) {
  return (
    <figure className={`trace-screen-gallery trace-screen-gallery--${tone} ${hero ? 'trace-screen-gallery--hero' : ''}`}>
      <div className="trace-screen-gallery__screens">
        {screens.map((screen, index) => (
          <div className="trace-screen" key={screen.src}>
            <img src={screen.src} alt={screen.alt} loading={hero ? 'eager' : 'lazy'} fetchPriority={hero && index === 1 ? 'high' : 'auto'} />
            <span>{screen.label}</span>
          </div>
        ))}
      </div>
    </figure>
  )
}

export function TraceCaseStudy() {
  return (
    <div className="page case-page trace-case" id="top">
      <SiteHeader />

      <main>
        <section className="case-hero">
          <Container>
            <a className="case-back" href="/#work"><ArrowLeft size={15} /> Selected work</a>

            <div className="case-hero__kicker">
              <span>Independent build · Live product</span>
              <span>2026</span>
            </div>

            <h1>Designing a social product around everyday stories, not followers.</h1>
            <p className="case-hero__lede">
              Trace is a text-first social platform I designed, built and shipped from scratch — exploring whether everyday stories can become a reason to connect, without the performance of traditional social media.
            </p>

            <div className="case-meta">
              <div><span>Project</span><strong>Trace · Live product</strong></div>
              <div><span>Year</span><strong>2026</strong></div>
              <div><span>Role</span><strong>UX research · Wireframing · Prototyping · Building</strong></div>
              <div><span>Timeline</span><strong>4 weeks</strong></div>
              <div><span>Status</span><a href={liveProductUrl} target="_blank" rel="noreferrer">View live product <ArrowUpRight size={14} /></a></div>
            </div>

            <TraceScreenGallery
              hero
              screens={[
                { src: '/images/trace/topic-list.png', alt: 'Trace topic discovery screen', label: 'Topic discovery' },
                { src: '/images/trace/home.png', alt: 'Trace home screen showing trending topics and stories', label: 'Home' },
                { src: '/images/trace/reactions.png', alt: 'Trace story screen with reaction picker', label: 'Stories + reactions' },
              ]}
            />
          </Container>
        </section>

        <Container className="case-story">
          <CaseStudySection
            index="01"
            eyebrow="The context"
            title="The story that is too small for Instagram, but too interesting to die in Notes."
            intro="The deeper problem was not that people needed another writing app. Most social products create a surprisingly high bar for sharing."
          >
            <div className="case-context-grid">
              <div><span>Instagram</span><h3>Present yourself</h3><p>A public feed asks people to package everyday life into something polished and post-worthy.</p></div>
              <div><span>Notes</span><h3>Private, zero interaction</h3><p>The thought survives, but the human response and connection disappear.</p></div>
              <div><span>Medium</span><h3>Performative writing</h3><p>The blank page quietly asks for an essay, not a quick story from today.</p></div>
              <div><span>Reddit</span><h3>Learn the room first</h3><p>People must find the right community and understand its norms before participating.</p></div>
            </div>

            <div className="case-callout case-callout--warm">
              <p>Most everyday stories begin differently: “You won&apos;t believe what happened today…”</p>
            </div>
          </CaseStudySection>

          <CaseStudySection
            index="02"
            eyebrow="Understanding the user"
            title="Sharing was not only a creation problem. It was a behavioural one."
            intro="People already told friends, coworkers and themselves what happened. The friction appeared when an everyday experience had to become content."
          >
            <div className="quote-grid">
              <blockquote>“I sometimes have an instant urge to share a thought that&apos;s like a bubble. I don&apos;t know where to share it, and it bursts.”</blockquote>
              <blockquote>“I don&apos;t like to post on Instagram. People put their best lives there; everything is just so perfect.”</blockquote>
              <blockquote>“I don&apos;t know how to write. I&apos;m afraid of people judging me.”</blockquote>
            </div>

            <p className="case-big-line">The problem was not a lack of material. It was converting everyday experience into something that felt post-worthy.</p>
          </CaseStudySection>

          <CaseStudySection
            index="03"
            eyebrow="The product bet"
            title="Start with shared context, not a social graph."
            intro="I did not want to build another feed. The topic gives people a reason to write before they need an audience."
          >
            <div className="model-compare">
              <div className="model-compare__old">
                <span>Most social products</span>
                <strong>Person → Post → Followers</strong>
              </div>
              <div className="model-compare__new">
                <span>Trace</span>
                <strong>Topic → Your story → Other people&apos;s stories</strong>
              </div>
            </div>

            <div className="case-definition-grid">
              <div><span>Topic</span><p>A shared prompt or context.</p></div>
              <div><span>Story</span><p>One person&apos;s answer to that context.</p></div>
              <div><span>Thread</span><p>That person&apos;s continuing narrative.</p></div>
              <div><span>Reply</span><p>Conversation around an individual story.</p></div>
            </div>

            <TraceScreenGallery
              tone="violet"
              screens={[
                { src: '/images/trace/topic-detail.png', alt: 'Trace topic detail screen', label: 'Shared topic' },
                { src: '/images/trace/reactions.png', alt: 'Trace story reaction interface', label: 'Story + response' },
              ]}
            />
          </CaseStudySection>

          <CaseStudySection
            index="04"
            eyebrow="Designing Home"
            title="Make an unfamiliar social network feel alive immediately."
            intro="Home needed to answer three questions within seconds: what is happening, who is here, and what is worth opening?"
          >
            <div className="decision-list">
              <article><span>01 / Trending topics</span><h3>Something worth exploring.</h3><p>Prompts establish shared context without requiring prior knowledge of a creator.</p></article>
              <article><span>02 / Story previews</span><h3>Value without commitment.</h3><p>People can sample the emotional texture of Trace before choosing to participate.</p></article>
              <article><span>03 / People wrote on this</span><h3>Social proof without vanity metrics.</h3><p>Participation makes a topic feel alive while keeping the story central.</p></article>
              <article><span>04 / Top creators</span><h3>Turn anonymous content into familiar people.</h3><p>Recognition grows over time without making follower counts the product model.</p></article>
            </div>

            <TraceScreenGallery
              tone="blue"
              screens={[
                { src: '/images/trace/home.png', alt: 'Trace home discovery screen', label: 'Home discovery' },
                { src: '/images/trace/topic-list.png', alt: 'Trace all stories screen', label: 'Topic exploration' },
                { src: '/images/trace/write.png', alt: 'Trace lightweight writing screen', label: 'Start a thought' },
              ]}
            />
          </CaseStudySection>

          <CaseStudySection
            index="05"
            eyebrow="One prompt, many lives"
            title="A story needed somewhere to go after the first post."
            intro="Threads make one person&apos;s story a context users can return to, while topic views reveal how many lives can answer the same prompt."
          >
            <div className="participation-path" aria-label="Progressive participation model">
              {['Read', 'React', 'Reply', 'Write', 'Continue'].map((step, index) => (
                <div key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div>
              ))}
            </div>

            <TraceScreenGallery
              screens={[
                { src: '/images/trace/thread.png', alt: 'Trace multi-part thread screen', label: 'One continuing story' },
                { src: '/images/trace/story-continuation.png', alt: 'Trace story continuation view', label: 'Narrative continuity' },
                { src: '/images/trace/replies.png', alt: 'Trace replies conversation screen', label: 'Conversation' },
              ]}
            />
          </CaseStudySection>

          <CaseStudySection
            index="06"
            eyebrow="Putting it in front of users"
            title="Then I stopped designing for hypothetical users."
            intro="The first version went live to a small early user base instead of being tested only through prototypes."
          >
            <div className="metric-strip metric-strip--four">
              <div><strong>50+</strong><span>users in one week</span></div>
              <div><strong>100+</strong><span>stories written</span></div>
              <div><strong>40%</strong><span>daily active users</span></div>
              <div><strong>3+</strong><span>writers on interesting topics</span></div>
            </div>

            <div className="signal-grid">
              <div><span>Signal 01</span><p>People were willing to write actual personal stories.</p></div>
              <div><span>Signal 02</span><p>People responded to stories rather than only consuming.</p></div>
              <div><span>Signal 03</span><p>Topics generated multiple perspectives.</p></div>
              <div><span>Signal 04</span><p>Some people continued stories.</p></div>
            </div>
          </CaseStudySection>

          <CaseStudySection
            index="07"
            eyebrow="Where Trace stands"
            title="The hypothesis survived. The product emphasis did not."
            intro="Topics lowered the barrier to expression, but retention exposed a second problem: getting someone to write once is very different from giving them a reason to return."
          >
            <div className="learning-shift">
              <div>
                <span>I started with</span>
                <p>How do I make everyday stories easier to share?</p>
              </div>
              <div className="learning-shift__arrow">→</div>
              <div>
                <span>The question became</span>
                <p>How do I make them worth coming back for?</p>
              </div>
            </div>

            <p className="case-conclusion">
              Trace is now shifting toward discovery, interesting people and narrative continuity before creation — while keeping writing available when users are ready. That is what I am validating next.
            </p>
          </CaseStudySection>
        </Container>

        <section className="case-next">
          <Container>
            <span>Thank you for reading</span>
            <a href="/#work">Back to selected work <ArrowUpRight size={22} /></a>
          </Container>
        </section>
      </main>
    </div>
  )
}
