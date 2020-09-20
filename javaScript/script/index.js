const productPrice = 9;

let freeShipping = false;
let handPicked = false;

if (productPrice >= 100) {
    freeShipping = true;
    handPicked = false
} else if (productPrice >= 60) {
    freeShipping = false;
    handPicked = true
}
else {
    freeShipping = false;
    handPicked = true;
}
console.log(freeShipping)
console.log(handPicked)