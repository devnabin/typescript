// function returing only string
function a(): string {
    return "Hello World";
}

// function returing only number
function b(): number {
    return 1;
}

//function should have no return type
function c(): void {
    console.log("if we type any return type then it will throw an error");
}

// function taking arguments
function myFunc(a: number, b: number): number {
    return a + b;
}
const myFuncValue = myFunc(11, 9);
console.log(myFuncValue);