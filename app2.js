// const math = {
//     operator: "",
//     acc: function (sonuc, sayi) {
//       console.log(this.operator)
//       switch (this.operator) {
//           case "+":
//             return sonuc + sayi;
//           case "-":
//             return sonuc - sayi;
//           case "*":
//             return sonuc * sayi;
//           case "/":
//             return sonuc / sayi;
//           default:
//             console.log("Geçersiz operatör!");
//           }
//       return sonuc;
//     },
//     hesapla: (islem, ...sayilar) => {
//       console.log("Operator:", this.operator);
//       return sayilar.reduce(
//         (sonuc, sayi, operator) => (this.acc(sonuc, sayi, this.operator))
//       );
//     },
//   };
  
//   console.log(math.hesapla("-", 10, 5, 5));

  const math = {
    operations: {
        topla: (acc, sayi) => acc += sayi,
        carp: (acc, sayi) => acc * sayi,
        cikar: (acc, sayi) => acc - sayi,
        bol: (acc, sayi) => acc / sayi
    },
    hesapla(islem, ...sayilar) {
        if (!this.operations[islem]) {
            throw new Error("Geçersiz işlem");
        }
    
        return sayilar.reduce(this.operations[islem], 0);
    },
};

// console.log(math.hesapla("topla", 10, 20, 10));
// console.log(math.hesapla("carp", 2, 3, 4));
// console.log(math.hesapla("cikar", 100, 10, 5));
// console.log(math.hesapla("bol", 100, 10, 2));


// const math1 = {
//     operator: '',
//     acc: (sonuc, sayi) => {
//         if(this.operator === '+'){
//         return sonuc + sayi
//         }
//         else if(this.operator === '-'){
//         return sonuc -= sayi
//         }
//         else if(this.operator === '*'){
//         return sonuc *= sayi
//         }
//         else{
//         return sonuc /= sayi
//         }
//     },
//     hesapla: (operator, ...sayilar) => {
//         this.acc= math1.acc;
//         this.operator = operator;
//         return sayilar.reduce(this.acc, 0);
//     },
// }
// console.log(math1.hesapla("+", 10, 20, 10))