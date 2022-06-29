function playWithAsterik(n){
  // Your Code Here
  let pola= '';

//cetak baris
  for(let x= 1; x<=n; x++){

//cetak isi kolom untuk spasi
      for(let y=n - 1; y >=x; y--){
          pola += ' ';
      }

//cetak isi kolom bintang
      for(let z=1; z<=x; z++){
          pola += '* ';
      }
      pola += '\n';
  }
  return pola;
}
console.log(playWithAsterik(5));