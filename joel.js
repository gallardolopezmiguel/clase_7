var estudiantes = [{
 nombre: "Mike",
 Matematicas: 8, 
 Historia: 8,
 Geografia: 8   
}, {
    nombre: "Gaby",
    Matematicas: 6,
    Historia: 6,
    Geografia:5
}, {
    nombre: "julio",
    Matematicas: 5,
    Historia:5,
    Geografia:5
}]

for (let contador =0; contador < estudiantes.length; contador++) {
    promedio = (estudiantes[contador].Matematicas + estudiantes[contador].Historia + estudiantes[contador].Geografia)/3
if (promedio >6){
    console.log("pasaste" + estudiantes[contador].nombre) 
} else {
    console.log("Fallaste" + estudiantes[contador].nombre)
}

}