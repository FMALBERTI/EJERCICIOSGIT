class persona {
    constructor(nombre,apellido,edad) { 
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.informacion = `soy ${this.nombre}, ${this.apellido} 
    y tengo ${this.edad} años` ;
      

      class posicion extends persona {
        constructor(nombre, apellido, edad, posicion) {
          super(nombre, apellido, edad);
          this.posicion = posicion;
        }
      }
      class entrenador extends posicion {
        constructor(nombre, apellido, edad, posicion, añosexperiencia, ID) {
          super(nombre, apellido, edad, posicion);
          this.añosexperiencia = añosexperiencia;
          this.ID = ID;
        }
      }
    getDetalles() { 
        document.write(this.informacion + "<br>")
        document.write(this.posicion)
        document.write(ID)
        document.write(añosexperiencia)
    }
    
}

let persona1 = new persona("Fabrizio","Malberti","22")/// objeto de la clase
let persona2 = new persona("Martin","Alvarez","23")
let persona3 = new persona("Nicolas","Codon","25") 

persona1.getDetalles();
    persona2.getDetalles();
    persona3.getDetalles();

    