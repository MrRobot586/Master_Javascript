/*
  Programacion Orientada a Objetos en TypeScript
    Herencia: Es un cocepto en el cual una clase hija puede heredar propiedades y metodos de una clase madre.
    Es decir, se crea una clase a partir de otra, y la clase resultante hereda de esa otra clase sus propiedades  y atributos,
    con lo cual esta nueva clase seria una extencion o una version alterna de la clase anterior, tenidno claro sus atributos y 
    metodos propios tambien.

    En conclusion: Se hace una extencion de una clase, creando una nueva con las propiedades de la anterior y añadiendo nuevas.

    Para heredar en una clase hija las propiedades de una madre se crea una nueva clase, pero se usa la palabra "extends" seguido del
    nombre de la clase madre y llaves detro de las cuales se colocan las nuevas caracteristicas de esa nueva clase. Ejemplo:
      
      class Sudadera extends Camiseta{
        public prop:type;
        public metodo(){
          ...
        };
      }
*/

interface CamisetaBase{
  setColor(color);
  getColor();
}

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

// De esta forma se hereda de una clase madre las propiedades y metodos que esta posea:
class Sudadera extends Camiseta {// Creamos una nueva clase le damos un nombre y usamos "extends" y el nombre de la clase madre.
  // A continuacion como en una clase normal, se colocan las propiedades y metodos que tendra esta clase hija
  public capucha:boolean;

  public setCapucha(val){
    this.capucha = val;
  }

  public getCapucha(){
    return this.capucha;
  }
}

// Instanciar un nuevo objeto sudadera:
var camisa = new Sudadera(datos);

// Usamos uno de los meotodos que se crearon en la clase al heredar las propiedades de camisa y que ahora posee el objeto creado
camisa.setCapucha(true);

console.log(camisa.getCapucha());// Imprimimos getCapucha para ver su valor

// Nota: En este caso la clase hija es una variacion de una camisa, una sudadera que tiene una capucha