export class Planeta {
	constructor(nombre) {
		this.nombre = nombre;
		this.habitantes = [];
		this.construccionesEfectuadas = [];
	}

	agregarHabitante(persona) {
		this.habitantes.push(persona);
	}
}
