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
  comunicar() {
    return this.mensaje;
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
  }
}
class Luchador extends Personaje {
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
  }
}
class Asesor extends Personaje {
  personajeAsesorado;
  mensaje;

  constructor(nombre, anyos, serie, tipo, estado, familia, personajeAsesorado) {
    super(nombre, anyos, serie, tipo, estado, familia);
    this.personajeAsesorado = personajeAsesorado;
    this.mensaje = "No sé por qué, pero creo que voy a morir pronto";
  }
}
class Escudero extends Personaje {
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
  }
}

const joffrey = new Rey(
  "joffrey baratheon",
  34,
  "game of Thrones",
  "rey",
  "vivo",
  "lannister",
  700
);

const jaime = new Luchador(
  "jaime lannister",
  83,
  "game of Thrones",
  "luchador",
  "vivo",
  "lannister",
  "pintalabios-pistola",
  8
);

const daenerys = new Luchador(
  "daenerys targaryen",
  32,
  "game of Thrones",
  "luchador",
  "vivo",
  "targaryen",
  "pistola armónica",
  6
);

const tyrion = new Asesor(
  "tyrion lannister",
  54,
  "game of Thrones",
  "asesor",
  "vivo",
  "Lannister",
  "daenerys"
);

const bronn = new Escudero(
  "bronn",
  43,
  "game of Thrones",
  "escudero",
  "vivo",
  "Tarradellas",
  "jaime",
  10
);

jaime.morir("Muerto");
tyrion.morir("Muerto");
// Mirar si esta muerto
/* console.log(jaime.estado); */

console.log(joffrey.comunicar());

const personajes = [joffrey, jaime, daenerys, tyrion, bronn];
