# JavaScript Strings

## Declaring Strings
```js
let single = 'Hello';
let double = "World";
let backtick = `Hi ${single}`;
```

## Common String Methods
```js
let str = "JavaScript";

str.length            // 10
str.toUpperCase()     // "JAVASCRIPT"
str.toLowerCase()     // "javascript"
str.includes("Script") // true
str.indexOf("a")      // 1
str.replace("Java", "ECMA") // "ECMAScript"
str.slice(0, 4)       // "Java"
```

## Template Literals
```js
let name = "kaveri";
let greet = `Hello, ${name}!`;
```
