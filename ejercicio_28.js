/* Escribir una función que imprima un intervalo de números entre 0 y 10, excluyendo los pares. */

let num = 0

function exclude_par () {
    while (num < 10) {
        num ++
        if(num % 2 == 0){
            console.log('Numero par excluido')
        }else{
            console.log(num)
        }
    }
}
exclude_par()