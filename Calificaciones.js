const calificaciones = [9, 10, 10, 8, 6, 7, 10]
let sumaCalificaciones = 0

for (let index =0; index < calificaciones.length; index++) {
 sumaCalificaciones += calificaciones[index]
}

const promedio = sumaCalificaciones / calificaciones.length

if (promedio >= 8) {
    alert('Se armo la beca perrrooooo!!!!!!!!!' + "con promedio de " + promedio)
} else {
    alert('Pelas, no se armo la beca' + "con promedio de " + promedio)
}