/*
*** Table of content ***
1.undefined return type in function
2.void return type in function
3.number, string, boolean return type in function
4. function taking argument
5. copy of function 
6. Types in call back
*/


// case 1
function example0(): undefined { return }
//-> undefined return type must have return keyword without ant data / datatype 

// case 2
function example1(): void { } //if we try to return somthing this will throw an error
//-> function example1():void{return "somthing"} 
//->if we try to return somthing this will throw an error

// case 3
function example2(): number { return 1 }
function example3(): string { return "i'm string" }
function example4(): boolean { return true } //if we try to return somthing this will throw an error


// case 4 (func taking arguments)
function example5(a: string, b: number): number { return (+a) + b }
// console.log(example5('5', 5))


// case 5
function example6(a: number, b: number) {
    console.log(a + b);
    return a + b;
}

/*
-> Problem statemenet
-> Overall this is not the good way to write ts code 

let value;
value = example6; 

value(11, 9) // ✔️ this will work as expected
value = 8;   // ✔️ this assignment is also work 
value(9,4) // ❌this will not work 
*/

//To resolve this issuse lets analyze 3 cases
let value1: Function; //letter f should be capital
let value2: () => number; //here number is return type
let value3: (a: number, b: number) => number; // ✨✔️ best way to define func 

// case 6
function example7(
    arg1: number,
    arg2: number,
    callBack: (arg: number) => void
): void {
    let total = arg1 + arg2;
    callBack(total)
}

example7(1, 4, (result) => console.log(result));
