/* eslint-disable lines-between-class-members */
/* eslint-disable max-classes-per-file */

class Personaje {
  tipo;
  serie;
  nombre;
  edad;
  estado;
  familia;

  constructor(nombre, anyos, serie, tipo, estado, familia) {
    this.nombre = nombre;
    this.edad = anyos;
    this.serie = serie;
    this.tipo = tipo;
    this.estado = estado;
    this.familia = familia;
  }
  comunicar(mensaje) {
    return mensaje;
  }
  morir(estado) {
    this.estado = estado;
  }
}

class Rey extends Personaje {
  anyosReinado;
  mensaje;

  constructor(nombre, anyos, serie, tipo, estado, familia, anyosReinado) {
    super(nombre, anyos, serie, tipo, estado, familia);
    this.anyosReinado = anyosReinado;
    this.mensaje = "Vais a morir todos";
    /*  super.comunicar(mensaje); */
  }
}
class luchador extends Personaje {
  armaQueUsa;
  destreza;
  mensaje;

  constructor(
    nombre,
    anyos,
    serie,
    tipo,
    estado,
    familia,
    armaQueUsa,
    destreza
  ) {
    super(nombre, anyos, serie, tipo, estado, familia);
    this.armaQueUsa = armaQueUsa;
    this.destreza = destreza;
    this.mensaje = "Primero pego y luego pregunto";
    /*  super.comunicar(mensaje); */
  }
}
class asesor extends Personaje {
  personajeAsesorado;
  mensaje;

  constructor(nombre, anyos, serie, tipo, estado, familia, personajeAsesorado) {
    super(nombre, anyos, serie, tipo, estado, familia);
    this.personajeAsesorado = personajeAsesorado;
    this.mensaje = "No sé por qué, pero creo que voy a morir pronto";
    /*  super.comunicar(mensaje); */
  }
}
class escudero extends Personaje {
  personajeServido;
  gradoPelotismo;
  mensaje;

  constructor(
    nombre,
    anyos,
    serie,
    tipo,
    estado,
    familia,
    personajeServido,
    gradoPelotismo
  ) {
    super(nombre, anyos, serie, tipo, estado, familia);
    this.personajeServido = personajeServido;
    this.gradoPelotismo = gradoPelotismo;
    this.mensaje = "Soy un loser";
    /*  super.comunicar(mensaje); */
  }
}

const joffrey = new Rey(
  "joffrey Baratheon",
  34,
  "Game of Thrones",
  "Rey",
  "Vivo",
  "Lannister",
  700
);
console.log(joffrey);
console.log(joffrey.comunicar("hola"));
