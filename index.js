/*EJERCICIO 1
Realizar una función que nos permita realizar las 4 operaciones aritméticas, es decir, nos permita sumar, restar, dividir y multiplicar. La función debe recibir 3 parámetros, dos deben ser los valores (a y b) y uno el nombre de la operación (en minúsculas).
Si el parámetro de la operación no es válido que mande un error personalizado a la consola.
*/

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


/*EJERCICIO 3
Realizar una tabla de multiplicación de un número (a) desde 0 hasta x, pero que no se muestre la multiplicacion de a * 5
*/

function ejercicioTres(a,x){
    for(let i=0; i <= x; i++){
        if(i !== 5) console.log(`${a} x ${i} = ${a * i}`)
    }
}


/*EJERCICIO 4
Hacer una función que filtre todos los números que sean múltiplos del 3 de un arreglo que contenga los números del 1 al 100
*/

function ejercicioCuatro(){
    let array=[];
    let multiplos=[];
    for(let i=1; i <= 100; i++){
        array.push(i)
    }
    console.log(`Este es el arreglo principal: ${array}`)
    array.filter((eL)=> {
        if(eL % 3 === 0) multiplos.push(eL)
        });
    console.log(`Estos son los numeros que son multiplos del 3: ${multiplos}`)
}


/*EJERCICIO 5
Hacer una función que haga de forma aleatoria un número entre 1 y 1000, y que a ese número le saqué su mitad, el doble y su raíz cuadrada.
*/

function ejercicioCinco(){
    let n=Math.floor(Math.random() * 1000) + 1;
    console.log(`La mitad de ${n}: ${n / 2}`);
    console.log(`El doble de ${n}: ${n * 2}`);
    console.log(`La raiz cuadrada de ${n}: ${Math.sqrt(n)}`)
}




//EJECUCIÓN DE FUNCIONES
ejercicioUno(12,5,"suma");

ejercicioDos(2,200);

ejercicioTres(4,15)

ejercicioCuatro()

ejercicioCinco()