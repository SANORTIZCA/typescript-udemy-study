import {Product, taxCalculation} from './06-function-destructuring';

const shoopingCart: Product[] = [
    {
        descriptions: "Nokia",
        price: 100,
    },
    {
        descriptions: "iPad",
        price: 150
    }
];

//tax = 0.15%
const [total, tax ] = taxCalculation({
    tax: 0.15,
    products: shoopingCart
});

console.log("Total:", total);
console.log("Tax: ", tax);