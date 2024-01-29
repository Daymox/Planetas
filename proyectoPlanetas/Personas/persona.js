export class Persona {
	constructor(nombre, edad) {
		this.nombre = nombre;
		this.edad = edad;
		this.recursos = 20;
		this.destacada = false;
	}

	esDestacado() {
		this.destacada = (this.edad >= 18 && this.edad <= 65) || this.recursos > 30;
		return this.destacada;
	}

	getRecursos() {
		return this.recursos;
	}

	ganarRecursos(cantidad) {
		this.recursos += cantidad;
	}

	gastarRecursos(cantidad) {
		if (this.recursos >= cantidad) {
			this.recursos -= cantidad;
			return true;
		}
		return false;
	}

	cumplirAnios() {
		this.edad += 1;
	}
}
