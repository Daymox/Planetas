export class DelegacionDiplomatica {
	constructor() {
		this.relacionesDiplomaticas = {};
	}

	establecerRelacion(planetaUno, planetaDos) {
		if (!this.relacionesDiplomaticas[planetaUno]) {
			this.relacionesDiplomaticas[planetaUno] = [];
		}

		if (!this.relacionesDiplomaticas[planetaDos]) {
			this.relacionesDiplomaticas[planetaDos] = [];
		}

		this.relacionesDiplomaticas[planetaUno].push(planetaDos);
		this.relacionesDiplomaticas[planetaDos].push(planetaUno);
	}

	hayRelacionDiplomatica(planetaUno, planetaDos) {
		return (
			this.relacionesDiplomaticas[planetaUno] &&
			this.relacionesDiplomaticas[planetaUno].includes(planetaDos)
		);
	}
}
