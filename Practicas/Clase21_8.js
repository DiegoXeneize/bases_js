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

suma(5, 6)
    .then((resultadoSuma) => {
        console.log("El resultado es: " + resultadoSuma);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });

console.log("Fin del programa");