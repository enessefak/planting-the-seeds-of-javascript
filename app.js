// Koşullu İfadeler: if, else if, else, switch case
// Döngüler: for, while, do while, forEach, map, filter, reduce

// Bir kullanıcıdan yaşını girmesini isteyen bir program yazın. Ardından, eğer kullanıcının yaşını 18'den büyükse, "Ehliyet alabilirsiniz" mesajını yazdırın, aksi takdirde "Ehliyet alamazsınız" mesajını yazdırın.
// Bir kullanıcıdan bir sayı girmesini isteyin. Eğer sayı pozitif ise, "Sayı pozitif" mesajını yazdırın. Eğer sayı sıfıra eşit ise, "Sayı sıfıra eşit" mesajını yazdırın. Negatif ise, "Sayı negatif" mesajını yazdırın.
// Bir kullanıcıdan pozitif bir sayı girmesini isteyin. Ardından, bu sayıyı kullanarak 1'den kullanıcının girdiği sayıya kadar olan sayıların toplamını bulun ve ekrana yazdırın (while döngüsü kullanarak).
// Bir kullanıcıdan bir sayı girmesini isteyin. Ardından, kullanıcının girdiği sayıyı faktöriyelini (1'den kullanıcının girdiği sayıya kadar olan sayıların çarpımı) hesaplayın ve ekrana yazdırın (do-while döngüsü kullanarak).
// Bir dizi içerisindeki sayıların toplamını hesaplayan bir program yazın.
// Bir dizi içerisindeki en büyük ve en küçük sayıları bulan bir program yazın.
// Bir metin içerisindeki belirli bir karakterin kaç kez geçtiğini bulan bir program yazın.

// const char = 'a';
// const messsage = "Merhaba Dünya"

// messsage[0] // "M"
// messsage[1] // "e"
// messsage.length // 13

// Koşullu İfadeler: if, else if, else, switch case
// var yas = 18;
// if (yas > 18) {
//     alert("Yaşınız 18'den büyük");
// }
// if (yas === 18) {
//     alert("Yaşınız 18'e eşit");
// }

// Ternary operator
// 1 > 2 ? console.log('1 büyüktür 2') : console.log('1 küçüktür 2');

// (undefined || null || '' || 0 || false )? console.log('Doğru') : console.log('Yanlış');

// Switch case
const islem = '+';
// switch (islem) {
//     case 'apple':
//         console.log('This is an apple');
//         break;
//     case 'banana':
//         console.log('This is a banana');
//         break;
//     default:
//         console.log('Unknown fruit');
// }

// Döngüler: for, while, do while
// For loop
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    if (i === 3) {
        break;
    }
}

// While loop
let i = 0;
while (i < 5) {
    // console.log(i);
    i++;
}

// Do while loop
// let userInput;
// do {
//   userInput = prompt("Lütfen bir sayı girin:");
// } while (!userInput);
// console.log("Girilen sayı:", userInput);

// Egzersizler ve Pratik Uygulamalar

const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < sayilar.length; i++) {
//     console.log(sayilar[i]);
// }

// const sonuc = sayilar.forEach(function (sayi) {
//     return sayi
// })

// const newArray = sayilar.map(function (element) {
//     return element
// })

// console.log(newArray)

// const sonuc = sayilar.filter(function (sayi) {
//     return sayi % 2 === 0
// })

// console.log(sonuc)

// const sonuc = sayilar.reduce(function (acc, sayi, index) {
//     return sayi % 2 === 0
// }, 0)


// const isimler = ['Ali', 'Veli', 'Ayşe', 'Fatma', 'Zeynep', 'Mehmet', 'Hasan', 'Hüseyin', 'Kemal', 'Merve', 'Emre']
// const birlesmisIsimler = isimler.reduce(function (acc, isim, index) {
//     return acc + isim
// }, '')

// console.log(isimler.join(''))