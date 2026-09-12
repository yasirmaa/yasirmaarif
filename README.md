# Yasir Maarif — Personal Portfolio

Sebuah portofolio personal bergaya _editorial_ dan _luxury_, dirancang dengan fokus pada tipografi yang bersih, arsitektur grid yang rapi, dan interaksi animasi yang sangat halus.

Proyek ini dibangun untuk menampilkan perjalanan profesional, pengalaman kepemimpinan, serta proyek-proyek rekayasa perangkat lunak terpilih.

## 📑 Struktur Halaman

Portofolio ini mengusung desain _single-page application_ (SPA) dengan bagian-bagian berikut:

- **Hero:** Pengenalan singkat dengan tipografi besar dan foto profil _full-bleed_.
- **About:** Ringkasan profil, filosofi kerja, dan highlight statistik utama.
- **Skills:** Deretan ikon teknologi dengan animasi _floating_ yang halus.
- **Experience:** Rekam jejak pengalaman kerja, kepemimpinan organisasi, dan pendidikan dalam tata letak _timeline_ editorial.
- **Projects:** Etalase karya terpilih dengan interaksi _hover_ sinematik (transisi warna dan panah).
- **Contact:** Informasi kontak, tautan profil profesional, dan tombol unduh CV.

## 🛠️ Teknologi yang Digunakan

Proyek ini dikembangkan menggunakan _tech stack_ modern untuk memastikan performa yang cepat dan pengalaman _developer_ yang baik:

- **Framework:** [React.js](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) (Simple Icons, di-bundle lokal — bukan dari CDN)
- **Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) & [Inter](https://fonts.google.com/specimen/Inter) via [Fontsource](https://fontsource.org/) (self-hosted, tanpa request eksternal)

## 🚀 Memulai Proyek (Getting Started)

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di lingkungan lokal Anda:

1. **Clone repositori**

   ```bash
   git clone https://github.com/yasirmaa/portfolio.git
   cd portfolio
   ```

2. **Install dependensi**

   ```bash
   npm install
   ```

3. **Jalankan mode development**

   ```bash
   npm run dev
   ```

   Buka [http://localhost:5173](http://localhost:5173) di browser Anda.

4. **Build untuk production**

   ```bash
   npm run build
   ```

   Hasil build akan tersedia di folder `dist/`.

5. **Preview hasil build**

   ```bash
   npm run preview
   ```

## ✍️ Mengubah Konten

Seluruh konten portofolio (nama, bio, skill, pengalaman, proyek, kontak) terpusat di satu file:

```
src/data/profile.ts
```

Cukup ubah data di file tersebut untuk memperbarui isi seluruh halaman — tidak perlu menyentuh komponen UI.

## 🎨 Design Tokens

Palet warna dan tipografi didefinisikan sebagai CSS variable di `src/index.css`:

| Token              | Nilai     | Kegunaan       |
| ------------------ | --------- | -------------- |
| `--color-paper`    | `#fcfbf8` | Latar dasar    |
| `--color-ink`      | `#17160f` | Teks utama     |
| `--color-stone`    | `#6b675f` | Teks sekunder  |
| `--color-gold`     | `#a9812e` | Aksen          |
| `--color-hairline` | `#e7e2d6` | Border/pemisah |

## ☁️ Deployment

Proyek ini dapat di-deploy ke platform apa pun yang mendukung static site / Vite, seperti [Vercel](https://vercel.com/) atau [Netlify](https://www.netlify.com/):

```bash
npm run build
```

Lalu arahkan platform deployment ke folder `dist/` sebagai output build.

## 📄 Lisensi

Kode sumber ini dapat digunakan sebagai referensi pribadi. Konten (teks, foto, CV) adalah hak milik Yasir Maarif dan tidak untuk direplikasi tanpa izin.

## 📬 Kontak

- Email: [yasirmaarif26@gmail.com](mailto:yasirmaarif26@gmail.com)
- LinkedIn: [linkedin.com/in/yasirmaarif](https://linkedin.com/in/yasirmaarif)
- GitHub: [@yasirmaa](https://github.com/yasirmaa)
