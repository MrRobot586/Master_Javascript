/*
  Programacion Orientada a Objetos en TypeScript
    Interfaces: Se puede definir un modelo para una clase espesifica, esto con el fin de ser estricto con las clases que se usan
    para la creacion de objetos. Una interfaz, define los metodos y propiedades obligatorias que deben existir en una clase.

    Estas interfaces se pueden aplicar a una clase.
    Conclusion: Es como una clase de una clase, reglas a cumplir para crear una clase que se pueden o no implementar.
*/

// De esta forma se crea una interfaz: Con la palabra "interface", seguida del nombre y llaves, dentro de las cuales se colocaran los metodos obligatorios de la clase
interface CamisetaBase{
  // Metodos obligatorios: Se colocan los nombres y los parametros de cada metodo, para predefinirlos
  setColor(color);
  getColor();
}

// Para implementar una interfaz a una camiseta, se coloca la palabra "implements" luego del nombre de la clase, seguido del nombre de la interface
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

// Instanciar un nuevo objeto camiseta:
var camisa = new Camiseta(datos);

console.log(camisa)