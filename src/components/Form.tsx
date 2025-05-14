import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Modal } from "./Modal";

interface PraktikumItem {
  no: number;
  item: string;
  kodePembayaran: number;
  smt: number;
  jumlahBayar: string;
}

const pembayaranPraktikum: PraktikumItem[] = [
  {
    no: 1,
    item: "Praktikum Algoritma dan Pemrograman I",
    kodePembayaran: 10,
    smt: 1,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 2,
    item: "Praktikum Algoritma dan Pemrograman II",
    kodePembayaran: 11,
    smt: 2,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 3,
    item: "Praktikum Pemrogramman Visual",
    kodePembayaran: 12,
    smt: 3,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 4,
    item: "Praktikum Sistem Operasi",
    kodePembayaran: 13,
    smt: 3,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 5,
    item: "Praktikum Struktur Data",
    kodePembayaran: 14,
    smt: 3,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 6,
    item: "Praktikum Basis Data I",
    kodePembayaran: 15,
    smt: 4,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 7,
    item: "Praktikum Pemrograman Web I",
    kodePembayaran: 16,
    smt: 4,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 8,
    item: "Praktikum Pemrograman Web II",
    kodePembayaran: 17,
    smt: 5,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 9,
    item: "Praktikum Basis Data II",
    kodePembayaran: 18,
    smt: 5,
    jumlahBayar: "Rp 350,000",
  },
  {
    no: 10,
    item: "Praktikum Jaringan Komputer",
    kodePembayaran: 19,
    smt: 7,
    jumlahBayar: "Rp 350,000",
  },
];

export const Form: React.FC = () => {
  const [nim, setNim] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const [selectedPraktikum, setSelectedPraktikum] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [vaCode, setVaCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const semesters = useMemo(() => {
    return Array.from(
      new Set(pembayaranPraktikum.map((item) => item.smt))
    ).sort((a, b) => a - b);
  }, []);

  const filteredPraktikum = useMemo(() => {
    return selectedSemester
      ? pembayaranPraktikum.filter(
          (item) => item.smt === parseInt(selectedSemester, 10)
        )
      : [];
  }, [selectedSemester]);

  useEffect(() => {
    setSelectedPraktikum("");
  }, [selectedSemester]);

  useEffect(() => {
    const savedNim = localStorage.getItem("nim");
    if (savedNim) setNim(savedNim);
  }, []);

  const validateInput = useCallback((): boolean => {
    if (!nim) {
      setErrorMessage("NIM harus diisi.");
      return false;
    }
    if (isNaN(parseInt(nim, 10))) {
      setErrorMessage("NIM harus berupa angka.");
      return false;
    }
    setErrorMessage("");
    return true;
  }, [nim]);

  const handleGenerate = useCallback(() => {
    if (!selectedSemester) {
      setErrorMessage("Silakan pilih semester terlebih dahulu.");
      return;
    }
    if (!selectedPraktikum) {
      setErrorMessage("Silakan pilih praktikum terlebih dahulu.");
      return;
    }
    if (!validateInput()) return;

    localStorage.setItem("nim", nim);
    const vaNim = 8317;
    const result = `${vaNim}${selectedPraktikum}${selectedSemester}${parseInt(
      nim,
      10
    )}`;
    setVaCode(result);
    setModalOpen(true);
  }, [nim, selectedSemester, selectedPraktikum, validateInput]);

  const handleReset = () => {
    setNim("");
    setSelectedSemester("");
    setSelectedPraktikum("");
    setErrorMessage("");
    localStorage.removeItem("nim");
  };

  const praktikumData = useMemo(() => {
    return pembayaranPraktikum.find(
      (item) => item.kodePembayaran === parseInt(selectedPraktikum, 10)
    );
  }, [selectedPraktikum]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(vaCode);
      alert("Kode VA berhasil disalin!");
    } catch (err) {
      alert(`Gagal menyalin kode: ${err}`);
    }
  };

  return (
    <div className="w-full px-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="semester"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Semester
            </label>
            <select
              id="semester"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option value="">Pilih Semester</option>
              {semesters.map((semester) => (
                <option key={semester} value={semester}>
                  Semester {semester}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="praktikum"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Praktikum
            </label>
            <select
              id="praktikum"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              value={selectedPraktikum}
              onChange={(e) => setSelectedPraktikum(e.target.value)}
              disabled={!selectedSemester}
            >
              <option value="">Pilih Praktikum</option>
              {filteredPraktikum.map((item) => (
                <option key={item.kodePembayaran} value={item.kodePembayaran}>
                  {item.item} - {item.jumlahBayar}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label
              htmlFor="nim"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              NIM
            </label>
            <input
              id="nim"
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan NIM Anda"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              maxLength={10}
            />
          </div>
        </div>

        {errorMessage && (
          <p className="mt-2 text-sm text-red-600 text-center">
            {errorMessage}
          </p>
        )}

        <div className="mt-6 flex justify-center gap-4">
          <button
            className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            onClick={handleGenerate}
          >
            Generate
          </button>
          <button
            className="px-6 py-2.5 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {praktikumData && (
          <div className="text-center">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
              Detail Pembayaran
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              Praktikum: {praktikumData.item}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Biaya: {praktikumData.jumlahBayar}
            </p>
            <p className="text-lg font-bold text-gray-900 mb-4">
              VA Code: {vaCode}
            </p>
            <button
              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              onClick={handleCopy}
            >
              Copy Code
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};
