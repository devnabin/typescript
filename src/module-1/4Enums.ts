//Enums has fixed length and fixed typed arra

// case 1
enum Role { ADMIN, AUTHOR, MODIRATOR }

// console.log(Role);
console.log(Role.ADMIN);     //0
console.log(Role.AUTHOR);    //1
console.log(Role.MODIRATOR); //2

const person = {
    role: Role.ADMIN
}

if (person.role == Role.ADMIN) {
    console.log(person.role);    //0
    console.log(Role.ADMIN);     //0
    console.log('matched');
}

// case 2
enum Play { HEAD = 6, ALL_CHARACTER, COSPLAY }
/*
*When we can instilize any data inside enum like we assign value 6 to head
*when we give some value then all th corresponding data got increment value i.e.
All_CHARACTER will be 7 
and
COSPLAY will be 8
*/
