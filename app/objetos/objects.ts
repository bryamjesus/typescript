(()=>{
  let flash: { name: string, age:number, powers: string[], getName?:()=>string} = {
    name: 'Barry Allent',
    age: 24,
    powers: ['Súper velocidad', 'Viajat en el tiempo']
  }

  flash = {
    name: 'Superman',
    age:60,
    powers:['Súper fuerza'],
    getName(){
      return this.name
    }
  }

  console.log(flash.getName())

})()