import { useEffect, useState } from "react"
import { motion } from "motion/react"

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Deteksi jika elemen yang di-hover adalah link atau button
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  // Render cursor hanya di desktop (disembunyikan di perangkat touch/mobile)
  return (
    <>
      {/* Lingkaran Besar (Trailing) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-99 hidden h-10 w-10 items-center justify-center rounded-full border border-stone-light/50 md:flex"
        animate={{
          x: mousePosition.x - 20, // Offset setengah dari ukuran (40px / 2)
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering
            ? "rgba(169, 129, 46, 0.1)"
            : "transparent", // Warna gold-soft dengan opacity
          borderColor: isHovering
            ? "var(--color-gold-soft)"
            : "rgba(166, 162, 154, 0.5)",
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Titik Kecil (Core Cursor) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-99 hidden h-1.5 w-1.5 rounded-full bg-ink md:block"
        animate={{
          x: mousePosition.x - 3, // Offset setengah dari ukuran (6px / 2)
          y: mousePosition.y - 3,
          opacity: isHovering ? 0 : 1, // Sembunyikan titik saat hover untuk kesan minimalis
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0, // Tanpa delay, ikuti mouse secara instan
        }}
      />
    </>
  )
}
