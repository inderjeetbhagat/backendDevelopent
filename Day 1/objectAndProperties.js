// Problem 3: Objects and Properties
// You're creating an online store. Define a JavaScript object named "product" with the following
// properties:- name (string)- price (number)- inStock (boolean)
// Create at least three products using your object template and display their details using
// console.log.

let product = {
    name: "",
    price: 0,
    inStock: false
};

let product1 = Object.create(product);
product1.name = "Laptop";
product1.price = 60000;
product1.inStock = true;

let product2 = Object.create(product);
product2.name = "Mobile";
product2.price = 10000;
product2.inStock = false;

let product3 = Object.create(product);
product3.name = "Calculator";
product3.price = 1000;
product3.inStock = true;

console.log(product1);
console.log(product2);
console.log(product3);