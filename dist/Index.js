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
const entradaTeclado_1 = require("./util/entradaTeclado");
const fechacalc_1 = require("./util/fechacalc");
// creamos la variable funcion min que llamamos main
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    let menu;
    let num1;
    let num2;
    let numeroint;
    let resultado;
    do {
        console.log('\n');
        console.log('1.- Calculadora de edad');
        console.log('2.- Mcd');
        console.log('3.- Mcm');
        console.log('4.- ¿Eres primo?');
        console.log('0.- Salir');
        menu = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Elige una opción: '));
        switch (menu) {
            case 1:
                console.log("CALCULADORA DE EDAD");
                let edad = yield (0, fechacalc_1.fechacalc)();
                console.log(`Su edad actual es: ${edad}`);
                break;
            case 2:
                console.log("CALCULADORA DEL MAXIMO COMUN DIVISOR");
                num1 = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Introduce 1º numero'));
                num2 = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Introduce 2º numero'));
                console.log(`El resultado es: ${mcd(num1, num2)}`);
                break;
            case 3:
                console.log("CALCULADORA DEL MINIMO COMUN MULTIPLO");
                num1 = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Introduce 1º numero'));
                num2 = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Introduce 2º numero'));
                console.log(`El resultado es: ${mcm(num1, num2)}`);
                break;
            case 4:
                console.log("COMPROBADOR DE NUMEROS PRIMOS");
                numeroint = parseInt(yield (0, entradaTeclado_1.leerTeclado)('Introduce un numero'));
                let i;
                for (i = numeroint; i > 0; --i) {
                    resultado = 0;
                    if (numeroint % i == 0) {
                        break;
                    }
                    else {
                        resultado = 1;
                    }
                }
                //if (resultado==1){console.log("El numero  es primo");}else
                {
                    console.log("El numero no es primo");
                }
        }
    } while (menu != 0);
});
const mcd = (num1, num2) => {
    let temporal; //Para no perder el num2
    while (num2 !== 0) {
        temporal = num2;
        num2 = num1 % num2;
        num1 = temporal;
    }
    return num1;
};
const mcm = (num1, num2) => {
    let min;
    min = num1 * num2;
    return min / mcd(num1, num2);
};
/*const numprimo = (numeroint:number):boolean =>  {
        let i : number;
        let resultado: boolean;
        
       

        for ( i = numeroint ; i>0; --i){
            resultado=true;
             if (numeroint%i==0){
                break}
            else{
                resultado=false;} };
                
                return resultado;
} */
// invocamos la función
main();
