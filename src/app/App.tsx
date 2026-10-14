import { HomePage } from '../pages/HomePage'
import { TraceCaseStudy } from '../pages/case-studies/TraceCaseStudy'
import { LucioCaseStudy } from '../pages/case-studies/LucioCaseStudy'
import { BrandDesignCaseStudy } from '../pages/case-studies/BrandDesignCaseStudy'
import { ProjectPlaceholder } from '../pages/case-studies/ProjectPlaceholder'

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'

  if (path === '/work/trace') {
    return <TraceCaseStudy />
  }

  if (path === '/work/lucio') {
    return <LucioCaseStudy />
  }

  if (path === '/work/brand-design') {
    return <BrandDesignCaseStudy />
  }

  if (path.startsWith('/work/')) {
    return <ProjectPlaceholder slug={path.replace('/work/', '')} />
  }

  return <HomePage />
}
