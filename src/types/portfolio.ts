export type TimelinePoint = {
  date: string
  label: string
  detail?: string
}

export type Project = {
  title: string
  eyebrow?: string
  description: string
  year: string
  role?: string
  href?: string
  cta?: string
  visual: 'aurora' | 'ember' | 'violet' | 'mint' | 'mono' | 'sunset'
  image?: string
  imageAlt?: string
  metric?: string
  metricLabel?: string
  secondaryMetric?: string
  secondaryMetricLabel?: string
  tags?: string[]
}

export type Chapter = {
  index: string
  company: string
  period: string
  headline: string
  intro: string
  role: string
  timeline: TimelinePoint[]
  projects: Project[]
  lesson?: string
}

export type Experiment = {
  question: string
  answer: string
  meta: string
}
