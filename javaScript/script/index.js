// const arrayObject=[
//     'potato',30,3,true
// ];
// console.log(arrayObject[0]);
// console.log(arrayObject[3]);

const productObjInfo =
{
    productName: 'potato',
    productPrice: 30,
    productQuantity: 3,
    productAbailabe: true
}
const productObjInfo2 =
{
    productName: 'alo',
    productPrice: 30,
    productQuantity: 3,
    productAbailabe: true
}
const productObjInfo3 =
{
    productName: 'onion',
    productPrice: 30,
    productQuantity: 3,
    productAbailabe: true
}


function showProductInformation(reciveFromObject,productArgument='Default value') {

return `${productArgument} product name is :${reciveFromObject.productName} product weight is : ${reciveFromObject.productPrice} product quntity is : ${reciveFromObject.productQuantity} product ableable :${reciveFromObject.productAbailabe}`;


}
// showProductInformation(productObjInfo);
// showProductInformation(productObjInfo2);

const recive =showProductInformation(productObjInfo3 ,'productArgument1');
const recive2 =showProductInformation(productObjInfo2);
const recive3 =showProductInformation(productObjInfo,'productArgument3');
console.log(recive);
console.log(recive2);
console.log(recive3);


