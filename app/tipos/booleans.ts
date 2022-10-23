(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  isSuperman = true && false;
  console.log({ isSuperman });

  isSuperman = isBatman ? true : false;
  console.log({ isSuperman });
})();
