/* eslint-disable lines-between-class-members */
/* eslint-disable max-classes-per-file */

class Personaje {
  nombre;
  tipo;
  serie;
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
    this.destreza = Math.min(10, Math.max(0, destreza));
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
    this.gradoPelotismo = Math.min(10, Math.max(0, gradoPelotismo));
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

// Array de personajes
const personajes = [joffrey, jaime, daenerys, tyrion, bronn];

// Imprimir nombre de la serie

const seriePersonajes = personajes
  .map(({ serie }) => serie)
  .filter((serie, index, series) => series.indexOf(serie) === index);

console.log(seriePersonajes);

// Recoger Mensajes de personajes

const mensajesClasePersonaje = (personajes, tipoPersonaje) => {
  const mensajePersonaje = [];
  for (const personaje of personajes) {
    if (personaje.tipo === tipoPersonaje) {
      mensajePersonaje.push(personaje.mensaje);
    }
  }
  console.log(mensajePersonaje);
};

mensajesClasePersonaje(personajes, "luchador");

// Saca un resumen por consola con los personajes agrupados por tipo, que los personajes vayan ordenados por edad, de menor a mayor.

const personajesPorTipo = (personajes) =>
  personajes.reduce((acumulador, personaje) => {
    const { tipo } = personaje;
    const subResultado = acumulador.find(
      (personaje) => personaje.tipo === tipo
    );
    if (subResultado) {
      subResultado.personajes.push(personaje);
      return acumulador;
    } else {
      return [
        ...acumulador,
        {
          tipo,
          personajes: [personaje],
        },
      ];
    }
  }, []);

const personajesOrdenados = (personajesPorTipo) => {
  const personajesOrdenadosEdad = [...personajesPorTipo];
  for (const personaje of personajesOrdenadosEdad) {
    personaje.personajes.sort(
      ({ edad: edad1 }, { edad: edad2 }) => edad1 - edad2
    );
  }
  return personajesOrdenadosEdad;
};

console.log(personajesOrdenados(personajesPorTipo(personajes)));

/* PARTE EXTRA EJERCICIO (profesor Salva): hacer una función que aproveche la función del punto 4
y atomaticamente le pase los tipos de personajes sin tener que hardcorearlos */

const mensajePersonajeTipo = (personajes) => {
  const arrayTipos = personajes.map(({ tipo }) => tipo);
  const arrayTiposFiltrados = arrayTipos.filter(
    (item, index) => arrayTipos.indexOf(item) === index
  );
  console.log(arrayTiposFiltrados);
  for (const tipo of arrayTiposFiltrados) {
    mensajesClasePersonaje(personajes, tipo);
  }
};

/* mensajePersonajeTipo(personajes); */
