
var examenes = [10,5,10]
var fallados = 0
for ( let contador = 0; contador < examenes.length; contador++) {
    if (examenes[contador] <6) {
        fallados++
        alert(examenes[contador])
    }
}

alert(" Necesitas retomar " + fallados + " examen")