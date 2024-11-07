const bodyElement = document.querySelector('body');

// Membuat elemen h1
const h1Element = document.createElement('h1');
h1Element.textContent = 'Create VA Bank Muamalat';
bodyElement.appendChild(h1Element);

// Membuat elemen p
const pElement = document.createElement('p');
pElement.textContent = 'Create VA bank Muamalat Untuk pembayaran biaya praktikum Algoritma dan Pemrograman Teknik Informatika Semester 1 2024';
bodyElement.appendChild(pElement);

// Membuat elemen modal
const modalElement = document.createElement('div');
modalElement.classList.add('modal');
bodyElement.appendChild(modalElement);

const modalContentElement = document.createElement('div');
modalContentElement.classList.add('modal-content');
modalElement.appendChild(modalContentElement);

// Membuat tombol untuk menutup modal
const closeButton = document.createElement('button');
closeButton.textContent = 'Close';
closeButton.classList.add('close-button');
modalContentElement.appendChild(closeButton);

// Deklarasi variabel global
const vaNim = 8317101;
let nim;
let result;

// Membuat input dan tombol generate
const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('placeholder', 'Masukkan NIM');
bodyElement.appendChild(inputElement);

const buttonElement = document.createElement('button');
buttonElement.textContent = 'Generate';
bodyElement.appendChild(buttonElement);

// Menangani klik tombol Generate
buttonElement.addEventListener('click', () => {
  const inputText = inputElement.value.trim();
  if (!inputText) {
    alert('Masukkan NIM terlebih dahulu.');
    return;
  }

  nim = parseInt(inputText, 10);
  if (isNaN(nim)) {
    alert('Invalid NIM: Harus berupa integer');
    return;
  }
  result = String(vaNim) + String(nim);

  // Menampilkan hasil di modal
  modalContentElement.innerHTML = `<p>VA Code: ${result}</p>`;
  
  // Membuat tombol salin
  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy Code';
  copyButton.classList.add('copy-button');
  modalContentElement.appendChild(copyButton);
  
  // Menambahkan event listener ke tombol salin
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(result)
      .then(() => alert('Kode VA berhasil disalin!, Silahkan Lakukan Transfer ke VA Bank Muamalat Tersebut'))
      .catch((err) => alert('Kesalahan gagal disalin: ', err));
  });

  modalContentElement.appendChild(closeButton);
  modalElement.style.display = 'flex';
});

// Menutup modal saat tombol close diklik
closeButton.addEventListener('click', () => {
  modalElement.style.display = 'none';
});
