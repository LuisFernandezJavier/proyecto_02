"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fechacalc = void 0;
const entradaTeclado_1 = require("./entradaTeclado");
const fechacalc = () => __awaiter(void 0, void 0, void 0, function* () {
    // sacando la fecha actual en la que se ejecuta.
    //let fhoy = new Date ();
    //let dia = fhoy.getDate(); 
    //let mes = fhoy.getMonth() + 1;
    //let año = fhoy.getFullYear();
    //let fechahoy = `${año}-${mes}-${dia}`
    //paso de string a formato fecha para posteriormente calcular milisegundos
    let fechahoy2 = new Date();
    // pido fecha de nacimiento
    let fnacimiento = new Date(yield (0, entradaTeclado_1.leerTeclado)('Introduce tu fecha de nacimiento (formato: "aaaa-mm-dd")'));
    // calculo años actuales
    let mseg = 24 * 60 * 60 * 1000 * 365;
    //math.abs lo uso para obtener valor absoluto
    let msegtranscurren = Math.abs(fnacimiento.getTime() - fechahoy2.getTime());
    let edad = Math.round(msegtranscurren / mseg);
    return edad;
});
exports.fechacalc = fechacalc;
