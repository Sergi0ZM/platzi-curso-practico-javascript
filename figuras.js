// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(lado) {
    return lado * lado;
} 
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2")
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triángulo miden: "
//      + ladoTriangulo1 
//      + "cm, "
//      + ladoTriangulo2 
//      + "cm, " 
//      + baseTriangulo 
//      + "cm"
// );
// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo (base, altura) {
    return (base * altura) / 2;
}
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();


// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}


console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputBase");
    const value = Number(input.value);
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const perimetro = perimetroTriangulo(value, value1, value2);
    alert(perimetro);
}
function calcularAreaTriangulo() {
    const input2 = document.getElementById("InputBase");
    const input3 = document.getElementById("InputAltura");
    const value = Number(input2.value);
    const value1 = Number(input3.value);

    const area = areaTriangulo(value, value1);
    alert(area);
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;


    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

// Reto tríangulo isósceles
function isosceles(lado1, lado2, base) {
    if(lado1 === lado2 && lado1 != base){
        alert("Es isósceles");
        const altura =  Math.sqrt(lado1**2 - base**2/4);
    console.log(altura);
    }else{
        alert("No es isóseles");
    }

}
