# VA Praktikum TI Generator

VA Praktikum TI Generator adalah aplikasi sederhana yang digunakan untuk membuat Virtual Account (VA) Bank Muamalat, khususnya untuk keperluan pembayaran praktikum Algoritma dan Pemrograman Teknik Informatika Semester 1 2024.

## Fitur

- Memasukkan NIM (Nomor Induk Mahasiswa) untuk menghasilkan VA khusus.
- Menyimpan data NIM di `localStorage` sehingga dapat diakses kembali di kunjungan berikutnya.
- Menampilkan modal pop-up berisi kode VA hasil generate dengan opsi salin ke clipboard.
- Tombol reset untuk menghapus NIM yang tersimpan.

## Penggunaan

1. **Buka Browser**  
   Buka link aplikasi di [https://va-praktikum-ti.vercel.app/](https://va-praktikum-ti.vercel.app/).

2. **Masukkan NIM**  
   Masukkan NIM pada kolom input yang tersedia di halaman.

3. **Klik "Generate"**  
   Setelah NIM dimasukkan, klik tombol **Generate** untuk menghasilkan VA.

4. **Salin VA yang Muncul di Modal/Pop-up**  
   Akan muncul pop-up yang menampilkan kode VA hasil generate. Klik tombol **Copy Code** untuk menyalin VA tersebut ke clipboard.

5. **Lakukan Transfer**  
   Gunakan kode VA yang telah disalin untuk melakukan transfer pembayaran praktikum ke Bank Muamalat.

6. **Menghapus NIM**  
   Jika ingin menghapus NIM yang tersimpan, klik tombol **Reset** untuk mengosongkan input dan menghapus NIM dari penyimpanan lokal.

## Teknologi yang Digunakan

- **HTML5**: Untuk struktur markup dan layout halaman.
- **SASS**: Untuk penulisan CSS yang lebih efisien dan terstruktur.
- **JavaScript**: Untuk logika aplikasi termasuk penggunaan `localStorage`, modal pop-up, dan validasi input.
- **VITE**: Untuk pengembangan frontend yang lebih cepat dan efisien.
- **Vercel**: Hosting platform untuk mempublikasikan aplikasi secara online.

## Instalasi Lokal (Opsional)

Jika Anda ingin menjalankan aplikasi secara lokal, ikuti langkah-langkah berikut:

1. Clone repository:
   ```bash
   git clone https://github.com/rulshrm/va-praktikum-ti.git
   ```
2. Masuk ke direktori aplikasi:
   ```bash
   cd va-praktikum-ti
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Kemudian, jalankan server lokal:
   ```bash
   npx vite
   ```
5. Build aplikasi:
   ```bash
   npx vite build
   ```

## Struktur Aplikasi

Aplikasi ini memiliki struktur sederhana yang terdiri dari:

- **index.html**: Halaman utama aplikasi.
- **main.js**: Berisi logika aplikasi untuk generate VA dan manajemen localStorage.

## Demo

Demo aplikasi dapat dilihat di [https://va-praktikum-ti.vercel.app/](https://va-praktikum-ti.vercel.app/).

## Kontributor

Jika Anda memiliki ide untuk pengembangan lebih lanjut atau menemukan bug, silakan buat issue atau pull request.

## Lisensi

Proyek ini dilisensikan di bawah MIT License. Silakan lihat file [LICENSE](/LICENSE) untuk informasi lebih lanjut.