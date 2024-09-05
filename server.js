//! Verilen tapshiriq

//* Map 

// myMap adında bir funksiya yaradılır.
// Bu funksiya iki parametr alır: array (massiv) və callback (funksiya).
// Funksiya, massivdəki hər bir elementi müəyyən bir əməliyyata məruz qoymaq üçün istifadə edilir.
// Sonunda, bu əməliyyatlardan sonra yaranan yeni massiv qaytarılır.
function myMap(array, callback) {
    
    // newArray adında boş bir massiv yaradılır.
    // Bu massiv, callback funksiyası tərəfindən işlənmiş yeni dəyərləri saxlamaq üçün istifadə ediləcək.
    let newArray = [];
    
    // For dövrü yaradılır. Bu dövr massivdəki hər bir elementin üzərində işləmək üçün istifadə edilir.
    // `i` dəyişəni dövrün iteratorudur və massivdəki hər bir elementin indeksini göstərir.
    for (let i = 0; i < array.length; i++) {
        
        // callback funksiyası çağırılır. Bu funksiya üç parametr qəbul edir:
        // array[i] - cari massiv elementi (məsələn, 1, 2, 3 və s.),
        // i - cari elementin indeksi (0, 1, 2 və s.),
        // array - orijinal massiv (məsələn, [1, 2, 3, 4, 5]).
        // callback funksiyasının qaytardığı dəyər `newArray` massivinə əlavə edilir.
        newArray.push(callback(array[i], i, array));
    }
    
    // Dövr bitdikdən sonra, `newArray` massivi qaytarılır.
    // Bu massiv, callback funksiyası tərəfindən emal edilmiş yeni dəyərləri saxlayır.
    return newArray;
}

// İndi `myMap` funksiyasını çağırırıq və ona iki parametr veririk:
// 1. `numbers` adlı massiv - bu massiv [1, 2, 3, 4, 5] rəqəmlərindən ibarətdir.
// 2. Anonim (adı olmayan) bir callback funksiyası - bu funksiya massivdəki hər bir elementi qəbul edir,
// və həmin elementi 2 ilə vuraraq qaytarır.
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = myMap(numbers, function(number) {
    // Callback funksiyası hər bir `number` elementini qəbul edir.
    // Bu elementi 2 ilə vurur və nəticəni qaytarır.
    // Məsələn, əgər `number` 1-dirsə, nəticə 2 olacaqdır (1 * 2).
    return number * 2;
});

// Nəticədə, `doubledNumbers` adlı yeni massiv yaranır.
// Bu massivdə hər bir rəqəmin iki qat artırılmış halı saxlanılır: [2, 4, 6, 8, 10].
// Bu nəticəni konsola (ekrana) yazdırırıq.
console.log(doubledNumbers); // Çıktı: [2, 4, 6, 8, 10]


//* ForEach

// myForEach adında bir funksiya yaradılır.
// Bu funksiya iki parametr alır: array (massiv) və callback (funksiya).
// `array` massivdəki elementlər üzərində əməliyyat aparılmasını təmin edir,
// `callback` isə bu əməliyyatı yerinə yetirən funksiyadır.
function myForEach(array, callback) {
    
    // For dövrü yaradılır, bu dövr massivdəki hər bir elementin üzərində işləyəcək.
    // `i` dəyişəni dövrün iteratorudur və massivdəki hər bir elementin indeksini göstərir.
    // Dövr 0-dan başlayır və massiv uzunluğuna (array.length) qədər davam edir.
    for (let i = 0; i < array.length; i++) {
        
        // callback funksiyası çağırılır və ona üç parametr ötürülür:
        // array[i] - massivdəki cari elementdir (məsələn, 1, 2, 3 və s.),
        // i - cari elementin indeksi (0, 1, 2 və s.),
        // array - orijinal massivdir (məsələn, [1, 2, 3, 4, 5]).
        // callback funksiyası bu parametrləri istifadə edərək əməliyyatı yerinə yetirir.
        callback(array[i], i, array);
    }
}

// İndi `myForEach` funksiyasını çağırırıq və ona iki parametr veririk:
// 1. `numbers` adlı massiv - bu massiv [1, 2, 3, 4, 5] rəqəmlərindən ibarətdir.
// 2. Anonim (adı olmayan) bir callback funksiyası - bu funksiya hər bir elementi qəbul edir,
// və həmin elementi 2 ilə vuraraq nəticəni konsola yazdırır.
const numbers = [1, 2, 3, 4, 5];

myForEach(numbers, function(number) {
    // Callback funksiyası hər bir `number` elementini qəbul edir.
    // Bu elementi 2 ilə vurur və nəticəni konsola yazdırır.
    // Məsələn, əgər `number` 1-dirsə, `1 * 2` = 2 olacaqdır və konsola yazdırılacaq.
    console.log(number * 2);
});
