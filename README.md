# VA Praktikum TI Generator

VA Praktikum TI Generator adalah aplikasi web untuk membuat Virtual Account (VA) Bank Muamalat untuk pembayaran praktikum Fakultas Sains dan Teknologi Universitas Islam Lamongan.

## Fitur

- Pemilihan semester dan jenis praktikum
- Generate VA berdasarkan NIM mahasiswa
- Menyimpan data NIM di `localStorage`
- Modal pop-up untuk menampilkan hasil VA dengan opsi copy to clipboard
- Responsive design untuk berbagai ukuran layar
- SEO optimized
- Progressive Web App (PWA) ready

## Tech Stack

- **React**: Library JavaScript untuk membangun user interface
- **TypeScript**: Superset JavaScript dengan static typing
- **Tailwind CSS**: Framework CSS untuk styling yang utility-first
- **Vite**: Build tool yang modern dan cepat
- **Jest & React Testing Library**: Unit testing
- **Vercel**: Platform deployment dan hosting

## Instalasi & Pengembangan

1. Clone repository:
```bash
git clone https://github.com/rulshrm/va-praktikum-ti.git
```

2. Masuk ke direktori:
```bash
cd va-praktikum-ti
```

3. Install dependencies:
```bash
npm install
```

4. Jalankan development server:
```bash
npm run dev
```

5. Build untuk production:
```bash
npm run build
```

6. Preview build result:
```bash
npm run preview
```

7. Jalankan test:
```bash
npm test
```

## Penggunaan

1. Buka aplikasi di [https://va-praktikum-ti.vercel.app/](https://va-praktikum-ti.vercel.app/)
2. Pilih semester yang sesuai
3. Pilih jenis praktikum yang akan diambil
4. Masukkan NIM Anda
5. Klik tombol "Generate"
6. Salin kode VA yang muncul
7. Gunakan kode VA untuk melakukan pembayaran di Bank Muamalat

## Struktur Proyek

```
va-praktikum-ti/
├── src/
│   ├── components/         # React components
│   │   ├── Form.tsx
│   │   ├── Header.tsx
│   │   ├── Modal.tsx
│   │   └── __tests__/     # Unit tests
│   ├── pages/             # Page components
│   ├── assets/            # Static assets
│   ├── App.tsx           # Root component
│   └── main.tsx          # Entry point
├── public/               # Public assets
│   ├── favicon/         # Favicon files
│   ├── robots.txt      # SEO configuration
│   └── sitemap.xml     # Site structure for SEO
└── package.json        # Project dependencies
```

## Testing

Proyek ini menggunakan Jest dan React Testing Library untuk testing. Untuk menjalankan test:

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Performance Monitoring

Aplikasi ini menggunakan Vercel Speed Insights untuk monitoring performa:

- Lighthouse scores
- Core Web Vitals
- Real user performance metrics

## SEO

Implementasi SEO mencakup:

- Meta tags yang teroptimasi
- OpenGraph tags untuk social sharing
- Structured data (JSON-LD)
- Sitemap XML
- Robots.txt
- Semantic HTML

## Lisensi

Proyek ini dilisensikan di bawah MIT License. Lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

## Author

A. RAFLY SAHRUL RAMADHANY MIFTHAH

## Support

Jika Anda menemukan bug atau memiliki saran, silakan buat issue di [GitHub Issues](https://github.com/rulshrm/va-praktikum-ti/issues).