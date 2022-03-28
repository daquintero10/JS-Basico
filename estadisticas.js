const lista1 = [
    100,
    200,
    300,
    500
];



function calcularMedia(lista){
    // let sumaLista = 0;
    // for(var i=0; i< lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado=0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista/lista.length;
    return promedio;
}

function calcularMediana(lista){
    lista.sort((a, b) => a -b);
    console.log(lista);
    const mitadLista = lista.length/2;
    var x = parseInt(mitadLista);
    var mediana;
    if(lista.length%2 == 0){
        var mediana= calcularMedia([lista[x-1],lista[x]]);
        // console.log(mediana);
    }else{
        mediana = lista[x];
    }
    return mediana;
}

// Lista de prueba [1,1,2,3,4,3,2,2,2,2,3,1,2]

function calcularModa(lista){
    const listadoCount = {};
    lista.map(
        function(elemento){
            if(listadoCount[elemento]){
                listadoCount[elemento] += 1;
            }else{
                listadoCount[elemento]=1;
            }         
        }
    );
    console.log(listadoCount);
    const listaArray = Object.entries(listadoCount).sort(
        function (valorAcumulado, nuevoValor){
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    console.log(listaArray);
    var moda=listaArray[listaArray.length-1];

    return moda;
}

//Objetos de prueba
/* 
[
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
]
*/

function calcularPromedioPonderado(lista){
    const notesWithCredit = lista.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    });
    //console.log(notesWithCredit);

    const sumOfNotesWithCredit = notesWithCredit.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    console.log(sumOfNotesWithCredit);

    const credits = lista.map(function (noteObject) {
        return noteObject.credit;
    });
    
    const sumOfCredits = credits.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );

    const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;

    return promedioPonderadoNotasConCreditos;

}