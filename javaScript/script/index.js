const productPrice = 70;

let freeShipping = false;
let handPicked = false;

//condition ? trueOutput : falseOUtput 

freeShipping = productPrice >= 100 ? true : false
console.log(freeShipping);

handPicked = productPrice >= 60 && productPrice < 100 ? true : false;
console.log(handPicked)

// ! Here is important note
true && false
false
true || false
true
true && false
false
true || false
true