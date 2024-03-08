function contarPares(numeros: number[]): number{
    return numeros.filter(num=> num %2 ===0).length;

}
const arrayNumeros =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
console.log(contarPares(arrayNumeros));
