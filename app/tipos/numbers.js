"use strict";
(() => {
    let avengers = 10;
    const villians = 20;
    console.log({ avengers });
    if (avengers < villians) {
        console.log("ESTAMOS EN PROBLEMAS!");
    }
    else {
        console.log("Nos salvamos");
    }
    avengers = Number("22DS");
    console.log({ avengers });
})();
