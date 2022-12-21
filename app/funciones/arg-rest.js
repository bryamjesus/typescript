"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName("Bryam", "Talledo", "Garcia", 'Manolo');
    console.log({ superman });
})();
