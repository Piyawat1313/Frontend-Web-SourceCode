const person = {
    name: "Biw",
    weight: 70,
    height: 1.75
}
let bmi = parseFloat(person.weight / (person.height * person.height));
console.log(bmi.toFixed(2));