import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="bg-ink px-6 py-6 text-paper">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-stone-light sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Seluruh hak cipta
          dilindungi.
        </p>
        <p>
          Dirancang &amp; dibangun dengan ReactJs, TypeScript, dan Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
