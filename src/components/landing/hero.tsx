import { motion } from "motion/react"
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react"
import { profile, skills } from "@/data/profile"
import { Button } from "@/components/ui/button"

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

function AvailabilityBadge() {
  return (
    <div className="relative h-28 w-28 drop-shadow-sm">
      <motion.svg
        viewBox="0 0 100 100"
        className="h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id="badge-circle"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-ink text-[8.5px] font-medium tracking-[0.18em] uppercase">
          <textPath href="#badge-circle" startOffset="0%">
            Terus Belajar & Bertumbuh Bersama•
          </textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink">
          <ArrowUpRight size={18} className="text-paper" />
        </span>
      </div>
    </div>
  )
}

function TechMarquee() {
  const loop = [...skills, ...skills]
  return (
    <div className="relative overflow-hidden border-t border-hairline bg-paper">
      <motion.div
        className="flex w-max items-center gap-12 py-5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((skill, i) => (
          <span
            key={`${skill.name}-${i}`}
            className="flex items-center gap-12 text-sm tracking-widest text-stone-light/80 uppercase"
          >
            {skill.name}
            <span className="text-xs text-gold-soft">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-paper selection:bg-gold-soft selection:text-paper"
    >
      <div className="mx-auto flex max-w-7xl flex-1 flex-col justify-center px-6 pt-20 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Konten Kiri (Tipografi) */}
          <div className="z-10 order-2 flex flex-col justify-center lg:order-1 lg:col-span-7">
            <motion.div
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={revealUp}
              className="mb-8 flex items-center gap-3 text-xs tracking-[0.25em] text-stone uppercase"
            >
              <span className="font-semibold text-ink">{profile.role}</span>
              <span className="h-px w-8 bg-gold-soft" />
              <span className="hidden items-center gap-1.5 sm:flex">
                <MapPin size={14} className="text-gold" />
                {profile.location}
              </span>
            </motion.div>

            <div className="relative mb-6">
              <motion.h1
                initial="hidden"
                animate="show"
                custom={0.2}
                variants={revealUp}
                className="font-heading text-6xl leading-[0.9] font-medium tracking-tight text-ink sm:text-8xl lg:text-[7.5rem] xl:text-[9rem]"
              >
                Yasir
              </motion.h1>
              <motion.h1
                initial="hidden"
                animate="show"
                custom={0.3}
                variants={revealUp}
                className="font-heading text-6xl leading-[0.9] font-medium tracking-tight text-gold italic sm:pl-16 sm:text-8xl lg:pl-24 lg:text-[7.5rem] xl:text-[9rem]"
              >
                Maarif
              </motion.h1>
            </div>

            <motion.p
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={revealUp}
              className="mt-4 max-w-xl text-base leading-relaxed text-stone sm:text-lg md:mt-6"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={0.5}
              variants={revealUp}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Button
                size="lg"
                className="h-12 rounded-none bg-ink px-8 text-sm tracking-wide text-paper transition-colors hover:bg-stone"
              >
                <a href="#proyek" className="group flex items-center gap-2">
                  Lihat Proyek
                  <ArrowDownRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-none border-stone-light px-8 text-sm tracking-wide text-ink transition-colors hover:border-ink"
              >
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Resume (CV)
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Konten Kanan (Gambar Proporsional) */}
          <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:col-span-4 lg:col-start-9 lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-3/4 w-full"
            >
              {/* Ornamen Garis / Frame Mewah */}
              <div className="absolute -top-4 -right-4 z-0 hidden h-full w-full border border-gold/40 lg:block" />

              <div className="relative z-10 h-full w-full overflow-hidden bg-panel shadow-xl">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover object-top contrast-[1.15] grayscale-[0.8] transition-all duration-700 ease-in-out hover:contrast-100 hover:grayscale-0"
                />
              </div>

              {/* Badge Overlap yang Estetik */}
              <motion.div
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                className="absolute -bottom-10 -left-10 z-20 hidden md:block"
              >
                <AvailabilityBadge />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <TechMarquee />
    </section>
  )
}
