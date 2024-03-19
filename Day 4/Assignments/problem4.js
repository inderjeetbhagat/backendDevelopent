/*Question 4: Query Comparison
Compare and contrast the following MongoDB and SQL queries for retrieving data:
a) MongoDB: db.products.find({ category: "Electronics" })
SQL: SELECT * FROM products WHERE category = "Electronics"
b) MongoDB: db.users.findOne({ username: "Alice" })
SQL: SELECT * FROM users WHERE username = "Alice"
c) MongoDB: db.orders.aggregate([{ $group: { _id: "$status", total: { $sum:
"$amount" } } }])
SQL: SELECT status, SUM(amount) as total FROM orders GROUP BY status

Answers

a) Both queries retrieve products with the category "Electronics."

b) Both queries retrieve a user named "Alice."

c) Both queries calculate the total amount of orders grouped by status.




*/
