/*
  Programacion Orientada a Objetos en TypeScript
    Este lenguaje tiene una version mas robusta de la programacion orientada a objetos que la que provee JavaScript,
    ademas que al transpilarse a javascript convierte el codigo a compatible con todos los navegadores, incluyendo navegadores
    antiguos.

    P.O.O: COmo se usa en Ts no es aplicable a JS nativo.

    Un objeto es una entidad con propiedades y metodos, que se asemeja a un objeto de la vida real. Un objeto se crea a partir de una clase.
    Los objetos pueden tener todo tipo de propiedades que pueden ser publicas, privadas o protegidas, dependiendo de como sean
    podran editarse o no fuera del objeto o solo mediante un metodo.
    Los metodos pueden obtener datos de las propiedades o setearlos (osea obtener su valor o cambiarlo). Si una propiedad es privada
    solo se puede cambiar su valor mediante un metodo del objeto, si es publica se podra setear haciendo referencia al objeto y propiedad.
    Los metodos y propiedades se definene en la clase a partir de la cual se crea un objeto.
    Se pueden crear muchos objetos a partir de una misma clase.
    Un objeto se crea instanciando una clase en una variable.
      Ejemplo:var objeto = new Camiseta();

  Clases en TS:
    Molde para crear objetos que compartan ciertas caracteristicas, ejemeplo: un molde para crear una bicicleta
    En una clase se define las propiedades del objeto y sus metodos.
      - Las propiedades: Son valores guardados en variables. Ejemplo: Una bicicleta tiene marca, esa seria una caracteristica o propiedad.
      - Los metodos: Son acciones o funciones que realiza el objeto en cuestion. Ejemplo: Una bicicleta rueda, ese seria un metodo.

    Para definir una clase se usa la palabra reservada class, seguido del nombre de la clase y llaves. El nombre de la clase
    debe tener la primera letra en mayuscula.

    Para definir una propiedad, se coloca la visibilidad de la propiedad, seguido del nombre,":" y el tipado, se cierra con ";"
      Una propiedad puede ser publica (public), privada (private) o protegida (protected). Dependiendo de esto la propiedad podra o no ser
      editada fuera del objeto.

    Para definir un metodo,

    Es recomendable definir la clase en un fichero a parte y que este tenga el nombre de la clase como tal.
*/
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    // Metodos:
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
// Instanciar un nuevo objeto camiseta:
var camisa = new Camiseta();
// Usar el metodo setColor() para cambiar el color al nuevo objeto
camisa.setColor("Rojo");
console.log(camisa.getColor()); // Usar el metodo getColor() para obtener el color de la camisa, anteriormente e
