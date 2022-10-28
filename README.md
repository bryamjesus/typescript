# APRENDIENDO TYPESCRIPT
[Documentación oficial](https://www.typescriptlang.org/docs/handbook/intro.html)

## Instalacion de manera global
```bash
npm install -g typescript
```
## Ver versión
```bash
tsc -v
```

```bash
tsc --version
```

## tsconfig.json
Para iniciar 
```bash
tsc --init
```
Y ahora con el `tsconfig.json` creado ya no es necesario usar `tsc nombreArchivo.ts` ahora con poner `tsc` va a ser suficiente

## Modo observador
El modo observador sirve para que al momento de guardar cambios en nuestro archivo .ts este ahi mismo lo pase al archivo js. Para activarlo utilizamos el siguiente comando
```bash
tsc --watch 
```
```
tsc -w
```

## Tipos de datos

### Booleans
```ts
let isBooleanTrue: boolean = true
let isBooleanFalse:boolean = true
```

### Numbers
```ts
let isNumber1: number = 1230
```

### String
```ts
const variableString: string = 'Hola'
```

### Any
Any es un tipo de la cual puede ser cualquier tipo.
> Es recomendable utilizar lo menos posible el tipo `any`
```ts
let a: any;

a = {};
a = [];
a = true
```

### Arrays
Los podemos poner que solo reciba un tipo de dato, o que reciba varios
```ts
const arrayNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const array: (string | number | boolean)[] = [1, 2, 3, true, 'Hola Mundo']
```

### Tupla
```ts
const dato: [string, number] = ['Bryam Jesus', 23]
const dato2: [string, number, boolean] = ['Javiera', 22, false]
```

### Enum
```ts
  enum AudioLevel {
    min = 1,
    medium,
    max = 10,
  }

  let currentAudio = AudioLevel.medium; // 2
  console.log(currentAudio);
  console.log(AudioLevel);
```

### Void -> Vacio
```ts
 function callBatman() : void {
    return;
  }

  const callSuperman =() :void => {
    return
  }
```

### Never
```ts
const error = (message: string): never | number => {
  if (false) {
    throw new Error(message);
  }
  return 1;
};
```

