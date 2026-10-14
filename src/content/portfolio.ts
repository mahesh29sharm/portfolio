import type { Chapter, Experiment } from '../types/portfolio'

export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Play', href: '#lab' },
  { label: 'Personality', href: '#personality' },
  { label: 'About', href: '#about' },
]

export const personality = [
  { label: 'Singing', emoji: '🎤' },
  { label: 'Travelling', emoji: '🏔️' },
  { label: 'Biking', emoji: '🚴' },
  { label: 'Running', emoji: '🏃' },
]

export const hero = {
  kicker: 'Mahesh / Design Engineer / Bengaluru',
  titleLead: 'I turn ambiguous ideas into',
  titleAccent: 'products',
  titleTail: 'people can actually use.',
  body:
    'Previously at Pratilipi, where I worked across visual storytelling and creative experiences. More recently at Lucio, designing AI products for legal teams and helping shape the product and brand as it evolved. Now I’m building, experimenting, and looking for ambitious product problems worth obsessing over.',
  availability: 'Open to ambitious 0→1 product work',
  personality: ['Product mind.', 'Design craft.', 'Builder energy.'],
  personalNote: 'Vi is my cat, coworker and occasional design supervisor.',
}

export const mainChapters: Chapter[] = [
  {
    index: '01',
    company: 'Articled / Trace',
    period: '2021 / 2026',
    headline: 'The first time I stopped waiting for permission and built the thing myself.',
    intro:
      'Two independent social products exploring how people write, share and connect through everyday stories.',
    role: 'Founder · Product · Design · Build',
    timeline: [
      {
        date: '2021 · Articled',
        label: 'Built my first social writing product from zero and grew it past 1,000 users.',
      },
      {
        date: '2026 · Trace',
        label: 'Revisited the idea as a text-first social product centred on everyday stories.',
      },
    ],
    projects: [
      {
        title: 'From Articled to Trace',
        eyebrow: 'Social / consumer products',
        description:
          'A continuous exploration of whether writing about ordinary life can create more meaningful social connection.',
        year: '2021—26',
        role: 'Founder / Designer / Builder',
        visual: 'sunset',
        image: '/images/Frame 1739327248.png',
        imageAlt: 'Trace mobile product shown across discovery and story-reading screens',
        metric: '1,000+',
        metricLabel: 'Articled users in 2021',
        tags: ['0→1', 'B2C', 'Social', 'React Native'],
        href: '/work/trace',
        cta: 'Read case study',
      },
    ],
  },
  {
    index: '02',
    company: 'Lucio',
    period: '2024—2026',
    headline: 'From consumer storytelling to dense enterprise workflows and AI that had to earn trust.',
    intro: 'At Lucio, I helped shape the product and brand early, then expanded into complex legal workflows.',
    role: 'Founding Designer → Product Designer II',
    timeline: [
      {
        date: 'Founding Designer',
        label: 'Established the early product language and brand identity.',
      },
      {
        date: 'Product Designer II',
        label: 'Designed AI workflows across web, native desktop and mobile products.',
      },
    ],
    projects: [
      {
        title: 'Building the product language for enterprise legal AI',
        eyebrow: 'Lucio · AI / enterprise',
        description:
          'Early foundations, AI workflows and cross-platform systems for complex professional work.',
        year: '2024—26',
        role: 'Founding Designer → Product Designer II',
        visual: 'violet',
        image: '/images/Frame 1739327263.png',
        imageAlt: 'Lucio legal AI workspace reviewing merger risks and matter files',
        metric: '4',
        metricLabel: 'major products',
        tags: ['AI-native', 'B2B', 'LegalTech', 'Cross-platform'],
        href: '/work/lucio',
        cta: 'View project',
      },
    ],
  },
  // {
  //   index: '03',
  //   company: 'Pratilipi',
  //   period: '2022—2024',
  //   headline: 'From crafting immersive stories to designing the system that made more of them possible.',
  //   intro: 'Creative experiences and production systems designed for an audience measured in millions.',
  //   role: 'Creative Experience Lead → Senior Creative Experience Lead',
  //   timeline: [
  //     {
  //       date: 'Creative Experience Lead',
  //       label: 'Created immersive reading experiences for a consumer app with 1M+ MAU.',
  //     },
  //     {
  //       date: 'Senior Creative Experience Lead',
  //       label: 'Built systems that increased production capacity by 4×.',
  //     },
  //   ],
  //   projects: [
  //     {
  //       title: 'Storytelling experiences and the system behind them',
  //       eyebrow: 'Pratilipi · consumer storytelling',
  //       description:
  //         'Immersive reading for Indian audiences and a scalable production system for the team behind it.',
  //       year: '2022—24',
  //       role: 'Creative Experience Lead → Senior Creative Experience Lead',
  //       visual: 'ember',
  //       metric: '1M+',
  //       metricLabel: 'monthly active users',
  //       secondaryMetric: '4×',
  //       secondaryMetricLabel: 'production capacity',
  //       tags: ['B2C', 'Storytelling', 'Systems', 'India'],
  //       href: '/work/pratilipi',
  //       cta: 'View project',
  //     },
  //   ],
  // },
  {
    index: '03',
    company: 'Brand Work',
    period: 'Selected work',
    headline: 'Identity systems designed to give products and places a distinct voice.',
    intro: 'Selected brand work spanning technology products, independent ventures and hospitality.',
    role: 'Strategy · Identity · Visual systems',
    timeline: [
      {
        date: 'Across roles',
        label: 'Identity and visual-system work for Lucio, Fervor, BLR Restro and independent product brands.',
      },
    ],
    projects: [
      {
        title: 'Brands with a clear point of view',
        eyebrow: 'Identity / visual systems',
        description:
          'A selection of marks and identity directions built to make very different products feel recognisable, coherent and ownable.',
        year: 'Selected work',
        role: 'Brand designer',
        visual: 'mono',
        image: '/images/Brand.png',
        imageAlt: 'A selection of identity marks for Lucio, Fervor and BLR Restro on a black background',
        tags: ['Brand strategy', 'Identity', 'Typography', 'Visual systems'],
        href: '/work/brand-design',
        cta: 'View brand work',
      },
    ],
  },
]

export const independentChapters: Chapter[] = [
  {
    index: '01',
    company: 'Hitam',
    period: '2026—Now',
    headline: 'An independent exploration of personalised Vedic intelligence.',
    intro: 'A live product shaped through positioning, building and real-world feedback.',
    role: 'Product · Design · Engineering',
    timeline: [
      { date: 'Build', label: 'Turned the initial product thesis into a working experience.' },
      { date: 'Learn', label: 'Changed the positioning when the first version failed to create enough pull.' },
    ],
    projects: [
      {
        title: 'Hitam',
        eyebrow: 'Independent creation · AI / knowledge',
        description: 'Personalised Vedic intelligence designed to make patterns and life phases easier to understand.',
        year: '2026',
        role: 'Independent build',
        visual: 'ember',
        image: '/images/Hitam.png',
        imageAlt: 'Hitam mobile experience for personalised Vedic intelligence',
        tags: ['AI-native', 'Positioning', '0→1', 'Build'],
        href: 'https://hitamai.vercel.app',
        cta: 'View project',
      },
    ],
  },
]

export const experiments: Experiment[] = [
  {
    question: '355 visits. 429 clicks. Almost no installs. Why?',
    answer: 'A distribution signal forced me to question the value proposition instead of polishing the onboarding forever.',
    meta: 'Trace · acquisition experiment',
  },
  {
    question: 'What happens when the first positioning is wrong?',
    answer: 'I changed the thesis instead of defending the interface — and rebuilt the product around a sharper user situation.',
    meta: 'Hitam · positioning pivot',
  },
  {
    question: 'Can a workflow be designed for throughput without becoming soulless?',
    answer: 'At Pratilipi, systems design became a creative tool when the team needed to produce far more without flattening quality.',
    meta: 'Pratilipi · production systems',
  },
]

export const about = {
  title: 'Designer by craft. Builder by instinct.',
  body:
    'I am most useful when the problem is still messy — when the team needs someone who can understand users, shape the product, make the interaction tangible, prototype quickly and care about how the final thing actually ships.',
  now:
    'Right now I am interested in ambitious 0→1 products, AI-native experiences, consumer behaviour and teams where design and engineering are close enough to argue product decisions together.',
}
