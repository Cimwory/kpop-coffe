# K-POP COFFEE — Digital Flagship & Website Prototype
> **Domain Concept**: [KPopCoffee.com](https://kpopcoffee.com)  
> **Aesthetic Direction**: Contemporary Seoul Minimalism, Kinfolk Korea / Eyesmag Editorial, Analog Vinyl Acoustic Rituals

---

## 🌟 Ringkasan Proyek (Overview)

Website ini dibangun berdasarkan dokumen proposal master **"K-POP COFFEE - Premium Digital Brand & Website Development Proposal"**:
- **Framework**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Desain & Palet Warna**:
  - `Warm Ivory (#F5F1E8)` (50%) — Kanvas utama bernuansa editorial
  - `Ink Black (#111111)` (20%) — Tipografi dan grid struktural
  - `Coffee Brown (#5A3825)` (10%) — Aksen produk & indikator roasting
  - `Espresso (#2A1B16)` (5%) — Kontainer kontras & footer
  - `Seoul Concrete (#B8B4AD)` (5%) — Garis divider & border halus
  - `Korean Red (#A63D32)` (5%) — Aksen tombol CTA & live indicator
  - `Metallic Champagne (#C8B58A)` (5%) — Badge koleksi terbatas & tier photocard
- **Audio Engine**: Web Audio API Synthesizer (432Hz / 528Hz calming Lo-Fi & vinyl crackle)
- **Status Build**: Production Ready (Lolos `npm run build` static generation)

---

## 🚀 Fitur Interaktif Unggulan (Interactive Modules)

1. **Dual Language Switcher (EN / KR)**: Toggle instan di Navbar untuk beralih antara Bahasa Inggris dan Hangul Korea (서울의 소리, 오늘의 기분, 한정판 Drop, 커피 로스팅, 문화 공간, 구독하기, 협업 문의).
2. **Seoul Mood Selector (오늘의 기분)**: Grid 4 kuadran interaktif (Seongsu Dawn Mist, Hongdae Creative Pulse, Hannam Vinyl Nocturne, Euljiro Neon Reverie) yang otomatis merekomendasikan profil kopi dan menyinkronkan musik ambient.
3. **K-Sound Listening Lounge & Persistent Audio Dock**: Pemutar audio di bagian bawah layar dengan animasi piringan hitam vinyl berputar, kontrol volume, pemilihan track, dan **15-Minute Synchronized Pour-Over Brew Session Timer**.
4. **Artisanal Coffee Ritual & Roasting Showcase**: Kartu produk berasio 3:4 dengan filter tingkat roasting (Light, Medium, Dark, Reserve), indikator dot level sangrai, catatan sensori, dan modal panduan seduh (*Brew Guide* dengan stopwatch).
5. **Seoul Café Radar (문화 공간)**: Direktori interaktif kedai kopi partner di Seongsu-dong, Hongdae, Hannam-dong, dan Bukchon lengkap dengan jam buka, menu khas, dan tautan peta.
6. **Seasonal Limited Drops & VIP Vault (한정판 Drop)**: Hitung mundur peluncuran batch langka (*Soju Oak Cask Fermented Natural Gesha*), form notifikasi, dan brankas VIP rahasia (Masukkan kode: `SEOUL2026` untuk membuka akses instan).
7. **Digital Collectible Photocard System (포토카드)**: Kartu koleksi 3D interaktif yang dapat dibalik (flip) untuk melihat nomor seri, tingkat kelangkaan (*SSR 98.4%*, *UR 99.8%*), dan keuntungan khusus bagi pemegang kartu.
8. **Slide-Out Cart Drawer**: Keranjang belanja interaktif dengan progress bar gratis ongkir dunia, pengaturan jumlah barang, dan simulasi checkout Vercel.
9. **B2B & Domain Valuation Portal (협업 문의)**: Modal dan form pengajuan kemitraan komersial, lisensi brand, atau akuisisi domain KPopCoffee.com.

---

## 📦 Cara Menjalankan Secara Lokal (Local Run)

1. Pastikan dependensi sudah terinstall:
   ```bash
   npm install
   ```

2. Jalankan server pengembangan (development server):
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:3000`.

3. Uji build produksi:
   ```bash
   npm run build
   ```

---

## ☁️ Panduan Deploy ke Vercel (Client Review Ready)

Untuk memberikan link review interaktif kepada klien Anda melalui Vercel:

### Opsi 1: Menggunakan Vercel CLI (Paling Cepat)
1. Install Vercel CLI jika belum ada:
   ```bash
   npm install -g vercel
   ```
2. Jalankan perintah deploy di folder ini:
   ```bash
   vercel
   ```
3. Ikuti petunjuk singkat di terminal (pilih *Yes*, konfirmasi setelan default). Vercel akan langsung memberikan URL review publik (contoh: `https://kpop-coffee-xyz.vercel.app`).

### Opsi 2: Deploy Melalui GitHub
1. Buat repository baru di GitHub (misal: `kpop-coffee`).
2. Hubungkan dan push folder proyek:
   ```bash
   git init
   git add .
   git commit -m "feat: K-POP COFFEE flagship web prototype"
   git branch -M main
   git remote add origin https://github.com/USERNAME/kpop-coffee.git
   git push -u origin main
   ```
3. Buka [vercel.com](https://vercel.com), klik **"Add New" -> "Project"**.
4. Import repository GitHub tersebut.
5. Vercel akan otomatis mendeteksi **Next.js** dan melakukan build deployment.
6. Bagikan URL hasil deploy tersebut langsung kepada klien Anda!
