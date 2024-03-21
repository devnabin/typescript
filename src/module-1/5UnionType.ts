// We can assign a variable with different types in optional
// Different types can be assigned with the help of piped "|"

let myVariable : string|boolean;
// this is the example of union type, we can see piped | between string and boolean 
// Now myVariable will only accept only string or boolean

myVariable = "hey this string" //✨
console.log(myVariable);

myVariable = false //✨
// console.log(myVariable);

// thisIsVariable = 45 // ❌ 
// thisIsVariable = {} // ❌ 
