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

## Primer Hola Mundo
Creamos un archivo con la extension .ts y uno html al abrir el .ts ponemos el siguiente codigo
```ts
const msg: string = "Hola Mundo";
console.log(msg);
```
Para compilar usamos el siguiente comando. La cual hara un archivo .js la cual este transformo del .ts.
```bash
tsc ruta/nombreArchivo.ts
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
Es recomendable utilizar lo menos posible el tipo `Any`
```ts
let a;

a = {};
a = [];
a = true
```

```bash
```
