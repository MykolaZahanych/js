// Task 1
const users = ["Apple", "Avocado", "Banana", "Cherry"];

console.log(users.length); //4

console.log(users[1]); // Avocado
console.log(users[3]); // Cherry
console.log(users[0]); // Apple
console.log(users[2]); // Banana

/*==============================================================*/
// Task 2
const users2 = ["Kiwi", "Orange", "Melon", "Lime"];

users2.shift();
console.log(users2);

users2.pop();
console.log(users2);

users2.unshift("Kolya");
console.log(users2);

users2.push("Viktor", "Misha");
console.log(users2);

/*==============================================================*/
//Task 3
//let string;
//let arr;
//string = prompt("Write some words: ");
//arr = string.split(" ");
//console.log(arr);
//console.log(arr.length);

//for (let i = 0; i < arr.length; i += 1) {
//  console.log(i);
//}

//for (const element of arr) {
//  console.log(element)
//}

//for (let i = 0; i < arr.length; i += 1) {
//  console.log(i + " " + arr[i]);
//}

/*==============================================================*/
//Task 4
//let num;

//do {
//  num = prompt("Enter a number greater than 100: ");
//} while (num <= 100 && num != null);

/*==============================================================*/
//Task 5
//const min = 1;
//const max = 100;

//for (let i = min; i <= max; i++) {
//  if (i % 3 == 0) {
//    console.log("Fizz");
//  } else if (i % 5 == 0) {
//    console.log("Buzz");
//  } else {
//    console.log(i);
//  }
//}

/*============================================================= */
//Task 6
//const numbers = [1, 3, 7, 6, 13, 35, 12, 4, 22, 16];
//const num = 10;
//const newArray = [];
//for (const element of numbers) {
//  if (element > num) {
//    newArray.push(element);
// }
//}
//console.log(newArray);

/*============================================================*/
//Task 7
const string = "What a beautiful day";
let longestWord = " ";
let strArray = string.split(" ");

for (let i = 0; i <= strArray.length - 1; i++) {
  if (strArray[i].length > longestWord.length) {
    longestWord = strArray[i];
  }
}
console.log(longestWord);

/*============================================================*/
//Task 8
// let arrayOfNumbers = [];
// let currentInput;
// let currentNumber;
// let summArray = 0;

// do {
//   currentInput = prompt("Enter random number: ");
//   currentNumber = Number(currentInput);
//   if (
//    currentInput === null ||
// currentInput === "" ||
//    Number.isNaN(currentNumber)
//  ) {
//    break;
//  } else {
// arrayOfNumbers.push(currentNumber);
// }
// } while (true);
//console.log(arrayOfNumbers.length);
// if (arrayOfNumbers.length > 0) {
// for (let Number of arrayOfNumbers) {
// summArray += Number;
// }
// }

//console.log("Sum of numbers: " + summArray);

/*============================================================*/
//Task 9
// const numbers = [9, 16, 25, 47, 2];
// let min;
// let max;
// inputMin = prompt("Min: ");
// min = Number(inputMin);

// inputMax = prompt("Max: ");
// max = Number(inputMax);

// inputNumber = prompt("Enter a number between min and max");
// num = Number(inputNumber);

// if (inputNumber === "" || Number.isNaN(num)) {
//   alert("Not a number");
// } else if (numbers.includes(num)) {
//   alert("Congratulations, you guessed it!");
// } else {
//   alert("Sorry, you did not guess!");
// }

/*===========================================================*/
//Task 10
let userInput;
const numbers = [];
let total = 0;
let currentNumber;

do {
  userInput = prompt("Enter random number: ");
  currentNumber = Number(userInput);
  numbers.push(currentNumber);
} while (userInput !== null);

if (numbers.length > 0) {
  for (let Number of numbers) {
    total += Number;
  }
  alert("Sum of numbers: " + total);
}
