import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Container } from '../../components/layout/Container'
import { SiteHeader } from '../../components/layout/SiteHeader'

type BrandImageProps = {
  src: string
  alt: string
  className?: string
}

function BrandImage({ src, alt, className = '' }: BrandImageProps) {
  return (
    <figure className={`brand-image ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
    </figure>
  )
}

export function BrandDesignCaseStudy() {
  return (
    <div className="page case-page brand-case" id="top">
      <SiteHeader />

      <main>
        <section className="brand-case__hero">
          <Container>
            <a className="case-back" href="/#work"><ArrowLeft size={15} /> Selected work</a>

            <div className="brand-case__hero-grid">
              <div>
                <p className="brand-case__eyebrow">Selected work · Brand systems</p>
                <h1>Brand &amp;<br />Communication Design</h1>
              </div>
              <p className="brand-case__lede">
                Building identities, visual systems and communication that make brands feel clear, distinctive and credible.
              </p>
            </div>

            <figure className="brand-case__overview">
              <img src="/images/Brand.png" alt="Identity marks for Lucio, Fervor and BLR Restro" fetchPriority="high" />
            </figure>
          </Container>
        </section>

        <Container className="brand-case__story">
          <section className="brand-project brand-project--lucio">
            <div className="brand-project__header">
              <span>01 / Lucio</span>
              <div>
                <h2>Repositioning Lucio for its next stage of growth</h2>
                <p>
                  As Lucio entered its next stage of growth, the brand needed to feel more mature, credible and intentional. The existing identity didn&apos;t fully reflect the seriousness of the business or the expectations of lawyers, law firms and high-value legal teams.
                </p>
                <p>
                  I redesigned the identity to feel more premium, precise and trustworthy, giving Lucio a visual presence that could sit confidently in front of a high-end professional audience.
                </p>
              </div>
            </div>

            <BrandImage
              src="/images/brand/lucio-identity-applications.jpeg"
              alt="Lucio identity applied to business cards, a tote, drinkware, a notebook, glasses, a pen, a payment card and a lanyard"
              className="brand-image--dark"
            />
          </section>

          <section className="brand-project brand-project--fervor">
            <div className="brand-project__header">
              <span>02 / Fervor</span>
              <div>
                <h2>Giving an emerging restaurant a recognisable social voice</h2>
                <p>
                  For Fervor, I helped shape the brand&apos;s early social media identity, defining a visual direction that felt consistent, contemporary and recognisable. The work focused on translating the brand into a repeatable communication style across posts and digital touchpoints.
                </p>
              </div>
            </div>

            <BrandImage
              src="/images/brand/fervor-sketchbook.jpeg"
              alt="Fervor concept sketches and plated dishes arranged across an open notebook"
              className="brand-image--wide"
            />

            <div className="brand-pair brand-pair--fervor">
              <BrandImage
                src="/images/brand/fervor-opening-post.jpeg"
                alt="Fervor restaurant opening announcement featuring a plated dish"
              />
              <BrandImage
                src="/images/brand/fervor-invitation.jpeg"
                alt="Fervor launch invitation in deep green and warm cream"
              />
            </div>
          </section>

          <section className="brand-project brand-project--blr">
            <div className="brand-project__header">
              <span>03 / BLR Restro</span>
              <div>
                <h2>Expanding a restaurant identity into a flexible system</h2>
                <p>
                  For BLR Restro, I helped refresh the brand guidelines and communication design to create a more distinctive, flexible and cohesive visual identity. The work focused on expanding the brand system beyond its existing limitations and giving its social and digital communication a stronger, more recognisable voice.
                </p>
              </div>
            </div>

            <BrandImage
              src="/images/brand/blr-colour-system.jpeg"
              alt="BLR Restro colour system in navy, mustard, sage, terracotta and brown"
              className="brand-image--wide"
            />

            <div className="brand-pair brand-pair--type">
              <BrandImage src="/images/brand/blr-primary-type.jpeg" alt="Fraunces primary type specimen" />
              <BrandImage src="/images/brand/blr-secondary-type.jpeg" alt="Instrument Sans secondary type specimen" />
            </div>

            <BrandImage
              src="/images/brand/blr-type-composition.jpeg"
              alt="BLR Restro typography composition combining Instrument Sans and Fraunces"
              className="brand-image--terracotta"
            />

            <div className="brand-pair brand-pair--blr">
              <BrandImage src="/images/brand/blr-colour-applications.jpeg" alt="Mall of Asia announcement shown across the BLR Restro palette" />
              <BrandImage src="/images/brand/blr-social-system.jpeg" alt="Four social communication directions for BLR Restro" />
            </div>
          </section>
        </Container>

        <section className="case-next brand-case__next">
          <Container>
            <span>Thank you for reading</span>
            <a href="/#work">Back to selected work <ArrowUpRight size={22} /></a>
          </Container>
        </section>
      </main>
    </div>
  )
}
