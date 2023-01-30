var shoppingCart = {
    book: 4,
    sunglass: 4,
    shirts: 4,
    mouse: 4,
    pen: 55,
    keyboard: 3
}
//whe I know property name
var penCount = shoppingCart.pen
console.log(shoppingCart);
console.log("pen", penCount);
//
penCount2 = shoppingCart ['pen']
console.log(penCount2);

//keys(all info property name)
var propertis = Object.keys(shoppingCart);
console.log(propertis);
// value property values
var propertisValue = Object.values(shoppingCart);
console.log(propertisValue);

//

