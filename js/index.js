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

class rey extends Personaje {
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

const joffrey = new rey(
  "joffrey baratheon",
  34,
  "game of Thrones",
  "rey",
  "vivo",
  "lannister",
  700
);
const jaime = new luchador(
  "jaime lannister",
  83,
  "game of Thrones",
  "luchador",
  "vivo",
  "lannister",
  "pintalabios-pistola"
  8
);
const daenerys = new luchadora(
  "daenerys targaryen",
  32,
  "game of Thrones",
  "luchador",
  "vivo",
  "targaryen",
  "pistola armónica"
  6
);
const tyrion = new asesor(
  "tyrion lannister",
  54,
  "game of Thrones",
  "asesor",
  "vivo",
  "Lannister",
  "daenerys"
);
const bronn = new escudero(
  "bronn",
  43,
  "game of Thrones",
  "escudero",
  "vivo",
  "Tarradellas",
  "jaime"
  10
);
