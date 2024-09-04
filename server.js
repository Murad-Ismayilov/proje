//! Verilen tapshiriq

//* Map 

const sayilarMap = [1, 2, 3, 4, 5];

// Her sayıyı 2 ile çarpan bir fonksiyon
const ikiyleCarp = sayi => sayi * 2;

// map kullanarak yeni bir dizi oluşturuyoruz
const ikiyleCarpilmisSayilar = sayilarMap.map(ikiyleCarp);

console.log(ikiyleCarpilmisSayilar); // Çıktı: [2, 4, 6, 8, 10]

//* forEach

const sayilar = [1, 2, 3, 4, 5];

// Her sayıyı 2 ile çarpıp ekrana yazdıran bir fonksiyon
const ikiyleCarpVeYazdir = sayi => console.log(sayi * 2);

// forEach kullanarak her sayıyı işliyoruz
sayilar.forEach(ikiyleCarpVeYazdir); // Çıktı: 2 4 6 8 10 (her biri yeni satıra yazılır)

