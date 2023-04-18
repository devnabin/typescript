function sum(a: number, b: number) {
    console.log(a + b);
    return a + b;
}

// Problem statemenet
let value;
value = sum; 
value(11, 9) //this will work as expected
value = 8;   //this assignment is also work 
//value(6,4) //this will not work 
// Overall this is not the good way to write ts code 



//To resolve this issuse lets analyze 3 cases
// case1
let value1:Function; //letter f should be capital
let value2:()=>number; //here number is return type
let value3:(a:number, b:number)=>number; //best way to define func