# Simple Plugin Animasi Text Slide Untuk Javascript

animasiTextSlide.js adalah plugin yang di gunakan untuk memberikan efek scrolling pada text yang terdapat di dalam sebuah class container, animasiTextSlide.js menggunakan Javascript untuk melakukan manipulasi DOM, dan animasi animasiTextSlide.js juga meliliki performa yang baik di setiap perangkat


# Repository animasiTextSlide.js

Untuk pemasangan animasi animasiTextSlide.js silahkan unduh paket plugin melalui alamat surel berikut [animasiTextSlide.js](https://github.com/Septian-tri/animasiTextSlide.git)

# Pemasang animasiTextSlide.js

Untuk melakukan proses pemasangan silahkan buat div di dalam body html kamu seperti kode di bawah,
untuk dapat bekerja masukan lebih dari satu / dua class textAnimasi, langkah berikut nya sematkan tag script dan arahkan sumber ke animasiTextSlide.js, tempatkan di antara tag script di antara tag header, jika tidak bekerja lihat penempatan contoh penemaptan alternative tag script 

>contoh struktur div untuk animasiTextSlide.js, gunakan nama class dan struktur yang sesuai ya...&#128516;
```html
<html>
    <head>
        <title>
            animasiTextSlide.js
        </title>
         <!-- Penempatan Script utuk animasiTextSlide.js -->
        <script src="js/animasiTextSlide.js"></script>
    </head>
    <body>
        <div class="containerContoh">
            <!-- Struktur div animasiTextSlide.js -->
            <div class="containerAnimasi">
                <div class="textAnimasi">Contoh Teks 1</div>
                <div class="textAnimasi">Contoh Teks 2</div>
                <div class="textAnimasi">Contoh Teks 3</div>
            </div>
            <!-- Struktur div animasiTextSlide.js -->
        </div>
        <!-- Penempatan Alternative Script utuk animasiTextSlide.js jika tidak bekerja -->
        <script src="js/animasiTextSlide.js"></script>
        
        <!-- Refrensi Pengguna animasiTextSlide.js -->
        <script>
            animasiTextSlide({
                animasi1 : {
                    durasiDiam    : 1,
                    durasiKembali : 3,
                    durasiScroll  : 1,
                    ulangi        : true,
                    mulaiDari     : 'atasKeBawah'
                },
                animasi2 : {
                    durasiDiam    : 1,
                    durasiKembali : 3,
                    durasiScroll  : 1,
                    ulangi        : true,
                    mulaiDari     : 'bawahKeAtas'
                }
             });
        </script>
    </body>
</html>
```

# Penggunaan animasiTextSlide.js

Jika sudah mengikuti tahapan pemasangan di atas, silahkan lihat refrensi pemanggilan fungsi animasiAnimasiTextSlide.js agar dapat bekerja

>Sematkan kode di bawah setelah tag &#60;script src="js/animasiTextSlide.js"&#62;&#60;/script&#62;, letakan kode di bawah kedalam tag script baru

```js
animasiTextSlide({
    animasi1 : {
        durasiDiam    : 1,
        durasiKembali : 3,
        durasiScroll  : 1,
        ulangi        : true,
        mulaiDari     : 'atasKeBawah'
    }
});
```

## Berikut adalah penjelasan mengenai paramter yang tersedia di animasiTextSlide.js

### animasi
Parameter animasi di gunakan untuk pengaturan animasi yang berada di dalam class containerAnimasi Tambahkan angka di belakang animasi contoh : animasi1, parameter animasi1 di tunjukan untuk pengaturan animasi di dalam classContainer, yang mana classContainer tersebut berada di barisan pertama / paling atas, lakukan penulisan yang sama untuk containerClass berikut nya dengan menabhakan angka sesuai poisi class containerAnimasi

### durasiDiam
parameter durasiDiam di gunakan untuk menentukan berapa lama animasi dalam posisi diam pada posisi tengah frame
sebelum melakukan scrolling menuju animasi berikut nya.Masukan nilai berupa angka/ number untuk parameter durasiDiam, satuan waktu durasiDiam Adalah Perdetik cnth 1 untuk 1 detik diam sebelum melanjutkan scrolling

### durasiKembali 
parameter durasiKembali di gunakan untuk seberapa cepat scrolling animasi akan kembali ke posisi pertama 
setelah seluruh animasi yang berada didalam class containerAnimasi Selesai di eksekusi.Masukan nilai berupa angka/number untuk parameter durasiKembali, satuan waktu durasiKembali adalah  Perdetik cnth 1 untuk 1 detik scrolling seluruh animasi untuk kembali ke posisi semula

### durasiScroll 
parameter durasiScroll di gunakan untuk seberapa cepat Peranimasi yang berada di dalam class contianerAnimasi akan melakukan scrolling dari out frame hingga in frame. Masukan nilai berupa angka/number untuk parameter durasiScroll, satuan waktu durasiScroll adalah milidetik (milidetik per durasiScroll/2), satuan waktu durasiScroll adalah milidetik, masukan 1 untuk 1 milidetik untuk perpindahan setengah pixel Peranimasi.
        
### ulangi 
parameter ulangin di gunakan untuk melakukan perputaran ulang animasi yang mana akan di mulai seperti posisi awal animasi,  putaran ulang animasi akan di lakukan setelah seluruh animasi yang berada di dalam class containerAnimasi selesai di eksekusi, satuan nilai parameter ulangi adalah boolean masukan true untuk pengulangan animasi dan false untuk tidak melakuan perputaran animasi

### mulaiDari 
parameter ulangin di gunakan untuk melakukan perubahan arrah scrolling animasi, parameter mulaiDari di dua buah parameter nilai parameter pertama adalah atasKeBawah yang mana nilai atasKeBawah ini jika di gunakan maka scrolling animasi akan di awali dari atas ke bawah, nilai parameter kedua adalah bawahKeAtas yang mana nilai bawahKeAtas ini jika di gunakan maka scrolling animasi akan di awali dari bawah ke atas

>Kamu juga dapat menjalankan lebih dari satu class containerAnimasi dengan refrensi setingg di bawah, gunakan paramter animasi untuk menentukan pengaturan masing class containerAnimasi
```js
animasiTextSlide({
    animasi1 : {
        durasiDiam    : 1,
        durasiKembali : 3,
        durasiScroll  : 1,
        ulangi        : true,
        mulaiDari     : 'atasKeBawah'
    },
    animasi2 : {
        durasiDiam    : 1,
        durasiKembali : 3,
        durasiScroll  : 1,
        ulangi        : true,
        mulaiDari     : 'bawahKeAtas'
    }
});
```