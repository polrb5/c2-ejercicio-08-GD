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
    super.comunicar(mensaje);
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
console.log(joffrey.comunicar(mensaje));
