/* Escribir un programa que imprima en consola todos los números del 1 al 100. 
Para los múltiplos de 3 imprime "java".
Para los múltiplos de 5 imprime "script".
Para los múltiplos de 3 y 5 imprime "javascript".*/

function sustituir (){
    for(let i = 1; i <= 100; i++){
        if (i % 15 == 0) {
            console.log('javascript')
        }else if (i % 3 == 0) {
            console.log('java')
        }else if (i % 5 == 0) {
            console.log('script')
        }else {
            console.log(i)

        }
    }
}

sustituir()