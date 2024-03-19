// Type Assignment and type inference


/*
-----> Use Const always
-----> Use inline variable decleartion using let for type
*/


const thisIsConst = "heyThere"
const thisIsNumConst = 45
console.log("log is -> ", thisIsConst, thisIsNumConst);



let appleIsAwesome = true;
let numberHackIsAwesome = 57
let stringHackShouldBeDone = "hi devs :)"


/* 
>>>Lets see some error case<<<
* appleIsAwesome = "not like that"   //string is provided, boolean type is expected
* numberHackIsAwesome = false //boolean is provided, number is expected
* stringHackShouldBeDone =54 //number is provided, string is expected
*/


let abc: string;
abc = "Hey devs around globe"
// abc = 56; ❌
// abc = true; ❌


//>>Lets see some bad practise<<
let xyz;
xyz = "hi there it is me xyz"
console.log(xyz);
xyz = 67;
console.log(xyz);




