/*EJERCICIO 1
Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas).
Si el parámetro de la operación no es válido que mande un error personalizado a la consola.
*/

/*
function ejercicioUno(a,b, operation){
    if(operation === "suma"){
        return console.log(a + b);
    }else if(operation === "resta"){
        return console.log(a - b);
    }else if(operation === "multiplicacion"){
        return console.log(a * b);
    }else if(operation === "division"){
        return console.log(a / b);
    }else{
        console.error(`La operación ${operation} no es válida!!`)
    }
}


//OTRA MANERA

function ejercicioUno(a, b, operation){
    switch(operation){
        case ("suma"):
            return console.log(a + b);
        case ("resta"):
            return console.log(a - b);
        case ("multiplicacion"):
            return console.log(a * b);
        case ("division"):
            return console.log(a / b);
        default:
            console.error(`La operación ${operation} no es válida!!`)
    }
}
*/


/* EJERCICIO 2
Realizar una funcion que almacene en un arreglo todos los numeros pares desde a hasta b
*/

function ejercicioDos(a, b){
    let pares = [];
    for(let i=a; i <= b; i++){
        if(i % 2 === 0){
            pares.push(i);
        }
    }
    console.log(pares)
}



//EJECUCIÓN DE FUNCIONES
//ejercicioUno(12,5,"suma");

ejercicioDos(2,200);