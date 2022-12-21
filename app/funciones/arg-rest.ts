(() => {
  const fullName = (firstName: string, ...restArgs: string[]) => {
    return `${firstName} ${restArgs.join(' ')}`;
  };

  const superman = fullName("Bryam", "Talledo", "Garcia", 'Manolo');
  console.log({ superman });
})();
