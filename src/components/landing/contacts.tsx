import { Download, Mail, MessageCircle } from "lucide-react"
import { profile } from "@/data/profile"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section
      id="kontak"
      className="border-t border-hairline bg-ink py-28 text-paper"
    >
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="font-display text-lg text-gold-soft">04</span>
        <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl leading-tight font-medium sm:text-5xl">
          Mari berdiskusi soal peluang kerja sama atau proyek berikutnya.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-stone-light">
          Terbuka untuk peluang full-time, kolaborasi proyek, maupun sekadar
          berdiskusi seputar teknologi.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button className="bg-gold text-ink hover:bg-paper">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2"
            >
              <Mail size={16} />
              Kirim Email
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-paper/30 text-paper hover:border-gold hover:text-gold"
          >
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </Button>
          <Button variant="secondary" className="text-ink hover:text-gold">
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Unduh CV
            </a>
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 border-t border-paper/10 pt-10 text-sm text-stone-light">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 transition-colors duration-300 hover:text-gold"
          >
            <img
              src={"/src/assets/icon/linkedin_w.png"}
              alt=""
              className="h-4 w-4 opacity-80 transition-opacity group-hover:opacity-100"
            />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 transition-colors duration-300 hover:text-gold"
          >
            <img
              src="https://cdn.simpleicons.org/github/A6A29A"
              alt=""
              className="h-4 w-4 opacity-80 transition-opacity group-hover:opacity-100"
            />
            GitHub
          </a>
          <span className="hidden items-center gap-2 sm:flex">
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  )
}
