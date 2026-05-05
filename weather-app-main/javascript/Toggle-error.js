

//สลับหน้าจอ test หน้า error
function toggleErrorState(isError){
    const mainLayout = document.querySelector('.main-layout');
    const heroHeader = document.querySelector('.hero-header');
    const errorState = document.getElementById('errorState');

    if(isError){
        //ซ่อนเนื้อหาหลักและโชว์ Error
        if(mainLayout) mainLayout.style.display = 'none';
        if(heroHeader) heroHeader.style.display = 'none';
        if(errorState) errorState.style.display = 'flex';
    }
    else{
        //โชว์เนื้อหาปกติ
        if(mainLayout) mainLayout.style.display = 'grid';
        if(heroHeader) heroHeader.style.display = 'block';
        if(errorState) errorState.style.display = 'none';
    }
}

//ทดสอบเรียกใช้ ถ้าไม่ใช้ให้ comment ไว้
//toggleErrorState(true);

//เมื่อกดปุ่ม retry ให้กลับมาหน้าปกติ
document.getElementById('retryBtn')?.addEventListener('click', () => {
    toggleErrorState(false);
});
