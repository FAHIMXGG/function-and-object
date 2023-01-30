//arry vs obj(2nd one array)
var shoppingCart = {
    book: 4,
    sunglass: 4,
    shirts: 4,
    mouse: 4,
    pen: 55,
    keyboard: 3,
    shoes: 44,

}

var shoppingItems= ['books', 'sunglass', 'pen', 'mouse'];
//
const keys = Object.keys(shoppingCart);
console.log(keys);
const value = Object.values(shoppingCart);
console.log(value);

for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertisValue = shoppingCart[propertyName];
    console.log(propertyName, propertisValue);
}
//for in loop
for(var propertyName in shoppingCart){
    const value  = shoppingCart[propertyName];
    console.log(propertyName, value);
}