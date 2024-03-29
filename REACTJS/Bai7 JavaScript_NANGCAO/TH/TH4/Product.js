var Product = /** @class */ (function () {
    function Product(name, price, amount) {
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
    Product.prototype.addProduct = function (extraQuantity) {
        this.amount += extraQuantity;
    };
    return Product;
}());
var Customer = /** @class */ (function () {
    function Customer(name, quantityOfProduct) {
        this.name = name;
        this.quantityOfProduct = quantityOfProduct;
    }
    Customer.prototype.buyProduct = function (Product, quantity) {
        if (Product.amount >= quantity) {
            this.quantityOfProduct += quantity;
            Product.amount -= quantity;
        }
        else {
            console.log("Not enough product");
            return;
        }
    };
    return Customer;
}());
var shirt = new Product('shirt', 300000, 20);
shirt.addProduct(10);
console.log(shirt.amount, 'Amount product');
var customer1 = new Customer('customer1', 0);
customer1.buyProduct(shirt, 4);
console.log(customer1.quantityOfProduct, 'Quantity of product customer');
console.log(shirt.amount, 'Amount product after customer buy');
