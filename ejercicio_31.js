/* Encuentra la forma más rápido de convertir la primera letra de una cadena en mayúscula a través de una función. 
Ejemplo: capitalize('simon') Simon*/

let nombre = 'simon'

let capitalize = () => {
    console.log(nombre.replace(['s'], 'S')) 
}
capitalize()


let amigo = 'simon';
// Ahora hay que crear otra variable para la salida del nuevo string
// con charAt() seleccionamos el indice del primer caracter 0 = s, 1 = i, 2 = m etc... y toUpperCase() lo pone en mayusculas; y con slice(1) selecionamos todo el string desde el indice 1 = i hasta el indice final que es 'n' y con + nos lo une a la S mayuscula formando la palabra Simon con la S capitalizada
let may = amigo.charAt(0).toUpperCase() + amigo.slice(1)
console.log(may)


