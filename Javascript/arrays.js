//Arrays & Objects Practice – map, filter, find, push, pop
let numbers = [2, 5, 8, 12, 3];

numbers.push(20);     // add at the end
console.log(numbers);

let last = numbers.pop();  // remove last
console.log("Removed:", last);
console.log(numbers);

// map – transform each item
// “map makes a new array where each item is changed.”
let doubled = numbers.map((n) => n * 2);
console.log(doubled);

// filter – keep only some items
// “filter makes a new array with only the items we want.”
let evens = numbers.filter((n) => n % 2 === 0);
console.log(evens);

// find – find the first item that matches
let firstBig = numbers.find((n) => n > 5);
console.log(firstBig);
