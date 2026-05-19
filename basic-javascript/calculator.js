let num1 = 'B';
let num2 = 'A';
let result;
if(isNaN(num1) && isNaN(num2)){ //check is  number ?
    result = "ห้ามหารด้วย 0 ";
}
else{
    result = num1 / num2;
}
console.log(result);