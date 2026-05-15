# 📁 Script Generator - Project Structure

## Struktur Folder Terorganisir

```
script-gemerator/
├── index.html              # 🏠 Halaman utama
├── README.md               # 📖 Dokumentasi project
│
├── css/                    # 🎨 Folder Stylesheet
│   ├── style.css          # Styling utama
│   ├── facebook.css       # Styling Facebook
│   ├── instagram.css      # Styling Instagram
│   ├── tiktok.css         # Styling TikTok
│   └── youtube.css        # Styling YouTube
│
├── js/                     # ⚙️ Folder JavaScript
│   ├── facebook.js        # Script Facebook
│   ├── instagram.js       # Script Instagram
│   ├── tiktok.js          # Script TikTok
│   └── youtube.js         # Script YouTube
│
└── pages/                  # 📄 Folder HTML Pages
    ├── facebook.html      # Halaman Facebook
    ├── instagram.html     # Halaman Instagram
    ├── tiktok.html        # Halaman TikTok
    └── youtube.html       # Halaman YouTube
```

## 📊 Statistik Komposisi

| Bahasa | Jumlah File | Persentase |
|--------|------------|-----------|
| HTML | 5 | 69% |
| JavaScript | 4 | 24.4% |
| CSS | 5 | 6.6% |
| **TOTAL** | **14** | **100%** |

## 🎯 Keuntungan Struktur Ini

✅ **Terorganisir** - File dikelompokkan berdasarkan fungsi dan tipe  
✅ **Mudah Dimaintain** - Mudah menemukan file yang dibutuhkan  
✅ **Scalable** - Siap untuk menambah platform atau fitur baru  
✅ **Best Practice** - Mengikuti standar industri web development  
✅ **Kolaboratif** - Memudahkan tim untuk bekerja sama  

## 📝 Catatan Penting

- File `index.html` tetap di root sebagai entry point utama
- Semua link path di HTML harus diupdate untuk menunjuk ke lokasi file baru
  - Contoh: `<link rel="stylesheet" href="css/style.css">`
  - Contoh: `<script src="js/facebook.js"></script>`
- Struktur ini memudahkan build process dan minification di masa depan

## 🚀 Next Steps

1. Update semua link path di file HTML
2. Test semua halaman dan fungsionalitas
3. Merge branch ke main setelah semua berfungsi dengan baik

---

**Last Updated:** 2026-05-15
