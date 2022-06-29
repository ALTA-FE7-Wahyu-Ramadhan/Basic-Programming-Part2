function fullPrima(n) {
  // Your Code Here
  let x = 0;
  for (let i = 2; i <= Math.floor(n / 2); i++) {
    x++;
    if (n % i == 2) {
      return false;
    }
  }
  return true;
}

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
