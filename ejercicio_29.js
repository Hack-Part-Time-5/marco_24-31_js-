/* Te dan el length y el width de un polígono de 4 lados. El
polígono puede ser un rectángulo o un cuadrado. Si es un
cuadrado, devuelve su área. Si es un rectángulo, devuelve
su perímetro. 
Para este ejercicio debes asumir que es un cuadrado,
de lo contrario, es un rectángulo.*/

let length = Number(prompt('Escribe el largo del poligono: '));
let width = Number(prompt('Ahora escribe el ancho del poligono: '));

const typePolygon = () => {
if (length == width) {
    let cuadrado = Math.pow(length, 2);
    return console.log(`Tu poligono es un cuadrado, y su area mide ${cuadrado} metros`);
}else{
    let rectangulo = (length * 2) + (width * 2);
    return console.log(`Tu poligono es un rectangulo, y su perimetro mide ${rectangulo} metros`)
}
}
typePolygon()

