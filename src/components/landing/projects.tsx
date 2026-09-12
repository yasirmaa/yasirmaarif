import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/data/profile"
import { cn } from "@/lib/utils"
import { SectionHeading } from "../common/section-heading"

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Projects() {
  return (
    <section id="proyek" className="border-t border-hairline bg-paper py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          index="03"
          title="Proyek Terpilih"
          description="Rangkaian karya yang mencerminkan dedikasi pada kode yang bersih dan solusi berbasis arsitektur."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10%" }}
              custom={index * 0.15}
              variants={revealUp}
              className={cn(
                "group flex flex-col border border-hairline bg-panel/20 transition-colors duration-500 hover:border-gold-soft hover:bg-panel/40",
                project.size === "wide" && "md:col-span-2 md:flex-row"
              )}
            >
              {/* Image Container */}
              <div
                className={cn(
                  "relative w-full shrink-0 overflow-hidden bg-panel",
                  project.size === "wide" ? "h-64 md:h-auto md:w-5/12" : "h-72"
                )}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 group-hover:contrast-100 group-hover:grayscale-0"
                />
                {/* Overlay tipis agar menyatu dengan border */}
                <div className="pointer-events-none absolute inset-0 border border-ink/5 mix-blend-overlay" />
              </div>

              {/* Konten */}
              <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                <div>
                  <p className="text-xs font-medium tracking-[0.15em] text-gold-soft uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-4 font-heading text-3xl leading-tight font-medium text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    {project.description}
                  </p>
                </div>

                <div className="mt-10 flex items-end justify-between gap-4">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-semibold tracking-widest text-stone-light uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-hairline bg-paper transition-all duration-500 group-hover:border-gold-soft group-hover:bg-gold-soft">
                    <ArrowUpRight
                      size={18}
                      className="text-ink transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-paper"
                    />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
