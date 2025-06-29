# JavaScript Data Types

## Primitive Data Types
These are immutable and stored by value.

1. **String**
```js
let name = "Kaveri";
```

2. **Number**
```js
let age = 19;
```

3. **Boolean**
```js
let isStudent = true;
```

4. **Undefined**
```js
let x;
```

5. **Null**
```js
let y = null;
```

6. **Symbol**
```js
let sym = Symbol("id");
```

7. **BigInt**
```js
let big = 1234567890123456789012345678901234567890n;
```

---

## Reference Data Types
Stored by reference (pointers to memory location).

1. **Objects**
```js
let person = {
  name: "Kaveri",
  age: 19
};
```

2. **Arrays**
```js
let colors = ["red", "green", "blue"];
```

3. **Functions**
```js
function greet() {
  console.log("Hello");
}
```

---

## Key Differences: Primitive vs Reference
| Primitive         | Reference        |
|------------------|------------------|
| Stored by value  | Stored by reference |
| Immutable        | Mutable            |
| Compared by value| Compared by reference |
