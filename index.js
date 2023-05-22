class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }
  
    saludar() {
      alert(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años y soy de ${this.ciudad}`);
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años y soy de ${this.ciudad}`);

    }
  }
  
  // Crear objetos personalizados a partir de la clase Persona
  const nombre = prompt('Ingrese su nombre:');
  const edad = prompt('Ingrese su edad:');
  const ciudad = prompt('Ingrese su ciudad');
  
  const persona = new Persona(nombre, edad,ciudad);
  persona.saludar();
  