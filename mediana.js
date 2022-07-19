
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
    }



function calcularMediana(lista) {
    const ordernarLista = lista.sort((a,b)=>a-b);
    console.log(ordernarLista);
    
    let mediana;
    const mitadLista = parseInt(ordernarLista.length / 2);
 
    if(esPar(lista.length) ) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2
        ]);
    
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;

}

function esPar(numerito) {
if (numerito % 2 === 0) {
    return true;
} else {
    return false;
}
}


