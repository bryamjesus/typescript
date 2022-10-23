"use strict";
(() => {
    var _a;
    const batman = "Batman";
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Héroe: Volcan Negro`;
    console.log(`I'm ${batman}`);
    console.log(batman.toUpperCase());
    // Si la posicion tiene algo has el toUpperCase si no no hagas nada
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No está presente"); // si esta undefined pues muestra el mensaje
})();
