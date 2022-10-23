(() => {
  const batman: string = "Batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Héroe: Volcan Negro`;

  console.log(`I'm ${batman}`);

  console.log(batman.toUpperCase());

  // Si la posicion tiene algo has el toUpperCase si no no hagas nada
  console.log(batman[10]?.toUpperCase() || "No está presente"); // si esta undefined pues muestra el mensaje
})();
