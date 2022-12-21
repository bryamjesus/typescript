(() => {
  const fullName = (firstName: string, lastName: string | boolean): string => {
    return `${firstName} ${lastName}`;
  };

  const name = fullName("Bryam", true);

  console.log({ name });
})();
