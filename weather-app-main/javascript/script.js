import { updateWeatherUI, weatherData  } from './updateWeather.js'  ;


document.addEventListener('DOMContentLoaded', () => {
    const unitsDropdown = document.getElementById('unitsDropdown');
    const unitsBTN = document.getElementById('unitsBTN');

    // Toggle Dropdown
    unitsBTN.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const isVisible = unitsDropdown.style.display === 'block';
        unitsDropdown.style.display = isVisible ? 'none' : 'block';
    });

    //ปิด dropdown เมื่อคลิกที่อื่น
    document.addEventListener('click', () => {
        unitsDropdown.style.display = 'none';
    });


    //function สลับหน่วย
    const options = document.querySelectorAll('.units-dropdown .option');

    options.forEach(options => {
        options.addEventListener('click', function(){
            const type = this.dataset.type; //temp or wind
            const value = this.dataset.value; //metric or imperial

            //ปรับ UI ย้ายเครื่องหมายถูก
            const parent = this.parentElement;
            parent.querySelectorAll('.option').forEach(opt => opt.classList.remove('active'));
            parent.querySelectorAll('.option span').forEach(span => span.remove());
            this.classList.add('active');
            this.innerHTML += ' <span>✓</span>';

            //update แสดงผลหน้าเว็บ
            updateWeatherUI(type, value);
        });
    });
});