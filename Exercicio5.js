function stringPolidramo(str) {
    var cleanStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    var reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}
console.log(stringPolidramo('Ame a ema'));
console.log(stringPolidramo('A grama é amarga'));
console.log(stringPolidramo('A sacada da casa'));
