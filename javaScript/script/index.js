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

//object data distucturing 

// const {productName,productPrice}=productObjInfo3;
// console.log(productName);


function showProductInformation(reciveFromObject,productArgument='Default value') {
    //here is data distucturing 
   const {productName,productPrice,productQuantity,productAbailabe} =  reciveFromObject;
//when we deploy distucturing don't need keep name parameter for show the result.
return `${productArgument} product name is : ${productName} product weight is : ${productPrice} product quntity is : ${productQuantity} product ableable :${productAbailabe}`;


}
// showProductInformation(productObjInfo);
// showProductInformation(productObjInfo2);

const recive1 =showProductInformation(productObjInfo3 ,'productArgument1');
const recive2 =showProductInformation(productObjInfo2);
const recive3 =showProductInformation(productObjInfo,'productArgument3');
console.log(recive1);
console.log(recive2);
console.log(recive3);


//here is array distucturing
const productArray= ['followe',30,3,true];
const[name,price,quntity,abailalbe]=productArray;
console.log(name);

//for loop apply here

const student=[
    {
        name:'Nazmul',
        id:100,
        department:"eee"
    },
    {
        name:'Akbar',
        id:101,
        department:'eee'
    },
    {
        name:'ali',
        id:102,
        department:'mp'
    },
    {
        name:'Abdullah',
        id:103,
        department:'cse'
    },
];



function studentInformation(student){
    let singleStudent='';
    
    for (let index = 0; index < student.length; index++) {
        
        singleStudent += `
        name -${student[index].name}
        id -${student[index].id}
        depatment -${student[index].department}

        ` ;
        
    }
    return singleStudent;
    
};

const reciveStudentInfo1=studentInformation(student);

console.log(reciveStudentInfo1);

let num1=1;
num1+=1;
console.log(num1)

