//Task 1
const getPropValues = (arr, prop) => arr.map(user => user[prop]);

const users = [
  { name: "Mykola", age: 21, isActive: true },
  { name: "Denys", age: 18, isActive: true },
  { name: "Przemek", age: 45, isActive: false }
];

console.log(getPropValues(users, "name")); // ["Mykola", "Denys", "Przemek"]
console.log(getPropValues(users, "age")); // [21, 18, 45]
console.log(getPropValues(users, "isActive")); // [true, true, false]

/********************************************************************************************/
//Task 2
const getGuestById = (guests, id) => guests.find(guest => guest.id === id);

const guests = [
  { id: 1, name: "Michal", age: 13 },
  { id: 2, name: "Denys", age: 20 },
  { id: 3, name: "Przemek", age: 33 }
];

console.log(getGuestById(guests, 2)); // {id: 2, name: "Denys", age: 20}
console.log(getGuestById(guests, 4)); // undefined

/*********************************************************************************************/
//Task 3
const products = {
  apples: 6,
  bananas: 10,
  fish: 30,
  milk: 18
};

const values = Object.values(products);
const summAll = values => values.reduce((acc, value) => (acc += value), 0);
console.log(summAll(values)); // 64

/**********************************************************************************************/
//Task 4            "old" approach
function User(login, password, email) {
  this.login = login;
  this.password = password;
  this.email = email;
}

User.prototype.getUserInfo = function() {
  console.log(
    `Login: ${this.login} Password: ${this.password} Email: ${this.email}`
  );
};

const Trevor = new User("Trev123", "qaz123", "trevor@mail.com");
const Nykola = new User("Nykola", "gg12fds", "nykola@mail.com");

Trevor.getUserInfo();
Nykola.getUserInfo();

/*********************************************************************************************/
//Task 5
const elements = ["HTML", "CSS", "JavaScript", "Java", "PHP"];
const list = document.querySelector(".listTech");
for (let items of elements) {
  const item = document.createElement("li");
  item.textContent = items;
  list.append(item);
}

/*********************************************************************************************/
//Task 6
// const userList = document.createElement("ul");
// userList.className = "userList";
// document.body.appendChild(userList);

// while (true) {
//   let input = prompt("The name of the new menu item:");
//   if (input === null) {
//     break;
//   }
//   let listItem = document.createElement("li");
//   listItem.textContent = input;
//   userList.appendChild(listItem);
// }
// console.log(userList);

/********************************************************************************************/
// Task 7
const boxes = document.querySelector(".boxes");

function createBoxes(num) {
  const container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < num; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.height = 30 + 10 * i + "px";
    newDiv.style.width = 30 + 10 * i + "px";
    newDiv.style.backgroundColor = `${"#" +
      Math.floor(Math.random() * 16777215).toString(16)}`;
    container.appendChild(newDiv);
  }
  boxes.appendChild(container);
}
createBoxes(3);
