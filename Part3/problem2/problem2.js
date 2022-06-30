// Problem 2 - Draw XYZ

// Buatlah sebuah function bernama drawXYZ yang
// menjalankan proses dengan menggunakan looping
// dan menerima satu parameter bernama N. Buatlah
// sebuah pola kemunculan huruf X, Y, dan Z. dimana
// Y mewakili kelipatan ganjil, Z kelipatan genap,
// dan X khusus urutan kelipatan 3.

// Sample Test Case

// Input: 5
// Output:
// Y Z X Z Y
// X Y Z X Z
// Y X Y Z X
// Z Y X Y Z
// X Z Y X Y

// Input: 5
// Output:
// Y Z X
// Z Y X
// Y Z X


function drawXYZ(high) {
  // Your Code Here
  for(let i = 1; i <= high; i++) {
    let output ="";
    for (let j= i; j < i + high; j++) {
      if (j % 3 == 0) {
        output +="X"
      } else if (j % 2 == 0) {
        output +="Z"
      } else {
        output +="Y"
      }
    }
    console.log(output);
    output = "";

  }
}

drawXYZ(3);
drawXYZ(5);
drawXYZ(1);