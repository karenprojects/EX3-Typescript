function stringPolidramo (str: string): boolean{
    const cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

console.log(stringPolidramo('Ame a ema'));
console.log(stringPolidramo('A grama é amarga')); 

