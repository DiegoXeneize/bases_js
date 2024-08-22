console.log("Comienzo del programa");


//Definicion de promesa
const suma =  (a, b, callback) => {
    const promesa = new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("Los numeros deben ser positivos");
        }else{
            const resultado = a + b;
            resolve(resultado);
        }

    });
    return promesa;
};

const resta =  (a, b, callback) => {
    const promesa = new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("Los numeros deben ser positivos");
        }else{
            const resultado = a - b;
            resolve(resultado);
        }

    });
    return promesa;
};

suma(5, 6)
    .then((resultadoSuma) => {
        console.log("El resultado de la suma es: " + resultadoSuma);
        return resta(resultadoSuma, 2);
    })
    .then((resultadoResta) => {
        console.log("El resultado de la resta es: " + resultadoResta);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });

console.log("Fin del programa");

//Siempre que usamos un await la funcion debe ser async
const operaciones = async(a,b) => {
    try{
        console.log("Inicio de la funcion");
        const valorSuma = await suma(a,b);
        console.log("Test: " + valorSuma);
        const valorResta = await resta(valorSuma,2);
        console.log("Test: " + valorResta);

    } catch(error){ 
        console.log("Error: " + error);
    }
}

operaciones(5,6);


