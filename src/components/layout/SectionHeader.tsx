type SectionHeaderProps = {
  index: string
  label: string
  aside?: string
}

export function SectionHeader({ index, label, aside }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div className="section-header__left">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      {aside ? <span className="section-header__aside">{aside}</span> : null}
    </div>
  )
}
