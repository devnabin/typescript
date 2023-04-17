/* 
*We will learn Basic function with their types
*Note: we dont need to define types in function in ts because of Type Inference
*What the heck is type inference??😒

if a function is returning a number then type Inference set return type to number like
function a(){
    return "Hello World";
}

Ts automatically set type to string to function a ❤️
*/

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
