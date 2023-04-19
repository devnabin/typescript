/* 
* let a:unknown;
* This is how we defined unknown data type
* Unknow is likely similar to 'any' data type
*/

let a: unknown;
let b: String;
let c: any;

a = 5;
b = "hello";

b = a; //this will show an error because of type unknown.
b = c    //this will not throw or show any error because of type any.

console.log(a === b);

// So, in summery it is good to use type unknow instead of any