"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "----"}`;
    };
    const name = fullName("Bryam");
    console.log({ name });
})();
