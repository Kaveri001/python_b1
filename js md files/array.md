# JavaScript Arrays

## Declaring Arrays
```js
let fruits = ["apple", "banana", "mango"];
let mixed = [1, "text", true];
```

## Array Properties
```js
fruits.length     // 3
```

## Common Array Methods
```js
fruits.push("orange");    // Add at end
fruits.pop();             // Remove last
fruits.unshift("kiwi");   // Add at start
fruits.shift();           // Remove first
fruits.indexOf("banana"); // 1
fruits.includes("apple"); // true
fruits.join(", ");        // "apple, banana, mango"
```

## Iteration
```js
for (let fruit of fruits) {
  console.log(fruit);
}
```
