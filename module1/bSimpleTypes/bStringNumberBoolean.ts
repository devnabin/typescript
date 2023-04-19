/* 
* We will learn types :-
* number type
* string type
* boolean type
*/

let a: number = 12;
let b: string = 'Result is:';
let c: boolean = false;


function WhatIsThat(aa: number, bb: string, cc: boolean) {
    if (cc) console.log(bb, aa);
    else console.log('It\'s not valid result');
}

WhatIsThat(a, b, c);