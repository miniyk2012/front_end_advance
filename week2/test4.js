// Spread operator ...
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
console.log(books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);
console.log(primes);

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
let produce = fruits.concat(vegetables);
console.log(produce);


produce = [fruits, vegetables];
console.log(produce);


produce = [...fruits, ...vegetables];
console.log(produce);
console.log(...produce);
console.log(...fruits, ...vegetables);
