// case 1 : ---------------------------------------------------------------------------------------------------------------
let oneObj: {
    fname: string,
    lname: string,
    age?: number; //? means field is optional
} = {
    fname: 'john',
    lname: 'doe',
    age: 26
}


oneObj.age = 56;
// console.log(oneObj);




// case 2 : ---------------------------------------------------------------------------------------------------- 
let twoObj: {
    favSub: string,
    contentNo?: number,
    rollNo: number
};

//instilizing object with value reqd all the property
twoObj = {
    favSub: "Science",
    contentNo: +"23", //trick to convert string to number by adding + befor string
    rollNo: 67
}

// console.log(twoObj);



// case 3 : Nexted Obj---------------------------------------------------------------------------------------------------------------
let obj3: {
    one: number,
    two: string,
    three: boolean,
    four: {
        fourtyOne: string[],
        fourtyTwo: boolean,
        fourtyThree: string
    }
}

obj3 = {
    one: 1,
    two: "butterfly",
    three: false,
    four: {
        fourtyOne: ['parrot'],
        fourtyTwo: false,
        fourtyThree: "parrot is not count with butterfly"
    }

}