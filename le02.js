//Q2. It's pretty straightforward.
//  Your goal is to create a function that removes the first and
//  last characters of a string. You're given one parameter,
//   the original string.
//  You don't have to worry about strings with less than two characters.

function removesCharacter() {
  const str = "Benimana";
  const result = str.slice(1, -1);
  document.getElementById("character").innerHTML = result;
}
removesCharacter();

//Q3. You get an array of numbers,
// return the sum of all of the positives ones.
function positive() {
  const allNumber = [2, -3, 5, -7, 8, 12];
  let sum = 0;
  for (let i = 0; i <= allNumber.length; i++) {
    if (allNumber[i] > 0) {
      sum += allNumber[i];
    }
  }
  document.getElementById("summation").innerHTML = sum;
}
positive();

//Q1. Given a random non-negative number,
//  you have to return the digits of this
// number within an array in reverse order.

function digitize() {
  const num = 35231;
  const result = num.toString().split("").reverse().map(Number);
  //   console.log(typeof result);
  document.getElementById("number").innerHTML = result;
}
digitize();
