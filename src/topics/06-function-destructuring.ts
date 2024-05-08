export interface Product{
    descriptions: string;
    price: number;
}

const phone: Product={
    descriptions: "Nokia 1",
    price: 150.0,
}

const tablet: Product = {
    descriptions: "iPad Air",
    price: 250.0,
};

interface TaxCalculationOptions {
    tax: number;
    products: Array<Product>;
}

//SIN DESESTRUCTURAR
/* function taxCalculation(options: TaxCalculationOptions): Array<number> {
  let total = 0;
  options.products.forEach(product) => {
    total += product.price;
  });
  return [total, total * options.tax];
} */

//DESESTRUCTURADO
//function taxCalculation(options: TaxCalculationOptions): [number, number]{
//function taxCalculation({tax, products}: TaxCalculationOptions): [number, number]{
export function taxCalculation(options: TaxCalculationOptions): [number, number]{
    const { tax, products } = options;
    /* DE ESTA MANERA SOLO SE TRAE EL PRIMER PRODUCTO Y LAS PROPIEDADES QUE SE NECESITAN     
    const [firstProduct] = products;
    const { descriptions, price } = firstProduct; */
    let total = 0;
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}

//const shoopingCar: Product[] = [phone, tablet];
const shoopingCar: Array<Product> = [phone, tablet];
const tax:number = 0.15;


//SIN DESESTRUCTURAR
/* const result = taxCalculation({
  products: shoopingCar,
  tax: tax,
}); */

//DESESTRUCTURADO
const [total, taxTotal] = taxCalculation({
  products: shoopingCar,
  tax: tax,
});

console.log('Total:', total);
console.log('Tax: ', taxTotal);
