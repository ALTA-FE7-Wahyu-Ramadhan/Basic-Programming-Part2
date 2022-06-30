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
  let print = ""
    for (let i = 1; i <= high*high; i++){
        let str = ""
        if (i%3==0) {
            str += "X "
        } else {
            if (i%2==0) {
                str += "Z "
            } else { 
                str += "Y "
            }
          }
        if (i%high==0) str += "\n"
        print += str
      }
      console.log(print);
  }

drawXYZ(3);
drawXYZ(5);
drawXYZ(1);