// Mengambil elemen body
const bodyElement = document.querySelector('body');

// Fungsi untuk membuat elemen dan menetapkan teks, kelas, dan atribut lainnya
const createElement = (tag, options = {}) => {
  const element = document.createElement(tag);
  if (options.text) element.textContent = options.text;
  if (options.className) element.classList.add(...options.className.split(" "));
  if (options.attributes) {
    for (let key in options.attributes) {
      element.setAttribute(key, options.attributes[key]);
    }
  }
  return element;
};

// Header Utama
const h1Element = createElement('h1', { text: 'Create VA Bank Muamalat', className: 'main-header' });
bodyElement.appendChild(h1Element);

// Paragraf Deskripsi
const pElement = createElement('p', {
  text: 'Create VA bank Muamalat untuk pembayaran biaya praktikum Algoritma dan Pemrograman Teknik Informatika Semester 1 2024',
  className: 'description'
});
bodyElement.appendChild(pElement);

// Input NIM
const inputElement = createElement('input', {
  attributes: { type: 'text', placeholder: 'Masukkan NIM' },
  className: 'input-field'
});
bodyElement.appendChild(inputElement);

// Error Message Container
const errorMessage = createElement('p', { className: 'error-message' });
bodyElement.appendChild(errorMessage);

// Tombol Generate
const generateButton = createElement('button', { text: 'Generate', className: 'generate-button' });
bodyElement.appendChild(generateButton);

// Tombol Reset
const resetButton = createElement('button', { text: 'Reset', className: 'reset-button' });
bodyElement.appendChild(resetButton);

// Modal
const modalElement = createElement('div', { className: 'modal' });
bodyElement.appendChild(modalElement);

const modalContentElement = createElement('div', { className: 'modal-content' });
modalElement.appendChild(modalContentElement);

// Tombol Tutup Modal
const closeButton = createElement('button', { text: 'Close', className: 'close-button' });
modalContentElement.appendChild(closeButton);

// Variabel Global
const vaNim = 8317101;
let nim;
let result;

// Fungsi Validasi Input
const validateInput = (input) => {
  if (!input) {
    errorMessage.textContent = 'NIM harus diisi.';
    return false;
  }
  if (isNaN(parseInt(input, 10))) {
    errorMessage.textContent = 'NIM harus berupa angka.';
    return false;
  }
  errorMessage.textContent = '';
  return true;
};

// Menampilkan NIM yang tersimpan di localStorage saat halaman dimuat
window.addEventListener("load", () => {
  const savedNim = localStorage.getItem("nim");
  if (savedNim) {
    inputElement.value = savedNim;
  }
});

// Menangani klik tombol Generate
generateButton.addEventListener("click", () => {
  const inputText = inputElement.value.trim();

  // Validasi input sebelum lanjut
  if (!validateInput(inputText)) {
    return;
  }

  // Menyimpan NIM ke localStorage
  localStorage.setItem("nim", inputText);

  nim = parseInt(inputText, 10);
  result = `${vaNim}${nim}`;

  // Tampilkan hasil di dalam modal
  modalContentElement.innerHTML = `<p>VA Code: ${result}</p>`;
  
  // Tombol Salin
  const copyButton = createElement('button', { text: 'Copy Code', className: 'copy-button' });
  modalContentElement.appendChild(copyButton);

  // Menambahkan event listener ke tombol salin
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(result)
      .then(() => alert("Kode VA berhasil disalin! Silahkan lakukan transfer ke VA Bank Muamalat tersebut."))
      .catch((err) => alert("Kesalahan: gagal menyalin kode", err));
  });

  // Menampilkan tombol tutup
  modalContentElement.appendChild(closeButton);
  modalElement.style.display = "flex";
});

// Menangani klik tombol Reset
resetButton.addEventListener("click", () => {
  inputElement.value = '';
  errorMessage.textContent = '';
  localStorage.removeItem("nim"); // Menghapus NIM dari localStorage
});

// Menutup modal saat tombol close diklik
closeButton.addEventListener("click", () => {
  modalElement.style.display = "none";
});

// Validasi input secara langsung
inputElement.addEventListener("input", () => {
  validateInput(inputElement.value.trim());
});
