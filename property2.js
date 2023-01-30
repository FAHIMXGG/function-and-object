var shoppingCart = {
    book: 4,
    sunglass: 4,
    shirts: 4,
    mouse: 4,
    pen: 55,
    keyboard: 3
}
var propertyName = 'book';
var propertyValue = shoppingCart[propertyName];
var propertis = Object.keys(shoppingCart);
var propertisValue = Object.values(shoppingCart);
console.log(propertyName, propertyValue);

//value changes
shoppingCart.mouse = 15;
console.log(shoppingCart);
// 
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName]  = 55;
console.log(shoppingCart);