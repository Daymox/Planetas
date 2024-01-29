import { Persona } from './persona.js';

export class Productor extends Persona {
	constructor(nombre, edad, planetaHabitado) {
		super();
		this.nombre = nombre;
		this.edad = edad;
		this.planetaHabitado = planetaHabitado;
		this.tecnicasManejadas = ['cultivo'];
		this.recursos += 10 * this.tecnicasManejadas.length;
		this.destacada = this.esDestacado();
	}

	esDestacado() {
		if (this.tecnicasManejadas.length > 5) {
			this.destacada = true;
			return this.destacada;
		}
		return this.destacada;
	}

	aprenderTecnica(tecnica) {
		this.tecnicasManejadas.push(tecnica);
	}

	realizarTecnica(tecnica, tiempo) {
		if (this.tecnicasManejadas.includes(tecnica)) {
			this.ganarRecursos(tiempo * 3);
		} else {
			this.gastarRecursos(1);
		}
	}

	trabajarEnPlaneta(planeta, tiempo) {
		if (this.planetaHabitado === planeta) {
			const tecnicaActual =
				this.tecnicasManejadas[this.tecnicasManejadas.length - 1];
			this.realizarTecnica(tecnicaActual, tiempo);
		}
	}
}
