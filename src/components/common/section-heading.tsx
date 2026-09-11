import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  index: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export function SectionHeading({
  index,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:justify-center md:text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-baseline gap-4",
          align === "center" && "flex-col items-center gap-2"
        )}
      >
        <span className="text-lg text-gold">{index}</span>
        <h2 className="font-heading text-3xl leading-tight font-medium text-gold sm:text-4xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm font-heading text-sm leading-relaxed text-stone">
          {description}
        </p>
      )}
    </div>
  )
}
