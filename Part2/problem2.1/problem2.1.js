// input
// let input1 = 6;
// let input2 = 20;

// Your Code Here
function test(input) {
  console.log(`input: ${input}\noutput:`);
  for (let j = 1; j <= input; j++) {
    if (input % j == 0) {
      console.log(j);
    }
  }
}
// console.log(test(6));
// console.log(test(20));

module.exports = test;
