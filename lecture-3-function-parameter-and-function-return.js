// javascript function input parameter
function bringSingara(taka) {
    console.log('singarar jonno dise', taka); // showing string + variabe by , we can also show multiple string by using +
    console.log('mama singara den.');
    var singaraPrice = 5;
    var singaraQuantity = taka / singaraPrice;
    return singaraQuantity;

}

var singara = bringSingara(100);
console.log('mama: ei nao', singara, ' ti singara.');