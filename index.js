// ES6

const todolist = ["Milk", "Cow"]; // We can't redeclare or modify CONST

let counter = 10; // This variable can't be redeclared
const list = [1, 2, 3, 4, 5];

for (let i = 0; i < list.length; i++) {
  console.log(i);
}
// ----------------------------------------------------------
const name = "Vedansh";
const age = 25;

console.log(`Hello my name is ${name} and my age is ${age}`);

// -----------------------------------------------------------

function getBook(title, author) {
  return { title, author };
}

console.log(getBook("HP", "JKR"));

function getBookv2(title, author) {
  return {
    "Book Name": title,
    "Writer of the Book": author,
  };
}

console.log(getBookv2("VD", "VCD"));

// -----------------------------------------------------------

const shoppingList = {
  agenda: "Shopping List",
  items: ["Milk", "Curd"],
};

const { agenda, items } = shoppingList; // The var names should be the same as the key names in shoppingList

console.log(agenda, items);

// -----------------------------------------------------------
// ARROW FUNCTIONS

console.log("\n Arrow Functions\n");

const sayLocation = (location) => {
  console.log(`My location is ${location}`);
};

sayLocation("Jamshedpur");

// -----------------------------------------------------------
// THIS Keyword, While using event listeners, to keep the context inside the nested functions,
// use ARROW FUNCTIONS

console.log("\nThis Keyword\n");

var newUser = {
  name: "Vedansh",
  age: 23,
  sayName: function () {
    console.log(`My name is ${this.name}`);
    const fullName = () => {
      console.log(`My name is ${this.name} and my age is ${this.age}`);
    };
    fullName();
  },
};

newUser.sayName();

// -----------------------------------------------------------
// Default Parameters

console.log("\nDefault Parameters \n");

const add = (x = 0, y = 0) => {
  console.log(x + y);
};

add(20, 50);
add();

// -----------------------------------------------------------
// Array Functions

console.log("\n ARRAY FUNCTIONS \n\n");

const newShoppingList = ["Chocolates", "Milk", "Bread"];

newShoppingList.forEach((item, index) => {
  console.log(`The product at index ${index} is ${item}`);
});

// -----------------------------------------------------------
// Map : Used to take an array, make a copy of it and modify it however we want

const newList = newShoppingList.map((item) => {
  return item + " new";
});

console.log(newList);

const filterList = newShoppingList.filter((item) => {
  return item === "Milk";
});

console.log(filterList);

// -----------------------------------------------------------
// Constructors

console.log("\nClass \n\n");

class ShoppingListClass {
  constructor(items, quantity) {
    this.items = items;
    this.quantity = quantity;
  }

  sayList() {
    console.log(this.items);
  }
}

// const shopObject = new ShoppingListClass(["Milk", "Chocolate"], 3);

class Product extends ShoppingListClass {
  constructor(items, quantity, amount, cost) {
    super(items, quantity);
    this.amount = amount;
    this.cost = cost;
  }
}

const productObject = new Product(["Milk", "Soda", "Candy"], 3, 4, 5);

productObject.sayList();

// -----------------------------------------------------------
// Promise

console.log("\nPROMISE\n\n");

console.log(1);
const prom = new Promise((resolve, reject) => {
  // Everything here is Async
  setTimeout(() => {
    // resolve(200);
    reject("This is an error");
  }, 2000);
});
console.log(2);

prom
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(3);
