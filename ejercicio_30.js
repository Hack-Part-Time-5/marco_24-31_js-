/* Escribir una función que calcule el área de un circulo cuyo radio sea del 1 al 10. */


function area (){
    for(let i = 1; i <= 10; i++){
        let resultado = Math.PI * Math.pow(i, 2)
        console.log(`El area de un circulo con un radio de ${i} es: ${resultado.toFixed(2)}`) 
        // Si agrego return solo me da el resultado de 1, no me sigue haciendo la iteracion.
    }
}
area()