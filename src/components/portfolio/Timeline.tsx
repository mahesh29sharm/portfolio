import { useId, useState } from 'react'
import type { TimelinePoint } from '../../types/portfolio'

type TimelineProps = {
  points: TimelinePoint[]
}

export function Timeline({ points }: TimelineProps) {
  const timelineId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const activePoint = points[activeIndex]

  return (
    <div className="career-timeline">
      <p className="career-timeline__title">Career timeline</p>

      <ol className="career-timeline__desktop">
        {points.map((point) => (
          <li key={`${point.date}-${point.label}`}>
            <strong>{point.date}</strong>
            <p>{point.label}</p>
          </li>
        ))}
      </ol>

      <div className="career-timeline__mobile">
        <div className="career-timeline__tabs" role="tablist" aria-label="Career progression">
          {points.map((point, index) => (
            <button
              className={index === activeIndex ? 'is-active' : ''}
              type="button"
              role="tab"
              id={`${timelineId}-tab-${index}`}
              aria-controls={`${timelineId}-panel`}
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              key={`${point.date}-${index}`}
            >
              {point.date}
            </button>
          ))}
        </div>

        <div
          className="career-timeline__panel"
          id={`${timelineId}-panel`}
          role="tabpanel"
          aria-labelledby={`${timelineId}-tab-${activeIndex}`}
        >
          <p>{activePoint.label}</p>
        </div>
      </div>
    </div>
  )
}
