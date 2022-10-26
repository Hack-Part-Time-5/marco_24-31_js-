/* Escribir una función que nos diga si un número es par o impar. */

let pregunta = Number(prompt('Escribe un numero para saber si es par o impar: '))

const resolver = () => {
    if (pregunta % 2 == 0) {
        alert('Es un numero par')
    }else {
        alert('Es un numero impar')
    }
}
resolver()