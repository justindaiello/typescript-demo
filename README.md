# TypeScript Demo

TypeScript is a superset of JavaScript that has optional static typing and compiles to plain JavaScript.

## Types

TypeScript brings an additional layer to JavaScript: _static types_. These only exist when compiling or type-checking source code. Each storage location (variable, property, etc.) has a static type that predicts its dynamic values. Type checking ensures that these predictions come true.

Detecting errors in code without running it is referred to as static checking. Determining what’s an error and what’s not based on the kinds of values being operated on is known as static type checking. TypeScript checks a program for errors before execution, and does so based on the kinds of values, it’s a static type checker.

### Type annotation

A colon after a variable name starts a _type annotation_: the type expression after the colon describes what values the variable can have.

```typescript
let myNumber: number = 12;
```

### Type Inferences

Even though every storage location has a static type in TypeScript we do not always have to specify a type. TypeScript can often infer it.

```typescript
let myNumber = 12;
```

TypeScript can infer that `myNumber` is a static type of `number`

### Type Aliases

By using `type` we can create an alias for an existing type.

```typescript
type Age = number;

let myNumber: Age = 12;
```

```typescript
type User = {
  name: string;
  email: string;
};

let myUser: User = { name: 'Bob Loblaw', email: 'bob@loblaw.com' };
```

We can also use `interface` to accomplish the same thing. `type` cannot be reopened to add new properties while `interface` can be extended.

```typescript
interface User = {
  name: string;
  email: string;
}

let myUser: User = { name: 'Bob Loblaw', email: 'bob@loblaw.com' }
```

### Function Types

We can check the type of the argument and the return type.

```typescript
const myFunc = (num: number): number => {
  return num + 1;
};
```
