# TypeScript Demo


## Types

JavaScript has 8 types:
1. Undefined: the set with the only element undefined
2. Null: the set with the only element null
3. Boolean: the set with the two elements false and true
4. Number: the set of all numbers
5. BigInt: the set of all arbitrary-precision integers
6. String: the set of all strings
7. Symbol: the set of all symbols
8. Object: the set of all objects (which includes functions and arrays)

TypeScript brings an additional layer to JavaScript: _static types_. These only exist when compiling or type-checking source code. Each storage location (variable, property, etc.) has a static type that predicts its dynamic values. Type checking ensures that these predictions come true.

Detecting errors in code without running it is referred to as static checking. Determining what’s an error and what’s not based on the kinds of values being operated on is known as static type checking. TypeScript checks a program for errors before execution, and does so based on the kinds of values, it’s a static type checker.

### Type annotation
A colon after a variable name starts a _type annotation_: the type expression after the colon describes what values the variable can have.

```javascript
let myNumber: number =  12
```



