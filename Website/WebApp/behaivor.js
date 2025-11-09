function hideImg() {
    document.getElementById("mypic").style.display = "none";
}
function showImg() {
    document.getElementById("mypic").style.display = "block";
}

function changeSlogan() {
    document.getElementById("slogan").innerHTML = "หวานเจี๊ยบบบบบบบบบบ";
}
function showWindows() {
    window.alert("welcome to website")
}
 function updateClock() {
        let now = new Date();
        document.getElementById('dateText').innerHTML = now;
        document.getElementById('timeOnly').innerHTML = now.toLocaleTimeString();
    }
    setInterval(updateClock, 1000);
    updateClock();
    
function changeCurrency() {
    let baht = prompt("กรอกค่าเงินบาท");
    let usd = baht * 0.031;
    document.getElementById("usd").innerHTML = "เงิน " + baht + " บาท = " + usd + " ดอลลาร์";
}
