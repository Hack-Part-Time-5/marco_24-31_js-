/* Crear una función, tipCalculator(), que tenga dos
parámetros: una cadena que represente la calidad del
servicio recibido y un número que represente el coste
total. Devuelve la propina, como un número, basado en lo
siguiente:
- 'fatal' debería devolver un 5% de propina.
- 'ok' debería devolver un 15% de propina.
- 'bueno' debería devolver un 20% de propina.
- 'excelente' debería devolver un 30% de propina.
- Toda la demás propina deben ser predeterminadas al 18%. */

let servicio = prompt(
`Describe que tal ha estado el servicio: 
fatal
ok
bueno
excelente
asi asi
normal`
)





function tipCalculator() {
    switch (servicio) {
        case 'fatal':
            alert(`${5} % de propina`)
            break;
        case 'ok':
            alert(`${15} % de propina`)
            break;
        case 'bueno':
            alert(`${20} % de propina`)
            break;
        case 'excelente':
            alert(`${30} % de propina`)
            break;
        default:
            alert(`${18} % de propina`)
            break;
    }
}

tipCalculator()
