// input
let input1 = 6;
let input2 = 20;

// Your Code Here
console.log(`input: ${input1}\noutput:`);
for (let i = input1; i > 0; i--) {
  if (input1 % i == 0) {
    console.log(i);
  }
}
console.log(`input: ${input2}\noutput:`);
for (let j = input2; j > 0; j--) {
  if (input2 % j == 0) {
    console.log(j);
  }
}
