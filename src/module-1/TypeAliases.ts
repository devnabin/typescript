/*
* This is called custome type
* type example
* Syntax
  type <name of type> = datatype;
*/

// example - 1
type numberType = number
let a: numberType = 1 

// example - 2
type stringType = string
let b: stringType = 'this is typed example'

// example - 3
// type-aliases with union type
type typeWithUnion = number | boolean
let c: typeWithUnion = 2
let d: typeWithUnion = true
//let e:typeWithUnion = "hey can this accept string" //❌


// example - 4
// type-aliases with object
type typeWithObject = {
    sn: number,
    fname: string,
    lname: string
}

let e: typeWithObject;
e = {
    sn: 1,
    fname: 'alla',
    lname: 'bhat'
}
