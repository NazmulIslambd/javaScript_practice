
const productInformation2 = {
    productName: 'banna',
    price: 20,
    weight: 10
}

const productInformation3= {
    productName: 'onion',
    price: 40,
    weight: 100
}
const productInformation1 = {
    productName: 'kola',
    price: 40,
    weight: 100
}

function showProduct(product) {
    
    return `Product Name ${product.productName} price is ${product.price} weight is ${product.weight}`;
}
const recived = showProduct(productInformation1);

console.log(recived);