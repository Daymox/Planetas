import { Planeta } from '../Planetas/planeta.js';
import { Regiones } from '../Planetas/regiones.js';
import { Persona } from './persona.js';
import { Construcciones } from '../Construcciones/construcciones.js';

export class Obrero extends Persona {
	constructor(nombre, edad, regionHabitada) {
		super();
		this.nombre = nombre;
		this.edad = edad;
		this.construccionesRealizadas = [];
		this.regionHabitada = regionHabitada;
		this.recursos += 10 * this.construccionesRealizadas.length;
		this.destacada = this.esDestacado();
	}

	esDestacado() {
		if (this.construccionesRealizadas.length > 5) {
			this.destacada = true;
			return this.destacada;
		}
		return this.destacada;
	}

	trabajarEnPlaneta(planeta, tiempo) {
		const longitud = tiempo / 2;
		const superficieCubierta = tiempo;
		let nivelImportancia = 1;

		if (!planeta || !(planeta instanceof Planeta)) {
			console.error('');
			return;
		}

		const agregarConstruccion = (construccion) => {
			if (planeta) {
				planeta.construccionesEfectuadas.push(construccion);
			}
		};

		switch (this.regionHabitada) {
			case Regiones.Costa:
				const museoCosta = Construcciones.construirMuseo(
					superficieCubierta,
					nivelImportancia
				);
				agregarConstruccion(museoCosta);
				break;

			case Regiones.Llanura:
				if (this.destacada) {
					const museoLlanura = Construcciones.construirMuseo(
						superficieCubierta,
						nivelImportancia
					);
					agregarConstruccion(museoLlanura);
				} else {
					const murallaLlanura = Construcciones.construirMuralla(longitud);
					agregarConstruccion(murallaLlanura);
				}
				break;

			case Regiones.Montania:
				const murallaMontania = Construcciones.construirMuralla(longitud);
				agregarConstruccion(murallaMontania);
				break;
		}
	}
}
