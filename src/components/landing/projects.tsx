import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/profile"
import { cn } from "@/lib/utils"
import { SectionHeading } from "../common/section-heading"

export function Projects() {
  return (
    <section id="proyek" className="border-t border-hairline bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          index="03"
          title="Proyek Terpilih"
          description="Sebagian proyek yang saya kerjakan selama magang, organisasi, dan riset."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={cn(
                "group flex flex-col border border-hairline transition-colors duration-300 hover:border-gold",
                project.size === "wide" && "md:col-span-2 md:flex-row"
              )}
            >
              {/* placeholder visual */}
              <div
                className={cn(
                  "h-56 w-full shrink-0 bg-panel transition-colors duration-300 group-hover:bg-hairline",
                  project.size === "wide" && "md:h-auto md:w-2/5"
                )}
              />

              <div className="flex flex-1 flex-col justify-between p-8">
                <div>
                  <p className="text-xs text-gold">{project.category}</p>
                  <h3 className="font-display mt-2 text-2xl font-medium text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs text-stone-light">
                        {t}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
