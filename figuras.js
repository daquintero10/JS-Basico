// ------------------
//Codigo del cuadrado
// ------------------

console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");

function areaCuadrado(lado){
    return lado*lado;
}
// console.log("El area del cuadrado mide: " + areaCuadrado + " cms cuadrados");
console.groupEnd();

// ------------------
//Codigo del triangulo
// ------------------

console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;
// console.log("El lado 1 del triangulo mide " + ladoTriangulo1 + " cms, el lado 2 mide " + ladoTriangulo2 + ", su base " + baseTriangulo + " cms.");
// console.log("La altura del triangulo es de " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base){
    var result = lado1 + lado2 + base;
    return result;
}

function alturaTriangulo(lado1, lado2, base){
    if(lado1 != lado2){
        console.log("Los lados a y b no son iguales");
    }
    else{
        var altura = Math.sqrt((lado2**2)-((base/2)**2));
        return altura;
    }
}
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");

function areaTriangulo(lado1, lado2, base){
    return (base * alturaTriangulo(lado1, lado2, base)) /2;
}
// console.log("El area del triangulo mide: " + areaTriangulo + " cms cuadrados");
console.groupEnd();

// ------------------
//Codigo del circulo
// ------------------

console.group("Circulos");
// const radioCirculo = 4;
// const diametroCirculo = radioCirculo*2;
const pi = Math.PI;

// console.log("El radio del circulo es " + radioCirculo);

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    return diametroCirculo(radio)*pi;
}
// console.log("El perimetro (Circunferencia) del circulo mide: " + perimetroCirculo + " cms");

function areaCirculo(radio){
    return (radio*radio)*pi;
}
// console.log("El area del circulo mide: " + areaCirculo + " cms cuadrados");
console.groupEnd();


//Interactuar con HTML
function calcularPerimetroCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value= input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value= input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1T= document.getElementById("lado1T");
    const lado2T= document.getElementById("lado2T");
    const baseT= document.getElementById("baseT");
    const vlado1 = Number(lado1T.value);
    const vlado2 = Number(lado2T.value);
    const vbase = Number(baseT.value);
    const perimetro = perimetroTriangulo(vlado1, vlado2, vbase);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const lado1T= document.getElementById("lado1T");
    const lado2T= document.getElementById("lado2T");
    const baseT= document.getElementById("baseT");
    const vlado1 = Number(lado1T.value);
    const vlado2 = Number(lado2T.value);
    const vbase = Number(baseT.value);
    const area = areaTriangulo(vlado1, vlado2, vbase);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}