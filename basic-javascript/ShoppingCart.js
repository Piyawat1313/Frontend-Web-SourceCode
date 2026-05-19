let products = [
    { name: "Laptop", stock: 15 },
    { name: "Keyboard", stock: 5 },
    { name: "Monitor", stock: 20 },
    { name: "Mouse", stock: 3 }
];
let st2 = products.filter(products => products.stock < 10);
console.log(st2);