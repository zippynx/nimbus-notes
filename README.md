# ☁️ Nimbus Notes

> **Cloud Storage for Your Thoughts** — Aplikasi pencatatan berbasis web dengan tema cloud, dibangun menggunakan HTML, CSS, dan JavaScript murni.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

## 📋 Deskripsi Project

Nimbus Notes adalah aplikasi manajemen catatan modern berbasis cloud yang memungkinkan pengguna untuk membuat, menyimpan, mencari, dan mengelola catatan langsung di browser. Data disimpan secara persisten menggunakan **LocalStorage API** sebagai simulasi cloud storage sisi klien — tidak memerlukan server atau koneksi internet.

Project ini dikerjakan sebagai tugas **Project Pekan 9** mata kuliah **Cloud Computing**, mendemonstrasikan pengelolaan source code menggunakan Git dan GitHub.

---

## ✨ Fitur Utama

| Fitur | Keterangan |
|---|---|
| ➕ **Tambah Catatan** | Input judul, pilih tag, tulis isi, simpan dengan tombol atau `Ctrl+Enter` |
| 🗑️ **Hapus Catatan** | Tombol hapus muncul saat hover pada kartu catatan |
| 🔍 **Pencarian Real-time** | Filter catatan langsung saat mengetik |
| 🏷️ **Sistem Tag** | 4 kategori: 💡 Idea, ✅ Task, 📎 Reference, 📝 Note |
| 🔽 **Filter Tab** | Saring catatan berdasarkan kategori tag |
| 🕐 **Jam Real-time** | Waktu diperbarui setiap detik |
| 📊 **Statistik** | Total catatan, catatan hari ini, total karakter |
| 💾 **LocalStorage Sync** | Data tersimpan permanen di browser |
| 🔔 **Toast Notification** | Notifikasi animasi saat aksi berhasil |
| 📱 **Responsive** | Tampilan menyesuaikan layar desktop dan mobile |

---

## 🗂️ Struktur File

```
nimbus-notes/
├── index.html    # Struktur halaman web (HTML5)
├── style.css     # Tampilan visual dan animasi (CSS3)
├── script.js     # Logika aplikasi (Vanilla JavaScript)
└── README.md     # Dokumentasi project
```

---

## 🛠️ Teknologi

| Teknologi | Penggunaan |
|---|---|
| **HTML5** | Struktur dan markup semantik halaman web |
| **CSS3** | Dark glassmorphism UI, grid layout, animasi, responsive |
| **Vanilla JavaScript** | Logika CRUD, DOM manipulation, event handling |
| **LocalStorage API** | Penyimpanan data persisten di sisi klien |
| **Google Fonts** | Tipografi: Syne + DM Mono |
| **Git** | Version control lokal |
| **GitHub** | Remote repository dan hosting kode |

---

## 🚀 Cara Menjalankan

### Lokal (Tanpa Server)

```bash
# 1. Clone repository
git clone https://github.com/[username]/nimbus-notes.git

# 2. Masuk ke folder project
cd nimbus-notes

# 3. Buka di browser
# Cukup double-click file index.html
# atau klik kanan → Open with → Browser
```

### Menggunakan Live Server (VS Code)

1. Install ekstensi **Live Server** di VS Code
2. Klik kanan `index.html` → **Open with Live Server**
3. Browser akan terbuka otomatis di `http://127.0.0.1:5500`

---

## 📌 Alur Git yang Digunakan

```bash
# Inisialisasi repository
git init

# Staging semua file
git add .

# Commit pertama
git commit -m "feat: initial commit - Nimbus Notes cloud app"

# Hubungkan ke GitHub
git remote add origin https://github.com/[username]/nimbus-notes.git
git branch -M main

# Push ke GitHub
git push -u origin main
```

---

## 💡 Konsep Cloud Computing

- **LocalStorage API** → simulasi cloud storage: data tersimpan persisten dan tidak hilang saat browser ditutup, mirip perilaku aplikasi cloud yang sync otomatis
- **GitHub** → cloud repository: source code tersimpan remote, dapat diakses dari mana saja, dilengkapi version history

---

## 📁 Informasi Project

| | |
|---|---|
| **Mata Kuliah** | Cloud Computing |
| **Project** | Pekan 9 |
| **Teknologi** | HTML · CSS · JavaScript |
| **Penyimpanan** | LocalStorage API |

---

*Nimbus Notes — Built for Cloud Computing coursework, Week 9 P13*

## 👨‍💻 Author

Developed by zippynx using HTML, CSS, and JavaScript

Happy Coding! 🙌