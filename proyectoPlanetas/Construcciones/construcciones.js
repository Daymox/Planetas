import { Muralla } from './muralla.js';
import { Museo } from './museo.js';

export const Construcciones = {
	construirMuralla(longitud) {
		return new Muralla(longitud);
	},

	construirMuseo(superficieCubierta, nivelImportancia) {
		return new Museo(superficieCubierta, nivelImportancia);
	},
};
