import { Construccion } from './construccion.js';

export class Museo extends Construccion {
	constructor(superficieCubierta, nivelImportancia) {
		super();
		this.superficieCubierta = superficieCubierta;
		this.nivelImportancia = nivelImportancia;
	}

	calcularValor() {
		const valor = this.superficieCubierta * this.nivelImportancia;
		return valor;
	}
}
