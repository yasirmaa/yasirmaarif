import { about } from "@/data/profile"
import { SectionHeading } from "../common/section-heading"

export function About() {
  return (
    <section id="tentang" className="border-t border-hairline bg-ink py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading index="01" title="Tentang Saya" />

        <div className="grid grid-cols-1">
          <p className="text-center text-lg leading-relaxed text-stone-light md:col-span-1">
            {about.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}
