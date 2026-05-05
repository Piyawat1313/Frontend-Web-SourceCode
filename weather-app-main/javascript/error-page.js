
const mainLayout = document.querySelector('.main-layout');
const heroHeader = document.querySelector('.hero-header');
const errorState = document.getElementById('errorState');
const retryBtn = document.getElementById('retryBtn');

async function fetchWeatherData() {
    try{
        //จำลองการดึงข้อมูล API
        const response = await fetch('YOUR_API_URL');
        if(!response.ok) throw new Error('API ERROR');

        const data = await response.json();

        //ถ้าสำเร็จ ซ่อน Error โชว์เนื้อหาหลัก
        errorState.style.display = 'none';
        mainLayout.style.display = 'grid';
        heroHeader.style.display = 'block';
    }catch(error){

        //ถ้าไม่สำเร็จโชวหน้า Error
        console.error(error);
        errorState.style.display = 'flex';
        mainLayout.style.display = 'none';
        heroHeader.style.display = 'none';
    }
}

//กดปุ่ม retry ดึงข้อมูลมาใหม่
retryBtn.addEventListener('click', () => {
    fetchWeatherData();
});