// Métodos (funciones alto nivel) para arrays ECMA 6

let alumnos = [
    {nombre: 'María', apellidos: 'Zuil', puntuacion: 4.6, apto: null},
    {nombre: 'Juan', apellidos: 'Gómez', puntuacion: 7, apto: null},
    {nombre: 'Laura', apellidos: 'López', puntuacion: 3.6, apto: null},
    {nombre: 'Carlos', apellidos: 'Pérez', puntuacion: 6.7, apto: null}, // trailing comma
]

// Método forEach
// Por cada elemento del array ejecutará la función callback pasada como argumento
// <array>.forEach((elementoArray, posiciónIndice) => {
    // Código que puede utilizar los parámetros  
// })

let numeroAlumnosAptos = 0;

alumnos.forEach((alumno, i) => {
    if (alumno.puntuacion >= 5) {
        numeroAlumnosAptos++;
        alumno.apto = true;
    } else {
        alumno.apto = false;
    }
})

console.log(alumnos);
console.log(numeroAlumnosAptos);

// Método map
// Por cada elemento del array ejecutará la función callback pasada como argumento
// <array>.map((elementoArray, posiciónIndice) => {
    // Código que puede utilizar los parámetros 
    // return devuelve el resultado del código en un array
// })

const listadoNombresAlumnos = alumnos.map((alumno, i) => {
    return `${i + 1}.- ${alumno.nombre} ${alumno.apellidos}`;
})

console.log(listadoNombresAlumnos);

// Método filter (como map pero devuelve los elementos que cumplan una condición)

const alumnosNoAptos = alumnos.filter(alumno => alumno.puntuacion < 5);

console.log(alumnosNoAptos);


