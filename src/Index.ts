import { leerTeclado } from "./util/entradaTeclado";
import {fechacalc} from "./util/fechacalc"
// creamos la variable funcion min que llamamos main
let  main = async () => {
    let menu: number
    let num1: number
    let num2: number
    let numeroint:number
    let resultado:number
    do{
    console.log('\n')
    console.log('1.- Calculadora de edad')
    console.log('2.- Mcd')
    console.log('3.- Mcm')
    console.log('4.- ¿Eres primo?')
    console.log('0.- Salir')
    menu = parseInt( await leerTeclado('Elige una opción: ') )
    
    switch(menu){
        case 1:
            console.log("CALCULADORA DE EDAD")
                let edad = await fechacalc()
                console.log(`Su edad actual es: ${edad}`)
                break
            
        case 2:
            console.log("CALCULADORA DEL MAXIMO COMUN DIVISOR")
                num1 =  parseInt( await leerTeclado('Introduce 1º numero')) 
                num2 =  parseInt( await leerTeclado('Introduce 2º numero'))
                console.log(`El resultado es: ${mcd(num1, num2)}`)
                break
        case 3:
            console.log("CALCULADORA DEL MINIMO COMUN MULTIPLO")
                num1 =  parseInt( await leerTeclado('Introduce 1º numero')) 
                num2 =  parseInt( await leerTeclado('Introduce 2º numero'))
                console.log(`El resultado es: ${mcm(num1,num2)}`)
                break
        case 4:
            console.log("COMPROBADOR DE NUMEROS PRIMOS")
            numeroint =  parseInt( await leerTeclado('Introduce un numero')) 
            let i : number
            
            
            
        for ( i = numeroint ; i>0; --i){ 
                resultado=0
             if (numeroint%i==0){
                break}
            else {resultado=1;} }
                //if (resultado==1){console.log("El numero  es primo");}else
                {console.log("El numero no es primo")}
    
    }
    
}while(menu !=0)

}

const mcd = (num1: number, num2: number ): number => {
    let temporal; //Para no perder el num2
    while (num2 !== 0) {
        temporal = num2;
        num2 = num1 % num2;
        num1 = temporal;
    }
    return num1;
}
const mcm = (num1: number, num2: number ): number => {
    let min : number;
    min= num1 * num2;
    return min/mcd(num1 , num2); 
    }

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