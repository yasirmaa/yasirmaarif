export const profile = {
  name: "Yasir Maarif",
  role: "Software Engineer",
  tagline:
    "Membangun aplikasi website modern dengan fokus pada pengalaman pengguna dan kualitas kode menggunakan ReactJs, NextJs, dan Laravel.",
  location: "Surabaya, Indonesia",
  email: "yasirmaarif26@gmail.com",
  phone: "+62 852 3053 8453",
  whatsappLink: "https://wa.me/6285230538453",
  linkedin: "https://linkedin.com/in/yasirmaarif",
  github: "https://github.com/yasirmaa",
  githubUsername: "yasirmaa",
  cvUrl: "/docs/Yasir_Maarif_CV.pdf",
  photo: "/images/ym-sdm.png",
}

export const about = {
  paragraph:
    "Lulusan D4 Teknik Informatika PENS dengan 10 bulan pengalaman hands-on sebagai Frontend Developer di dua perusahaan berbeda. Fokus utama saya adalah ReactJS, Laravel, dan NextJS untuk membangun aplikasi web yang scalable dan maintainable, dengan kemampuan menerjemahkan kebutuhan teknis yang kompleks menjadi kode yang bersih dan efisien. Di luar coding, saya juga membawa pengalaman kepemimpinan yang kuat dengan menjadi Ketua Umum Organisasi Mahasiswa UKKI PENS dan menjadi Supervisor di asrama beasiswa mahasiswa yang mengasah kemampuan komunikasi, pengambilan keputusan, dan kerja sama tim.",
}

export type Skill = { name: string; icon: string }

export const skills: Skill[] = [
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React.js", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Redux", icon: "redux" },
  { name: "Zustand", icon: "react" },
  { name: "TanStack Query", icon: "reactquery" },
  { name: "Express.js", icon: "express" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "Dart", icon: "dart" },
  { name: "Flutter", icon: "flutter" },
  { name: "MySQL", icon: "mysql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
  { name: "Laravel", icon: "laravel" },
]

export type TimelineItem = {
  period: string
  title: string
  place: string
  type: "work" | "leadership" | "education"
  points: string[]
}

export const timeline: TimelineItem[] = [
  {
    period: "Agu 2025 — Sekarang",
    title: "Supervisor",
    place: "SDM IPTEK Scholarship Dormitory Program, Surabaya",
    type: "leadership",
    points: [
      "Membina dan membimbing 20 penerima beasiswa dalam pengembangan akademik dan personal.",
      "Mengoordinasikan sesi coaching terstruktur dan memantau progres peserta program.",
    ],
  },
  {
    period: "Agu 2025 — Des 2025",
    title: "Frontend Developer, Internship",
    place: "PT Hayago Robotika Indonesia, Surabaya",
    type: "work",
    points: [
      "Mengembangkan Online Course web application dengan ReactJS untuk penyampaian konten belajar terstruktur.",
      "Membangun CMMS (Computerized Maintenance Management System) untuk pelacakan dan penjadwalan pemeliharaan aset.",
    ],
  },
  {
    period: "Feb 2025 — Jun 2025",
    title: "Frontend Developer, Internship",
    place: "PT Aksamedia Mulia Digital, Surabaya",
    type: "work",
    points: [
      "Membangun company profile website untuk firma arsitektur menggunakan Laravel, Blade, dan Tailwind CSS.",
      "Mengembangkan Education Platform Management System berbasis web untuk manajemen konten dan akun pengguna.",
    ],
  },
  {
    period: "Agu 2024 — Agu 2025",
    title: "Ketua Umum",
    place: "Unit Kegiatan Kerohanian Islam PENS",
    type: "leadership",
    points: [
      "Memimpin dan membina 43 anggota pengurus inti lintas divisi.",
      "Mengawal penyelesaian 54 program kerja strategis kampus.",
    ],
  },
]

export type Project = {
  title: string
  category: string
  description: string
  tech: string[]
  link?: string
  src?: string
  size: "wide" | "tall" | "normal"
}

export const projects: Project[] = [
  {
    title: "Website Yayasan SDM IPTEK",
    category: "Website — Personal Project",
    description:
      "Website resmi Yayasan SDM IPTEK, menampilkan informasi yayasan, program beasiswa, prestasi, dan portal sistem kegiatan dengan desain responsif dan modern.",
    tech: ["Next.js", "TypeScript", "Shadcn UI", "Zustand"],
    link: "https://sdmiptek.com",
    size: "wide",
    src: "src/assets/images/asrama.png",
  },
  {
    title: "Online Course Platform",
    category: "Website — Internship Project",
    description:
      "Platform online course responsif untuk penyampaian konten belajar terstruktur, mendukung katalog kursus, navigasi modul, enrollment, dan pelacakan progres pengguna.",
    tech: ["React.js", "TypeScript", "Shadcn UI", "Redux"],
    link: "https://github.com/yasirmaa",
    size: "normal",
    src: "src/assets/images/edu.png",
  },
  {
    title: "Computerized Maintenance Management System",
    category: "Website — Internship Project",
    description:
      "Sistem internal untuk mendigitalkan operasi pemeliharaan aset: work order, penjadwalan preventive maintenance, dashboard real-time, dan role-based access control.",
    tech: ["React.js", "TypeScript", "Shadcn UI", "TanStack"],
    link: "#",
    size: "normal",
    src: "src/assets/images/cmms.png",
  },
  {
    title: "TBSense — Smart Agriculture Dashboard",
    category: "Website — Hackathon Project",
    description:
      "Prototipe agrikultur presisi yang menghubungkan monitoring kebun, analitik geospasial, dan eksplorasi berbantuan AI. Juara 3 Hackathon Sawit Nasional 2025.",
    tech: ["React.js", "TypeScript", "Shadcn UI", "TanStack", "GMaps API"],
    link: "https://www.pens.ac.id/2025/10/10/hadirkan-solusi-cerdas-tbsense-empat-mahasiswa-pens-raih-juara-3-pada-hackathon-sawit-nasional-2025/",
    size: "wide",
    src: "src/assets/images/tbsense.png",
  },
  {
    title: "Company Profile — Architecture Firm",
    category: "Website — Internship Project",
    description:
      "Website company profile untuk firma arsitektur dan interior, menampilkan portofolio, tim, layanan, dan galeri proyek dinamis dengan animasi GSAP.",
    tech: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "GSAP"],
    link: "#",
    size: "normal",
    src: "src/assets/images/company-profile.png",
  },
  {
    title: "Graph RAG vs Vector RAG Analysis",
    category: "Research - Final Project",
    description:
      "Studi komparatif pendekatan Graph RAG dan Vector RAG untuk optimasi pipeline Retrieval-Augmented Generation pada data JSON terstruktur, mengevaluasi akurasi retrieval, relevansi konteks, dan kualitas respons.",
    tech: ["Python", "LangChain", "Neo4j", "ChromaDB", "OpenAI API"],
    link: "https://github.com/yasirmaa/final-project-fe",
    size: "normal",
    src: "src/assets/images/rag.png",
  },
]

export const certifications = [
  {
    title: "Software Quality Control Tester",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    period: "Nov 2024 — Nov 2027",
  },
  {
    title: "PENS English Proficiency Test",
    issuer: "Politeknik Elektronika Negeri Surabaya — Skor 450",
    period: "Apr 2026 — Apr 2028",
  },
]
