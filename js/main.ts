/*
  Programacion Orientada a Objetos en TypeScript
    Metodo Constructor: Este como su nombre lo indica, construye el objeto al instanciarlo o al crearlo.
    Este metodo se encarga de asignarle un valor a las propiedades del objeto por medio de la instancia,
    es decir, al instanciar un objeto nuevo de una clase, como parametro se pasan los valores que se asignaran a 
    las propiedades de este y el metodo constructor se ejecuta para asignar los valores. Ejemplo:

      var objeto = new verga(Tamaño, grosor);

    El metodo constructor se define en la clase con la palabra reservada "constructor", este nunca devuelve ningun valor.
*/

class Camiseta{
  public color:string;
  public modelo:string;
  public marca:string;
  public talla:string;
  public precio:number;

  // Metodo constructor: En este caso el constructor recibe un objeto JSON para los datos que se asignaran al nuevo objeto, pero bien podria recibir parametros individuales
  constructor(data){
    // Es te metodo no hace mas que asignar lo que obtiene como parametro como valor a las propiedades de un neuvo objeto creado con esta clase
    this.color = data.color;// Se hace referencia al mismo objeto con el operador "this"
    this.modelo = data.modelo;
    this.marca = data.marca;
    this.talla = data.talla;

    // Nota: Tambien se podrian hacer comprobaciones de los parametros para poder asignar los valores como si es un numero y cosas asi
    if(!isNaN(data.precio)){// Como aca que se comprueba si es un numero el parametro
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