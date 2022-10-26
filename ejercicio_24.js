// funcionamiento de este algoritmo------------------------------------------------------------------------------------------------------------------
/* Digamos que queremos un número aleatorio del 5 al 15 (incluidos tanto el 5 como el 15 como posibles resultados). Bueno, vamos a tener que trabajar con Math.random(), que solo produce valores desde 0 hasta aproximadamente 0.99999999999999, así que necesitamos hacer dos trucos para poder trabajar con esto.

El primer truco es reconocer que el valor de retorno más bajo posible de Math.random() es 0, y 0 veces cualquier cosa es 0, por lo que debemos comenzar nuestro rango en 0 y ajustarlo al final. En lugar de calcular 5-15 desde el principio, reconocemos que hay 11 valores en 5-15 (5, 6, 7, 8, 9, 10, 11, 12, 13, 14 y 15) y contamos esa cantidad de 0 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) para usar 0-10 como nuestro rango en su lugar. Esto es lo que hace la myMax - myMinparte de la fórmula. Define nuestro nuevo máximo como 10. Luego, al final de los cálculos, simplemente agregaremos 5 nuevamente a cualquier resultado que obtengamos para hacer que el posible rango de resultados cambie de 0-10 a 5-15. Esto es lo que hace la + myMinparte de la fórmula.

El segundo truco es reconocer que multiplicar Math.random() por nuestro nuevo rango máximo de 10 solo puede darnos un resultado tan alto como 9.999999999999 porque Math.random() solo llega a 0.99999999999 (nunca en realidad 1). Cuando usamos Math.floor() que luego para convertirlo en un número entero, reduce el resultado a 9, por lo que debemos agregar 1 allí para hacer que el valor máximo posible sea 10 en lugar de 9. Eso es lo que hace la + 1parte de la fórmula.

Terminemos esto con un ejemplo.

Math.random()puede ser 0el más bajo y aproximadamente 0.99999999999999el más alto (nunca 1). Veamos qué sucede con esos dos casos para ver cómo funciona el rango.

Si ejecutamos el caso en el que llamamos randomRange(5, 15)y Math.random()nos da 0, esto es lo que obtenemos:

Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
=

Math.floor(0 * (15 - 5 + 1) + 5);
=

Math.floor(0 * 11 + 5);
=

Math.floor(0 + 5);
=

Math.floor(5);
=

5
Entonces, el valor más bajo posible es 5. Si ejecutamos el caso en el que llamamos randomRange(5, 15)y Math.random()nos da 0.99999999999999, esto es lo que obtenemos:

Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
=

Math.floor(0.99999999999999 * (15 - 5 + 1) + 5);
=

Math.floor(0.99999999999999 * 11 + 5);
=

Math.floor(10.9999999999999 + 5);
=

Math.floor(15.9999999999999);
=

15
Así que el valor más alto posible es 15. */

// --------------------------------------------------------------------------------------------------------------------------------------------

/* Escribir una función que, dados un mínimo y un máximos, cree un número aleatorio entre un número y un máximo. */

let min = parseInt(prompt('Escribe un numero minimo: '))
let max = parseInt(prompt('Escribe un numero maximo: '))

function aleatorio(){
   return alert(Math.floor(Math.random() * (max - min + 1)) + min)
}

aleatorio()


