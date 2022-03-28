const soloSalariosCol = colombia.map(
  function (persona){
      return persona.salary;
  }  
);

const salariosColSort = soloSalariosCol.sort(
    function(a, b){
        return a - b;
    }
);

function esPar(numero){
    return (numero%2 == 0);
}

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

const medianaGeneralCol = calcularMediana(salariosColSort);
const copiaSalariosSort = salariosColSort;


const spliceStart = parseInt(salariosColSort.length*0.9);
const spliceCount = salariosColSort.length - spliceStart;
const salariosTop10Col = salariosColSort.splice(spliceStart, spliceCount);

const medianaTop10Col = calcularMediana(salariosTop10Col);


/*
function medianaSalarios(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const persona1 = lista[mitad-1];
        const persona2 = lista[mitad];
        const mediana = calcularMediana(persona1, persona2);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
*/
