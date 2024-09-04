// //! 1 Sentyabr gecilen ders


// //* Data Struktur
// //* Array Stack ve Dequeue

// //* LIFO - Last In First Out

// const telebes5=["Murad" , "Samir" , "Tahir"]
// const telebes6=["Agarehim" , "Rufet" , "Leman" , ["Gunay" , "Roman" , "Meherrem" , "Raul"]] //* telebes6 uzunlugu 4 du. ["Gunay" , "Roman" , "Meherrem" , "Raul"] - Bunlar bir yerde goturulur

// //* Hem pop metodu ve hem de push metodu normalda O(1) di O(n) de zaman murekkebliyi gostere bilirler - Bu Big-O emsalidi

// //* pop ve push - Array Stack gedir

// //? telebes5 + telebes6 nece birleshdirerik

// //* (...) spread operator - birleshdirme operator 

// telebes5.push(...telebes6) //* Last In First Out
// //*pop() - sondan massivin sonundan elementi silir. Eger massiv boshdusa undefined verir.
// // const bloqTelebe = telebes5.pop() //* Pop massivin sonundan bir yox bir necesini sile biler
// // console.log(bloqTelebe) //* bloqTelebe bize s6 icinde ki silinmis telebeleri qaytaracaq
// // console.log(telebes5) //* console.log(telebes5) ise bize s6 icinde ki silinmis telebeler xaric hamisini qaytaracaq




// //* Firt In Firt Out Dequeue gedir

// //* shift ve unshift Big-O emsali O(n) di

// telebes5.shift() //* First Out
// telebes5.unshift("Anvar") //* First In Dequeue aiddi

// console.log(telebes5)

// //TODO map

// const telebes5=["Murad" , "Samir" , "Tahir"]

// //* Bu birinci usl yazilish.

// const mezunlar =  telebes5.map(function(mezun){
//     console.log(mezun)
// })

// //* Bu ikinci usl yazilish



// telebes5.map((birTelebe , sirasayi , buMassiv) => console.log(birTelebe , sirasayi , buMassiv))



//TODO find

const telebes5=["Murad" , "Samir" , "Tahir"]

const qiymetler = [10 , 20 , 30 , 4 , 11]


// telebes5.find((telebe , indeks , obyekt) => console.log(telebe , indeks , obyekt))

const status = telebes5.find((telebe) => console.log(telebe==="Samir" ? "Dersde ishtirak edir" : "Dersde istirak etmir"))

const veziyyet = qiymetler.filter((qiymet) => qiymet<20)
console.log(veziyyet)

const netice = telebes5.includes("Leman")
console.log(netice)

if(telebes5.includes("Leman")){
    console.log("Leman tehsil alir")
}
else{
    console.log("Leman tehsil almir")
}




