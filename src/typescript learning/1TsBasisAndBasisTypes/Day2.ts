/*
Day2 - We will gonna learn 
✅ Object
✅ Arrays
✅ Tuples
✅ enum
✅ Any
*/


// ✅ Object --------------------------------------------------
// !! ERROR ❌❌ !!  here object type is object but it is not the right way to define type of an object
const object1: object = {
    name: 'nabin',
    age: 23,
}
// console.log(object1);
/*
we are not able to access property here so this type of type decleartion is not right one as i told already
console.log(object1.name);
console.log(object1.age);
*/

//✅ way to describe object
const object2 = {
    name: 'nabin',
    age: 23,
}

// object2.age = 34;
// console.log(object2.name);
// console.log(object2.age);



//✅ way to describe object
const object3: {
    name: string;
    age: number;
} = {
    name: 'nabin',
    age: 23,
}

//✅ way to describe object
let object4: {
    name: string;
    age: number;
    contact: number;
    isMale: boolean;
};

object4 = {
    name: 'nabin',
    age: 23,
    contact: 2323,
    isMale: true,
}
// console.log(object4);


// ✅ Object --------------------------------------------------
// ✅ Arrays --------------------------------------------------

const array1: string[] = ['nabin', 'sabin']; //we cannot any other type except string
const array2: number[] = [1, 2, 3]; //we cannot add any types except number
const array3: (boolean | string)[] = ['string', 'number'];

array1.push('dhabin')
array1.shift()
// console.log(array1);

// ✅ Arrays --------------------------------------------------
// ✅ Tuples --------------------------------------------------
// Tuples are new data types in ts
// tuples are same as arrays but have some unique feature
let arr: [number, string];
arr = [1, 'nabin']; //✅
arr = [12, 'sabin'] //✅
arr[1] = 'babin';


/*
# .push ✅ works in enums but it might not be intented but its works 
so it is exception

arr.push(4)
arr.push('what')


arr=[] //❌ empty arry not allowed
arr[1] = 56 ; //❌ it will give error because we have string in 2nd position in array 
arr[0] = 'string' ; //❌ it will give error because we have integer in 1st position in array 
arr=['string', 12] //❌ because we have swap the places and change the types
arr=[12,'string',true] //❌ 
*/
// ✅ Tuples --------------------------------------------------
// ✅ Enum --------------------------------------------------

//UPPER must be followed
enum Role { ADMIN, READ_ONLY, AUTHOR }

const person1 = {
    name: 'nabin',
    age: 23,
    admin:Role.ADMIN,
      
}

if(person1.admin === Role.ADMIN){
    console.log('Welcome admin');
   
}


enum Role1 { ADMIN, READ_ONLY, AUTHOR }
//In Role1 ADMIN will get value of 0 and READ_ONLY will get value of 1 and AUTHOR will get 2 and soon 

enum Role2 { ADMIN=7, READ_ONLY, AUTHOR }
//In role2 we instilize admin with value 7 then other will get value in incremental order, hover over to see the number

enum Role3 { ADMIN, READ_ONLY="hello", AUTHOR="world" }
//We can also use custome value
// ✅ Enum --------------------------------------------------

// ✅ Any --------------------------------------------------
// what the fuck is any, Switching back to javascript
// ✅ Any --------------------------------------------------






