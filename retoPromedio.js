function mediaCuadratica (array) {
    const cuadrados = array.map((num)=> Math.pow(num,2));
    const sumar = cuadrados.reduce(function(prev, current){
        return prev + current;
    });
    return Math.sqrt(sumar / array.length);
}
// const rootMeanSquare = (array) => {
//     let squares = array.map(x => Math.pow(x, 2))
//     const sum = squares.reduce((prev, current) => prev + current)
//     return Math.sqrt(sum / array.length)
// }