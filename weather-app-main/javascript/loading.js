async function triggleSearchLoading() {
    const mainLayout = document.querySelector('.main-layout');

    //เก็บเนื้อหาเดิมไว้ก่อน
    const originalContent = mainLayout.innerHTML;

    try {
         //ดึงไฟล์ Loading.html มาแสดง
         const response = await fetch('loading.html');
         const loadingHTML = await response.text();
         mainLayout.innerHTML = loadingHTML;

         //loading เสร็จ แสดง No result
         await wait(2000);
         showNoResult(mainLayout);

         //ค้าง No result 3 วิ
         await wait(3000);
         mainLayout.innerHTML = originalContent;

    } catch (error) {
        console.log("ไม่สามารถโหลดหน้าเว็บ Loading:  " , error);

        //ถ้าดึง loading.html ไม่ได้ ข้ามไป No result ได้เลย
        showNoResult(mainLayout);
        await wait(3000);
        mainLayout.innerHTML = originalContent;
    }
}

// สร้าง No result UI
function showNoResult(container){
    container.innerHTML = `
        <div class="no-result-state">
            <p class="no-result-state-text"> No search result found! </p>
        </div>`;
}


// set time out
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}



//ผุกฟังก์ชั่นกับปุ่ม search
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.querySelector('.search button');
    if(searchBtn){
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault(); //ป้องกันการโหลดหน้าเว็บ
            triggleSearchLoading();
        });
    }
});




