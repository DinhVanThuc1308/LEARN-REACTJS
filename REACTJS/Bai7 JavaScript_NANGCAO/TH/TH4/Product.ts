class Product{
    name: string;
    price: number;
    amount: number;
    constructor(name: string, price: number, amount: number){
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    addProduct(extraQuantity: number){
        this.amount += extraQuantity;
    }
}

class Customer{
    name: string;
    quantityOfProduct: number;
    constructor(name: string, quantityOfProduct: number){
        this.name = name;
        this.quantityOfProduct = quantityOfProduct;
    }
    buyProduct(Product: Product, quantity: number){
        if(Product.amount >= quantity){
            this.quantityOfProduct += quantity;
            Product.amount -= quantity;
        }else{
            console.log("Not enough product");
            return
        }
    }
}
let shirt = new Product('shirt', 300000, 20);
shirt.addProduct(10);
console.log(shirt.amount, 'Amount product');

let customer1 = new Customer('customer1', 0);
customer1.buyProduct(shirt, 4);
console.log(customer1.quantityOfProduct, 'Quantity of product customer');
console.log(shirt.amount, 'Amount product after customer buy');