(() => {
  let avengers: number = 10;
  const villians: number = 20;

  console.log({ avengers });

  if (avengers < villians) {
    console.log("ESTAMOS EN PROBLEMAS!");
  } else {
    console.log("Nos salvamos");
  }

  avengers = Number("22DS");
  console.log({ avengers });
})();
