/**
 * Question 2: MongoDB Queries
a) Write a MongoDB query to create a new document in a collection named "students" with fields "name,"
"age," and "grade."
b) Write a MongoDB query to update the "age" field of a document in the "employees" collection with the name
"John" to 30.
c) Write a MongoDB query to delete a document from the "products" collection with the name "Product A."
d) Write a MongoDB query to retrieve all documents from the "orders" collection where the total amount is
greater than $100.



Answers

a) db.students.insertOne({name: "inder", age: 20, grade:"A"});

b) db.employees.updateOne({name: "John"}, {$set: {age: 30}});

c) db.products.deleteOne({name: "Product A"});

d) db.products.find({ totalAmount : {$gt: 100}});
 */

