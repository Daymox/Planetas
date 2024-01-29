import { DelegacionDiplomatica } from './Delegacion/delegacionDiplomatica.js';
import { Planeta } from './Planetas/planeta.js';
import { Planetas } from './Planetas/planetas.js';
import { Regiones } from './Planetas/regiones.js';
import { Obrero } from './Personas/obrero.js';
import { Productor } from './Personas/productor.js';
import { Construcciones } from './Construcciones/construcciones.js';

/* ------------------------------- Delegación ------------------------------- */
const delegacionDiplomatica = new DelegacionDiplomatica();

/* ------------------------- Relaciones Diplomáticas ------------------------ */
delegacionDiplomatica.establecerRelacion(Planetas.Tierra, Planetas.Marte);
delegacionDiplomatica.establecerRelacion(Planetas.Tierra, Planetas.Jupiter);
delegacionDiplomatica.establecerRelacion(Planetas.Tierra, 'Planeta Nuevo');

/* --------------------------- Planetas y Personas -------------------------- */
const planetaTierra = new Planeta(Planetas.Tierra);
const planetaVeritran = new Planeta('Veritran');
const obreroJuan = new Obrero('Juan', 30, Regiones.Llanura);
const otroObrero = new Obrero('HabitanteNuevo', 28, Regiones.Costa);
const productorMaria = new Productor('Maria', 25, Planetas.Tierra);
const otroProductor = new Productor('OtroProductor', 40, 'Veritan');

/* ------------------------------- Habitantes ------------------------------- */
planetaTierra.agregarHabitante(obreroJuan);
planetaTierra.agregarHabitante(productorMaria);
planetaVeritran.agregarHabitante(otroProductor);
planetaVeritran.agregarHabitante(otroObrero);

/* --------------------------- Técnicas y Trabajos -------------------------- */
obreroJuan.trabajarEnPlaneta(Planetas.Tierra, 10);
productorMaria.aprenderTecnica('mineria');
productorMaria.realizarTecnica('mineria', 5);

console.log('Estado inicial del planeta Tierra:');
console.log(planetaTierra);
console.log('Delegación Diplomática:');
console.log(delegacionDiplomatica);

/* ----------------------------- Construcciones ----------------------------- */
const construccionMuralla = Construcciones.construirMuralla(5);
const construccionMuseo = Construcciones.construirMuseo(15, 2);

planetaVeritran.construccionesEfectuadas.push(construccionMuralla);
planetaVeritran.construccionesEfectuadas.push(construccionMuralla);
planetaVeritran.construccionesEfectuadas.push(construccionMuseo);

otroProductor.ganarRecursos(15);
otroProductor.cumplirAnios();

console.log('\nEstado del nuevo planeta después de cambios:');
console.log(planetaVeritran);

console.log('\nDelegación Diplomática después de cambios:');
console.log(delegacionDiplomatica);
