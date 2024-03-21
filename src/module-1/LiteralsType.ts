// Self made tags are called literals type

// case - 1
let aVariable: "Hi";
// In this case "Hi" is a type and we can only assing "Hi" vale to the variable i.e. aVariable

aVariable = "Hi"; //✨
// aVariable = "Any String is not supported" ❌
// aVariable = 45 ❌
// aVariable = false ❌
// aVariable = {} ❌



// case - 2
// we can use literals types with union type
let isAllow : 'as-num' | 'as-text';
// now variable isAllow only receive this two string


isAllow = 'as-num'; //✨
isAllow = 'as-text' //✨

isAllow = false || 'as-text' //💩

// isAllow = 45 ❌
// isAllow = true ❌
// isAllow = {} ❌


