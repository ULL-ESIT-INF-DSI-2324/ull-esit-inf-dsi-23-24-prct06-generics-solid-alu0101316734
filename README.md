# Practica 6 Principios SOLID

En esta práctica aprenderemos a ultilizar los principios SOLID.Si bien en la práctica anterior aprendimos a usar dichos principios en esta práctica nos centraremos especialmente en ellos.Para ello nos propusieron 5 ejercicios y una modificación para ello.

## Objetivos a cumplir

En esta practica queremos fundamental los principios SOLID que son

* __Single responsibility principle__

* __Open-closed principle__

* __Liskov substitution principle__

* __Interface segregation principle__

* __Dependency inversion principle__


## Requisistos previos

Antes de comenzar esta práctica teniamos que hecer unos requisistos previos:

1. Aceptar la asignación del github classroom.

2. Ultilizar herraminetas como Instanbull y Coverage

## Ejercicio 1 Gestión de la mudanza

En este ejercicio llevaremos un  sistema de mudanza que gestionará una serie de cajas a las cuales podremos elminar añadir y buscar unos enseres.

Para lograr esto usaremos una interfaz 

```ts
export interface enseres_interface{
    nombre:string;
    peso:number;
    n_enseres:number;
}
```

la cual nos dira el nombre del enser el peso de dicho enser y numero de enseres que hay en la caja.

Una vez hecho esto instanciamos como `Array<enseres_interface>` y ulitilizamos un atributo para el peso maximo de las cajas llamado `peso_max:number`.

### implementacion de metodos

El metodo buscar dado un parametro del nombre dado por string comprueba si el objeto existe en ese array devolvera true, en caso contrario devolvera false.
```ts
    buscar_enser(nombre: string): boolean{
        let existe: boolean = false;
        this._enseres.forEach(element => {
            if (nombre === element.nombre) {
                existe = true;
            }
        });
        return existe;
    }
```

Tanto como el __añadir enser__ como __eliminar_enser__ son 2 metodos que primero buscan si existe ya el enser aumnetará y decrementara el numero enseres que haya.Sin embargo,cuando eliminas el enser si es solo 1 este directamente borra el objeto de la lsita.En cuanto al añadir el enser, si no existe simpletente se hara un `push` sobre el vector.Un poco de codigo sería:

```ts
    nuevo_enser(enser_nuevo:enseres_interface):void{   
      if(this.buscar_enser(enser_nuevo.nombre))
         this._enseres.forEach(element =>{
           if(element.nombre === enser_nuevo.nombre)
              element.n_enseres+=enser_nuevo.n_enseres;    
         })
      else
         this._enseres.push(enser_nuevo);
      if(this.es_peso_max() === undefined)
        throw new Error('El peso es demasiado');
    }
    eliminar_enser(nombre_eliminar:string):void{
      this._enseres.forEach((enser,index) => {
        if(enser.nombre === nombre_eliminar)
          if(enser.n_enseres != 1)
             enser.n_enseres--;
          else
            this._enseres.splice(index, 1);
      })
    }
```

por ultimo `es_max` es una función que sirve para comprobar si la caja esta en su peso maximo para ello sumamos todos los pesos de los enseres y multiplicamos si hay mas de uno de esos si es mayor devuelve undefined si es igual devuelve true y si es menor que el peso máximo devuelve false.

```ts
    es_peso_max():undefined | boolean
    {
      let num: number = 0;
      this._enseres.forEach(enser => {
          num += enser.n_enseres * enser.peso;
      });
      if (num > this._max_peso) {
          return undefined;
      } else if (num === this._max_peso) {
          return true;
      } else {
          return false;
      }
    }
```

Con este ejercicio un error en los principos solid que comento que cometí fue declarar una clase `enser` en vez de una intefaz esto incumpliria el principio __Dependency inversion principle__ ya que en vez de ser más abstracto  tiendes más particulación.

## Ejercicio 2 Facturas de diferentes formatos.

En este ejercicio tenemos que hacer una gestión de facturas ultilizando formatos diferentes en este caso de __HTML__ y __PDF__ y además tenemos que tener en cuenta el __Open-closed principle__ para el diseño de la clase.

Para empezar creamos una clase abstracta en la cual tendrá un método abstracto .

```ts
export abstract class Bill implements Bill_interface{
  constructor(public cantidad:number,public descripcion:string,public precio:number){
    if(cantidad < 0 || precio < 0 || descripcion === "")
       throw new Error("Los argumentos no son permitidos");
  }
  abstract generate():string;
}
```

Entonces aquí podemos heredar de la clase abstracta un `generete` para implementar el generador de facturas dependiendo de lo nuevo que se quiera.Un ejemplo sería:

```ts
export class HTML extends Bill{
constructor(public cantidad:number,public descripcion:string,public precio:number){
   super(cantidad,descripcion,precio);
}  
   generate(): string {
      /** formato para generar factura*/
   }
}
```

Y si quisera meter otro formato distinto solo tendría que heredar la clase y implementar el formato en `generate`.

## Ejercicio 3 Gestor de fichero

En este ejercicio algo diferente consiste en dado el codigo tenemos que averiguar que principio SOLID no esta cumpliendo.En este caso el código tiene 2 funciones.Leer el fichero y escribir en el fichero,esto contradice el __Single responsibility principle__ porque este principio dice que cada clase solo debe tener una sola responsabilidad.

Arreglando el código para que cumpla este principio podemos tener algo así:

```ts
export class ReadFile {

  constructor(protected filePath: string) {
  }


  public readFile(): string {
    /** codigo*/
  }
}

export class WriteFile {

  constructor(private filePath: string) {
  }   
  public writeFile(data: string): void {
    /** codigo */
}
}
```

Separamos la ocupación en 2 clases porque son independientes y cumpliendo dicho principio.

## Practica 4 Impresoras y escaner

En este caso, de nuevo se nos otorga el codigo dado y decir que pricipio no cumple. En este caso el codigo no cumple el principio de la __Interface segregation principle__ que consisten en hacer interfaces particulares de cada clase y una interfaz genérica como es este caso. En su lugar podemos cambiar el código para que cumpla dicho principio.

```ts
export interface PrintableScannable {
    print(): string
    scan(): string
  }

export interface Printable{
    print(): string;
}

export interface Scannable {
    scan(): string
}
```

Y así cada clase tiene su interfaz propia y además quitamos la necesidad de tener métodos vacios 

## Ejercicio 5 Servicio de mensajeria

En este caso el código no cumple el principio de __Dependency inversion principle__ que dice que no dependamos de otras clases especificas si no de la abstración.Para solucionar el problemas podemos hacer el siguiente cambio al código.

```ts
export interface notification{
   notify(message: string): string
}
export  class Notifier {
    constructor(private notificationService: notification) {
    }
}
export class EmailService implements notification {
    //Codigo 
}
export class ShortMessageService implements notification {
    //Codigo
}
```

En este caso hemos cambiado la union de tipos por una interfaz la cual implementamos en las clases concreta donde implementa el método que queremos ejecutar en cada clase particular.

## Modificación

En esta modificación se nos pedía un conjunto de numeros genéricios que la cual se podra,mediante _templates_,estos templates tendran 2 clases `Racional` y `Complex`.La interfaz la haremos talque así

```ts
export interface Arithmeticable<T>{
    add(n:T):T | undefined;
    substract(n:T):T | undefined;
    multiply(n:T):T | undefined;
    divide(n:T):T | undefined;
}
```

De esta forma implementamos el _template_ tanto en el `Racional` como en el `Complex`.Para la clase donde alamcenaremos todos los numeros de un mismo tipo haremos los siguiente

```ts
export class ArithmeticableCollection <T extends Arithmeticable<T>>{
  addArithmeticable(New_coleccion:T):void{
    //codigo
  }
  getArithmeticable(index:number):T |undefined{
    //Codigo
   }
  getNumberOfArithmeticables():number{
    //codigo
  }
}
```

Aquí,además, restringimos el _template_ de los métodos de `Arithmeticable`. Y al implementarlos nos permite usar los templates en dichas clases. Clases se implementaran tal que así.

```ts
export class Racionals implements Arithmeticable<Racionals>{
  //Codigo
}

export class Complex implements Arithmeticable<Complex>
{
  //Codigo
}
```

## Badge

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101316734/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101316734?branch=main)

[![Tests](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101316734/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101316734/actions/workflows/node.js.yml)

## Conclusión

Los principios __SOLID__ son unos principios muy importante y a tener en cuenta cuando progrmamos en POO:Porque nos ayuda a que nuestras clases sean con un buen diseño.Personalemnte creo que esta práctica ha sido muy sencilla además que empiezo a ver ciertos patrones que ayudan aa cumplir dichos pricipios.

## Bibliografía

[Principios SOLID][SOLID]

[SOLID]:https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-solid.html

[Filter en array][filter]

[filter]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

[Documentacion de templates][templates]

[templates]:https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html
