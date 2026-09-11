import { motion, type Variants } from "motion/react"
import { Briefcase, GraduationCap, Users } from "lucide-react"
import { timeline, certifications } from "@/data/profile"
import { SectionHeading } from "../common/section-heading"

const typeIcon = {
  work: Briefcase,
  leadership: Users,
  education: GraduationCap,
}

const revealUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function Experience() {
  return (
    <section id="perjalanan" className="bg-paper py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          index="02"
          title="Perjalanan"
          description="Jejak langkah profesional, kepemimpinan, dan dedikasi dalam membangun solusi."
        />

        {/* Timeline Grid (Luxury Editorial Style) */}
        <div className="flex flex-col border-b border-hairline">
          {timeline.map((item, index) => {
            const Icon = typeIcon[item.type]
            return (
              <motion.div
                key={item.title + item.period}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10%" }}
                custom={index * 0.1}
                variants={revealUp}
                className="group flex flex-col border-t border-hairline py-10 transition-colors duration-500 hover:bg-panel/40 md:flex-row md:py-16"
              >
                {/* Kolom 1: Periode (Kiri) */}
                <div className="mb-4 w-full md:mb-0 md:w-1/4 md:pt-2 md:pr-8">
                  <span className="text-xs font-semibold tracking-[0.15em] text-stone-light uppercase">
                    {item.period}
                  </span>
                </div>

                {/* Kolom 2: Title & Place (Tengah) */}
                <div className="mb-6 w-full md:mb-0 md:w-5/12 md:pr-12">
                  <h3 className="font-heading text-3xl font-medium text-ink transition-transform duration-500 group-hover:translate-x-2 md:text-4xl">
                    {item.title}
                  </h3>

                  <div className="mt-5 flex items-center gap-3 text-xs font-medium tracking-widest text-gold-soft uppercase">
                    <Icon size={16} />
                    <span>{item.place}</span>
                  </div>
                </div>

                {/* Kolom 3: Deskripsi (Kanan) */}
                <div className="w-full md:w-4/12">
                  <ul className="flex flex-col gap-4">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="relative pl-6 text-sm leading-relaxed text-stone"
                      >
                        <span className="absolute top-1.5 left-0 h-px w-3.5 bg-gold-soft" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications - Clean List Layout */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={revealUp}
          className="mt-32"
        >
          <div className="mb-10 flex items-center justify-between border-b border-hairline pb-4">
            <h3 className="font-heading text-2xl font-medium text-ink">
              Sertifikasi Profesional
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative flex flex-col gap-2 p-6 transition-colors hover:bg-panel/40"
              >
                {/* Aksen border kiri yang muncul saat hover */}
                <div className="absolute inset-y-0 left-0 w-0.5 scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />

                <p className="font-heading text-xl font-medium text-ink">
                  {cert.title}
                </p>
                <div className="mt-2 flex items-center justify-between text-sm text-stone">
                  <span className="flex-1">{cert.issuer}</span>
                  <span className="text-xs tracking-widest text-stone-light uppercase">
                    {cert.period.split("—")[0].trim()}{" "}
                    {/* Hanya ambil tahun mulai jika ingin lebih minimalis */}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
