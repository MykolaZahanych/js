"use strict";

//Task 1
const biggestNumber = {
  Mykola: 12,
  Misha: 45,
  Dima: 3,
  Roma: 99
};

const number = Object.entries(biggestNumber);
let newValue = 0;
let newKey = "";

for (const arr of number) {
  const key = arr[0];
  const value = arr[1];

  if (value > newValue) {
    newValue = value;
    newKey = key;
  }
}

console.log(`${newKey}: ${newValue}`);
/*===========================================================*/
//Task 2
const checkForSpam = function(str) {
  let arrStr = str.split(/\b/);

  for (let i = 0; i < arrStr.length; i++) {
    let word = arrStr[i].toLowerCase();

    if (word === "spam" || word === "free") {
      return true;
    }
  }
  return false;
};

console.log(checkForSpam("Such a beautiful day")); // false
console.log(checkForSpam("Get a free eight-piece set of nuggets")); // true
console.log(checkForSpam("SPAM How to earn fast money?")); // true
console.log(checkForSpam("work hard - play hard")); // false
/*===========================================================*/
//Task 3
const uniqueNumbers = [4, 6, 13, 1];
const addUniqueNumbers = function(...args) {
  for (const arg of args) {
    const hasElement = uniqueNumbers.includes(arg);
    if (!hasElement) {
      uniqueNumbers.push(arg);
    }
  }
};

addUniqueNumbers(1, 2, 3);
console.log(uniqueNumbers);
/*===========================================================*/
//Task 4
const countTotalSalary = function(worker) {
  const values = Object.values(worker);
  let total = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total;
};

console.log(
  countTotalSalary({
    June: 200,
    July: 400,
    August: -80
  })
);
/*===========================================================*/
//Task 5
let login = "";
const logins = ["Z123", "BinDon", "Tomy", "qwer1234"];

const checkLoginValid = function(login) {
  if (login.length >= 4 && login.length <= 10) {
    return true;
  }
  return false;
};

const checkLoginUnique = function(logins, login) {
  const hasLogin = logins.includes(login);
  if (!hasLogin) {
    return true;
  }
  return false;
};

const addLogin = function(login) {
  checkLoginValid(login);
  if (checkLoginValid(login) === true) {
    checkLoginUnique(logins, login);
    if (checkLoginUnique(logins, login) === true) {
      logins.push(login);
      console.log("Login successfully added!");
    } else {
      console.log("This login is already taken!");
    }
  } else {
    console.log("Mistake! Login must be from 4 to 10 characters!");
  }
};

addLogin("Jerry");
addLogin("Hi");
addLogin("Z123");
/*===========================================================*/
//Task 6
function Person(name, age, hobby, isHappy) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.isHappy = isHappy;

  this.getPersonalInfo = function() {
    console.log(`Person: ${name} is ${age} years old and like ${hobby}`);
  };
}

const person = new Person("Mark", 20, "football", true);
person.getPersonalInfo();
