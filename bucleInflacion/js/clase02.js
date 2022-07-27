let ingresarPrecio = parseInt(prompt("Ingresar precio actual"))
let ingresarInflacion = parseInt(prompt("Ingresar indice corriente de inflación interanual en formato ##.##"))

for (let i = 1; i<= 12; i++) {
    let resultado = (ingresarPrecio * ( 1 + ((ingresarInflacion/100) * i)));
    console.log("$" + resultado + " Para el mes " + i)
    alert("$" + resultado + " Para el mes " + i)
}