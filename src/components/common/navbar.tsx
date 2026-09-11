import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#perjalanan", label: "Perjalanan" },
  { href: "#proyek", label: "Proyek" },
  { href: "#kontak", label: "Kontak" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Mencegah scroll body saat menu mobile terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hairline bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <a
          href="#beranda"
          className="font-heading text-2xl font-medium tracking-tight text-ink"
        >
          Yasir<span className="text-gold-soft">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-12 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-[0.15em] text-stone uppercase transition-colors duration-300 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CV Button */}
        <a
          href="#kontak"
          className="hidden border-b border-ink/30 pb-1 text-xs tracking-[0.15em] text-ink uppercase transition-colors duration-300 hover:border-ink md:inline-block"
        >
          Mari Diskusi
        </a>

        {/* Mobile Toggle */}
        <button
          className="relative z-50 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          <motion.div
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {open ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full h-screen border-t border-hairline bg-paper/95 px-6 py-8 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-8 pt-10 text-center">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-heading text-3xl font-medium text-ink transition-colors hover:text-gold-soft"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1, duration: 0.4 }}
                className="mt-8"
              >
                <a
                  href="#kontak"
                  className="inline-block rounded-none bg-ink px-8 py-4 text-sm tracking-[0.15em] text-paper uppercase transition-colors hover:bg-stone"
                >
                  Mari Diskusi
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
