import type { SimpleIcon } from "simple-icons"

type SkillIconProps = {
  icon: SimpleIcon
  size?: number
  className?: string
}

export function SkillIcon({ icon, size = 28, className }: SkillIconProps) {
  return (
    <svg
      role="img"
      aria-label={icon.title}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icon.path} />
    </svg>
  )
}
