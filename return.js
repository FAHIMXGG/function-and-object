// function add(num1, num2) {
//     console.log(mum1, num2);
//     var sum = num1+num2;
//     return  sum;
// }

function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}

var total = add(44, 65);
console.log("total", total);

//

function bringSingara(money){
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var totalTk = 300;
var singaras = bringSingara(totalTk);
console.log( "total", singaras);