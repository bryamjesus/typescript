"use strict";
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    console.log({ isSuperman });
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman });
})();
