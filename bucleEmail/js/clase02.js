let ingresarEmail = prompt("Ingresar Email")
let repetirEmail = prompt("Repetir Email")

while (ingresarEmail != repetirEmail){
    alert("El email no coincide")
    console.log("El email no coincide, el usuario ingresó " + repetirEmail)
    repetirEmail = prompt("Repetir Email")

if(ingresarEmail = repetirEmail){
    console.log("El email coincide, el usuario ingresó " + repetirEmail)
}
}