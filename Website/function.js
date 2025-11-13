const arrayImg = [
    "/image/กอดด้วยกัน.jpg",
    "/image/คู่.jpg",
    "/image/ชมพู.jpg",
    "/image/ร้านอาหารที่ชอบ.jpg",
    "/image/วันแรก.jpg",
    "/image/วิทย์.jpg",
    "/image/1.jpg"
];
const caption = [
    "นี่คือความทรงจำของเรานะคร้าบบ",
    "รูปนี้ที่หนูไปดูหนังกับพี่ครั้งแรก",
    "รูปนี้น่ารักมากๆเลยนะ",
    "ไปกินข้าวด้วยกัน",
    "ตอนที่หนูตอบตกลงพี่ที่จะเป็นแฟน",
    "ทำงานวันวิทย์ด้วยกัน",
    "ไปขึ้นชิงช้าด้วยกัน แต่พี่กลัวความสูง5555+++",
];
const string = document.getElementById("caption");
const imgOld = document.getElementById("img");
const change = document.getElementById("change");
const returns = document.getElementById("return");
let current = arrayImg.findIndex(path => imgOld.src.endsWith(path));
if(current == -1){
    current = 0;
}
function changeImage(){
    current++;
    if(current >= arrayImg.length){
        current = 0;
    }
    imgOld.src = arrayImg[current];
    string.innerHTML = caption[current];
}
function returnImage(){
    current--;
    if(current < 0){
        current = 0;
    }
    imgOld.src = arrayImg[current];
    string.innerHTML = caption[current];
}
if(returns){
    returns.onclick = returnImage;
}

function changeGif(){
    const imgs = document.getElementById("kr");
    if(imgs){
        imgs.src = "/image/1_QFRce-OnlybDjvWhMX8Y-w.webp";
        document.getElementById("heading2").textContent = "Thank-You";
    }
    else{
        console.error("no Pictures");
    }
}