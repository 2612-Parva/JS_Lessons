//objects

var customers={
    firstname:"Parva",
    lastname:"Patel",
    fruits:["Apple","Banana","Cherry"]
}
console.log(customers.firstname);

//dot notation
customers.firstname="Parva123";

//bracket notation
customers["lastname"]="Patel123";

console.log(`${customers.firstname} ${customers.lastname}`);

//arrays

var fruits=["Apple","Banana","Cherry"];
console.log(fruits[0]);
console.log(customers.fruits[1]);