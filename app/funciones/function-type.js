"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    // let myFunction: (y: number, z: number) => number;
    // let myFunction: (y: string) => string;
    let myFunction;
    // myFunction = 10;
    // console.log({ myFunction });
    // myFunction = addNumber;
    // console.log(myFunction(1, 2));
    // myFunction = greet;
    // console.log(myFunction("Bryam"));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
