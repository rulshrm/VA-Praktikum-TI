import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
        Create VA Bank Muamalat
      </h1>
      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
        Aplikasi ini membantu Anda membuat Virtual Account (VA) Bank Muamalat
        untuk pembayaran biaya praktikum di Fakultas Sains dan Teknologi. Pilih
        semester dan jenis praktikum yang akan Anda ambil, masukkan NIM Anda,
        dan dapatkan kode VA untuk pembayaran.
      </p>
    </header>
  );
};
