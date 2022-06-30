function ubahHuruf(sentence) {
  // Your Code Here
  let crypt = '';
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence.charCodeAt(i);
    if (char >= 97 && char <= 122) {
      crypt += String.fromCharCode(((char - 97 + 10) % 26) + 97);
    } else if (char >= 65 && char <= 90) {
      crypt += String.fromCharCode(((char - 65 + 10) % 26) + 65);
    } else {
      crypt += String.fromCharCode(char);
    }
  }
  return crypt;
}

console.log(ubahHuruf("SEPULSA OKE"));
console.log(ubahHuruf("ALTERRA ACADEMY"));
console.log(ubahHuruf("INDONESIA"));
console.log(ubahHuruf("GOLANG"));
console.log(ubahHuruf("PROGRAMMER"));
