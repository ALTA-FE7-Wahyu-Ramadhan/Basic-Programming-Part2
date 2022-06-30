function fullPrima(n) {
  // Your Code Here
  if (n<10){
    if (n==2 ||n==3 ||n==5 ||n==7) {
      penentu= true;
      return true
    } else {
      penentu= false;
      return false
    }
  } else if (n>=10) {
    let arrBil = n.toString().split("");
    let a = arrBil[0];
    let b = arrBil[1];
    if((a==2||a==3||a==5||a==7) && (b==2||b==3||b==5||b==7)){
      penentu=true;
      return true
    } else {
      penentu=false;
      return false
    }
  }
}

// algoritma
/*    if (n<10) maka (if (n=2,3,5,7) hasilnya/return true lalu else-nya hasilnya/return false)
      else if (n>=10) maka let arrBil = n.toString().split("") // ini buat split dan jadiin array.
      let a = arrBil[0];
      let b = arrBil[1];
      if (a=2,3,5, atau 7 && b= 2,3,5, atau 7) maka hasilnya true. Selain itu ya false
      return penentu*/

console.log(fullPrima(2)); // true
console.log(fullPrima(3)); // true
console.log(fullPrima(11)); // false
console.log(fullPrima(13)); // false
console.log(fullPrima(23)); // true
console.log(fullPrima(29)); // false
console.log(fullPrima(37)); // true
console.log(fullPrima(41)); // false
console.log(fullPrima(43)); // false
console.log(fullPrima(53)); // true