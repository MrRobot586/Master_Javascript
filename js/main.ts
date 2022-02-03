/*
  Programacion Orientada a Objetos en TypeScript
    Decoradores: Es un patron de diseño que en pocas palabras sirven para decorar una clase, es decir, le implementan nuevos metodos o propiedades
    a la clase que se le aplica. Osea modifica los metadatos de una clase.

    Se declara como una funcion que a su vez devuelve otra que recibe como parametro la clase a la que se aplica el decorador y dentro de la cual
    se define que se hahra con esa clase, ya sea darle un nuevo metodo como es el ejemplo o editar uno ya existente.
    
*/

// Decorador: En este caso este decorador añade un metodo a la clase
function estampar(logo:string) {// Esta funcion devolvera una funcion anonima
  return function(target: Function){// Que recibe como parametro target (que seria la clase a la que se aplique el decorador)
    target.prototype.estampado = function ():void {// A target el añade un prototype o clase llamado "estampado" que tiene como funcion
      console.log("Camiseta estampada con el logo: " + logo);// Este console log y ademas no devuelve nada (por eso el :void)
      //console.log("Color de la camiseta: " + this.color);// En este caso se toma el valor de la propiedad color y se muestra
    }
  }
}

// Interface
interface CamisetaBase{
  setColor(color);
  getColor();
}

// Clase que implementa interface
@estampar("Nike")// De esta forma se le aplica un decorador a una clase, no se coloca ";", solo se coloca la linea y ya esta
class Camiseta implements CamisetaBase{
  public color:string;
  public modelo:string;
  public marca:string;
  public talla:string;
  public precio:number;

  constructor(data){
    this.color = data.color;
    this.modelo = data.modelo;
    this.marca = data.marca;
    this.talla = data.talla;

    if(!isNaN(data.precio)){
      this.precio = data.precio;
    }else{
      this.precio = 0;
    }
  }

  public setColor(color){
    this.color = color;
  }

  public getColor(){
    return this.color;
  }
}

var datos = {
  color: "Rojo",
  modelo: "Manga larga",
  marca: "Nike",
  talla: "L",
  precio: 12.5
};

// Clase hija de la clase Camiseta
class Sudadera extends Camiseta {
  public capucha:boolean;

  public setCapucha(val){
    this.capucha = val;
  }

  public getCapucha(){
    return this.capucha;
  }
}

// Instanciar un nuevo objeto sudadera:
var camisa = new Camiseta(datos);

console.log(camisa.estampado());