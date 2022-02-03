/*
  Programacion Orientada a Objetos en TypeScript
    Visibilidad de propiedades y metodos: Los metodos y propiedades pueden tener una visivilidad en el resto del codigo de la aplicacion.
    La visivilidad de una propiedad o metodo puede ser:

      Public: Esta propiedad sera accesible desde cualquier lugar en el codigo de la aplicacion.
      Private: Esta propiedad sera accesible solo desde la clase que la contenga y desde una clase que herede las propiedades de esa clase.
      Protected: Esta propiedad sera accesible solo desde la clase que la contenga.

      Con "accesible desde la clase", se refiere a que solo se puede cambiar su valor desde la clase. Osea si se crea un objeto y este tiene
      definido en su clase un metodo que modifica una propiedad protected o private, entonces esta se podra modificar solo a traves de ese metodo.
    
*/

class Camiseta{
  public color:string;
  public modelo:string;
  public marca:string;// Propiedad publica: Accesible dede donde sea
  private talla:string;// Propiedad privada: Solo accesible para clases que hereden esta o esta misma
  protected precio:number;// Propiedad protegida: solo accesible desde esta clase

  public setPrecio(newprice){
    this.precio = newprice;
  }

  public getPrecio(){
    return this.precio;
  }

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

class Sudadera extends Camiseta{
  public capucha: boolean;
}


var datos = {
  color: "Rojo",
  modelo: "Manga larga",
  marca: "Nike",
  talla: "L",
  precio: 12.5
};

// Instanciar un nuevo objeto camisa:
var camisa = new Camiseta(datos);

camisa.setPrecio(6);

console.log(camisa);

var sudadera = new Sudadera(datos);

console.log(sudadera);