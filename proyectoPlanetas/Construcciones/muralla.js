import { Construccion } from './construccion.js';

export class Muralla extends Construccion {
	constructor(longitud) {
		super();
		this.longitud = longitud;
	}

	calcularValor() {
		const valor = 10 * this.longitud;
		return valor;
	}
}
