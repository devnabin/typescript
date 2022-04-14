/*
TYPESCRIPT is a superset up JAVASCRIPT and it is statically typed means types are checked into compile time
-------------------------------------------------
#1. Place to learn typescript 
   ->JAVATPOINT.COM
   ->TS OFFICIAL DOCS
#2. What to learn next
  ->Nest.js
  ->Next.js
-------------------------------------------------
-------------------------------------------------
# DAY -1
  --> How type can be apply in ts lets see 🔥
  --> Today we will learn, 3 data types including number, string and boolean in ts
  * number 
  ** string
  *** boolean

*/

// Const is a king 🔥 if you are using const you dont need to define type 
const king = 1; //👑  formal and normal way
const anotherKing:number = 1;  // 🙅 dont do this in const decleration


//let see let decleartion
//how to declear a variable type string in typescript
let example1:string;
example1 = "This is how we set types as we cann see example1 variable as string";
// console.log(example1);

//we dont have to define type when variable is inline instilize with string
let example2 = "this is me string2";
// console.log(example2);

//but if we didn't define type and didn't instilize and assign value inline its takes any type
let example3; //it will get type any 
example3 = 32;
example3 = "hello i can use either string , either boolean either number";
// console.log(example3);


//I will not use var anymore in ts❌
//This is enough for day 1 for


/*

bonus for day 1
-------------------
Lets see a normal function with type

*/




function calculateMe(
  firstNumber:number,
  secondNumber:number,
  returnValue:boolean,
  phraseText:string
  ):string //this is return type of function 
   {
    if(returnValue){
         return phraseText + (firstNumber+secondNumber);
    }else{
      return phraseText
    }
   }
  
const firstNumber = 12;
const secondNumber =14;
const returnValue =true;

const phraseText = returnValue ? 'The return value is: ' : 'return value is hidden from user'

const result = calculateMe(firstNumber,secondNumber,returnValue,phraseText);

console.log(result)
   
   
   
   
