function sum(
    a: number,
    b: number,
    callBack: (num: number) => void  //here we define function data types 
): void {
    const toReturn = a + b;
    callBack(toReturn);
}


sum(10, 40, (result) => console.log(result))