
import { leerTeclado } from "./entradaTeclado";
export const  fechacalc = async () => {
    // sacando la fecha actual en la que se ejecuta.
    //let fhoy = new Date ();
    //let dia = fhoy.getDate(); 
    //let mes = fhoy.getMonth() + 1;
    //let año = fhoy.getFullYear();
    //let fechahoy = `${año}-${mes}-${dia}`

    //paso de string a formato fecha para posteriormente calcular milisegundos
    let fechahoy2 = new Date ()

    // pido fecha de nacimiento
    let fnacimiento = new Date ( await leerTeclado('Introduce tu fecha de nacimiento (formato: "aaaa-mm-dd")'));

    // calculo años actuales
    let mseg = 24*60*60*1000*365;
    //math.abs lo uso para obtener valor absoluto
    let msegtranscurren = Math.abs(fnacimiento.getTime() - fechahoy2.getTime()) ;
    let edad = Math.round(msegtranscurren/mseg) ;
    
    return edad
}
