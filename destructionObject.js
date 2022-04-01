//object property


const userName ="yamini"
const userAge=25

const user ={
    name:userName,
    age:userAge,
    location :"usa"
}

console.log(user)

//Object Destucting

const product ={
    label :" Red Note Book",
    price : 24,
    stock : 210,
    salesPrice: undefined,
    rating : 4.3
}

const {label,price,stock} = product
console.log(product.price);
console.log(product.stock);
console.log(product.label);


