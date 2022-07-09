// input
let studentScore = 80;

// Process: Your Solution Code Here
function cekNilai(nilai) {
  switch (true) {
    case nilai < 0:
      return "Invalid";
      break;
    case nilai < 35:
      return "Nilai D";
      break;
    case nilai < 50:
      return "Nilai C";
      break;
    case nilai < 65:
      return "Nilai B";
      break;
    case nilai < 80:
      return "Nilai B+";
      break;
    case nilai < 100:
      return "Nilai A";
      break;
    case nilai < Infinity:
      return "Invalid";
      break;
    default:
      return "Invalid";
      break;
  }
}
// console.log(cekNilai(studentScore))
// Output
// Nilai A

module.exports = cekNilai;
