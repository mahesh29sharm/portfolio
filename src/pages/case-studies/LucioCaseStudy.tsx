import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { CaseStudySection } from '../../components/case-study/CaseStudySection'
import { Container } from '../../components/layout/Container'
import { SiteHeader } from '../../components/layout/SiteHeader'

type ProductFrameProps = {
  src: string
  alt: string
  caption: string
  tone?: 'sage' | 'blue' | 'sand'
}

function ProductFrame({ src, alt, caption, tone = 'sage' }: ProductFrameProps) {
  return (
    <figure className={`lucio-product-frame lucio-product-frame--${tone}`}>
      <div className="lucio-product-frame__canvas">
        <img src={src} alt={alt} loading="lazy" />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export function LucioCaseStudy() {
  return (
    <div className="page case-page trace-case lucio-case" id="top">
      <SiteHeader />

      <main>
        <section className="case-hero">
          <Container>
            <a className="case-back" href="/#work"><ArrowLeft size={15} /> Selected work</a>

            <div className="case-hero__kicker">
              <span>Enterprise legal AI · Product redesign</span>
              <span>2024—2026</span>
            </div>

            <h1>Redesigning Lucio Assistant around how lawyers actually work.</h1>
            <p className="case-hero__lede">
              The AI was capable, but the experience reflected how the system worked rather than how legal work moved. Research with 24+ lawyers reframed Lucio from a series of chats into a persistent workspace built around matters, documents and evidence.
            </p>

            <div className="case-meta">
              <div><span>Product</span><strong>Lucio Assistant</strong></div>
              <div><span>Role</span><strong>Product Designer II</strong></div>
              <div><span>Research</span><strong>24+ lawyer interviews</strong></div>
              <div><span>Team</span><strong>UX consultant · Co-founder</strong></div>
              <div><span>Scope</span><strong>Research · Product architecture · Shipped experience</strong></div>
            </div>

            <ProductFrame
              src="/images/lucio/assistant-workspace.jpeg"
              alt="Lucio Assistant redesigned as a persistent legal workspace with files, matter navigation and visible active context"
              caption="The shipped Assistant — persistent sessions, organised files and visible context"
              tone="sage"
            />
          </Container>
        </section>

        <Container className="case-story">
          <CaseStudySection
            index="01"
            eyebrow="The starting point"
            title="The AI was capable. The experience was not yet built around legal work."
            intro="Lucio had grown rapidly as new AI capabilities were added. The immediate interactions worked, but the product increasingly mirrored its capabilities instead of the way lawyers organised a matter."
          >
            <div className="case-context-grid">
              <div><span>01</span><h3>Split context</h3><p>Documents lived separately from the conversation they were meant to inform.</p></div>
              <div><span>02</span><h3>Hidden state</h3><p>It was difficult to know what context the AI was actively using.</p></div>
              <div><span>03</span><h3>Growing controls</h3><p>New features accumulated without a shared interaction model.</p></div>
              <div><span>04</span><h3>Capability-led IA</h3><p>The product was organised around what the AI could do, not the work lawyers needed to finish.</p></div>
            </div>

            <ProductFrame
              src="/images/lucio/assistant-before.jpeg"
              alt="Earlier Lucio Assistant interface with a separate document panel and capability-heavy navigation"
              caption="Before — chat was primary and documents behaved like supporting attachments"
              tone="blue"
            />
          </CaseStudySection>

          <CaseStudySection
            index="02"
            eyebrow="Understanding the user"
            title="I deliberately did not start with the redesign."
            intro="First, I needed to reconstruct how legal work actually happened — not ask lawyers which features they wanted."
          >
            <div className="lucio-research-strip">
              <div><span>Scope</span><strong>Corporate · Transactional · Disputes · In-house</strong></div>
              <div><span>Sample</span><strong>24+ lawyer interviews</strong></div>
              <div><span>Method</span><strong>Recent-matter walkthroughs</strong></div>
            </div>

            <div className="quote-grid">
              <blockquote>“Walk me through the last matter you worked on.”</blockquote>
              <blockquote>“How did you know you hadn&apos;t missed something?”</blockquote>
              <blockquote>“At what point would you trust — or not trust — AI?”</blockquote>
            </div>

            <p className="case-big-line">Role → recent matter → workflow → friction → workaround → AI usage → failure → trust</p>
          </CaseStudySection>

          <CaseStudySection
            index="03"
            eyebrow="The synthesis"
            title="Lawyers do not fundamentally work in chats. They work in matters."
            intro="Across interviews, the same progression kept appearing: raw material became structured facts, then legal reasoning, then an action. A query-response history could not represent that continuity."
          >
            <div className="lucio-workflow" aria-label="How legal work moves from source material to action">
              {[
                ['Raw material', 'Documents · emails · notices · contracts'],
                ['Structure', 'Parties · clauses · dates · sections · versions'],
                ['Facts', 'What happened?'],
                ['Issues & reasoning', 'What matters legally?'],
                ['Action', 'Draft · advice · review · research · filing'],
              ].map(([label, detail], index) => (
                <div key={label}><span>{String(index + 1).padStart(2, '0')}</span><strong>{label}</strong><p>{detail}</p></div>
              ))}
            </div>

            <div className="case-callout lucio-callout">
              <p>Chat was an interaction mechanism. It should not be the information architecture.</p>
            </div>
          </CaseStudySection>

          <CaseStudySection
            index="04"
            eyebrow="Research → principles"
            title="Turn recurring behaviours into criteria before designing features."
            intro="Six principles gave the team a shared way to evaluate directions and kept the redesign grounded in the conditions of legal work."
          >
            <div className="lucio-principles">
              <div><span>01</span><strong>Trust</strong><p>Do not require blind confidence in AI.</p></div>
              <div><span>02</span><strong>Visibility</strong><p>Make context and system state explicit.</p></div>
              <div><span>03</span><strong>Control</strong><p>Let lawyers decide what the AI works with.</p></div>
              <div><span>04</span><strong>Traceability</strong><p>Lead every important output back to evidence.</p></div>
              <div><span>05</span><strong>Continuity</strong><p>Support work that persists across hours and days.</p></div>
              <div><span>06</span><strong>Scale</strong><p>Make the model work for three documents or 300.</p></div>
            </div>
          </CaseStudySection>

          <CaseStudySection
            index="05"
            eyebrow="The product shift"
            title="From an AI conversation to a persistent legal workspace."
            intro="Research changed the product architecture, not only the interface. Sessions became ongoing matters; documents and active context became part of the workspace."
          >
            <div className="model-compare">
              <div className="model-compare__old">
                <span>Before</span>
                <strong>Query → response → query → response</strong>
              </div>
              <div className="model-compare__new lucio-model-after">
                <span>After</span>
                <strong>Matter → persistent context → evidence-backed output</strong>
              </div>
            </div>

            <div className="lucio-visual-pair">
              <ProductFrame
                src="/images/lucio/assistant-response-before.jpeg"
                alt="Earlier Lucio response view with chat in the centre and a detached documents panel"
                caption="Before — context was fragmented across chat and a separate panel"
                tone="blue"
              />
              <ProductFrame
                src="/images/lucio/assistant-context-after.jpeg"
                alt="Redesigned Lucio matter workspace showing persistent file hierarchy and selected documents in the composer"
                caption="After — the matter, files and active context remain visible together"
                tone="sage"
              />
            </div>

            <div className="decision-list lucio-change-list">
              <article><span>Persistent sessions</span><h3>Work can continue.</h3><p>A session represents ongoing legal work rather than disposable chat history.</p></article>
              <article><span>Files + session</span><h3>Context stays organised.</h3><p>Documents live with the matter and retain their hierarchy.</p></article>
              <article><span>Visible active context</span><h3>The system state is explicit.</h3><p>Selected files appear directly inside the composer before a request is sent.</p></article>
              <article><span>Traceability</span><h3>Outputs return to evidence.</h3><p>Internal citations highlight source material while files retain their original structure.</p></article>
            </div>
          </CaseStudySection>

          <CaseStudySection
            index="06"
            eyebrow="Shipping within constraints"
            title="Preserve the mental model without rebuilding an entire document system."
            intro="Research pointed toward a Drive-like matter-management model. Engineering constraints changed the route, but not the qualities that mattered most."
          >
            <div className="lucio-direction-grid">
              <div>
                <span>Direction explored</span>
                <h3>Full Drive / matter-management model</h3>
                <p>Mirrored lawyer organisation and offered persistent hierarchy, but required major infrastructure, permissions and persistence work.</p>
              </div>
              <div>
                <span>Direction shipped</span>
                <h3>Session as persistent workspace</h3>
                <p>Preserved continuity, hierarchy, document context and the matter mental model without rebuilding a DMS.</p>
              </div>
            </div>

            <div className="case-callout lucio-callout lucio-callout--light">
              <p>Repeated task → good prompt → reusable, shareable workflow.</p>
              <small>The Prompt Library turned strong legal prompts into organisational knowledge instead of individual craft.</small>
            </div>

            <ProductFrame
              src="/images/lucio/product-walkthrough.jpeg"
              alt="Lucio Assistant product walkthrough video showing the shipped legal AI workspace"
              caption="Shipped product walkthrough — from the design decisions to the working Assistant"
              tone="sand"
            />
          </CaseStudySection>

          <CaseStudySection
            index="07"
            eyebrow="Validation & impact"
            title="Look for behavioural and operational change, not only positive feedback."
            intro="After launch, the strongest signals came from product choice, support load and adoption across firms."
          >
            <div className="metric-strip lucio-metrics">
              <div><strong>50%+</strong><span>At one firm, more than half of lawyers began choosing Lucio over ChatGPT.</span></div>
              <div><strong>↓</strong><span>Customer Success reported significantly fewer workflow-related, non-bug questions.</span></div>
              <div><strong>100+</strong><span>Additional firms adopted Lucio during the period following the rollout.</span></div>
            </div>

            <p className="case-conclusion">
              The redesign made Lucio&apos;s model match the work around it: persistent, document-heavy and evidence-led. Firm growth was influenced by several business factors, so it should not be attributed to the redesign alone.
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
