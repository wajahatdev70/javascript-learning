console.log("Hello, World!");

// Variables and constants
let name = "Alice";
const age = 25;

console.log("Name:", name);
console.log("Age:", age);

// Basic function
function greet(person) {
    return `Hello, ${person}!`;
}

console.log(greet(name));

// Simple loop
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// Basic conditional
if (age > 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Array and iteration
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit) => {
    console.log(`I like ${fruit}`);
});