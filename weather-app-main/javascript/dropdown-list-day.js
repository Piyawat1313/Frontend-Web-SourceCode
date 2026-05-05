document.addEventListener("DOMContentLoaded", () => {
  const dayBtn = document.getElementById("daySelectBtn");
  const dayMenu = document.getElementById("dayDropdownMenu");

  //คลิกปุ่มเปิด/ปิดเมนู
  dayBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = dayMenu.style.display === "block";
    dayMenu.style.display = isVisible ? "none" : "block";
  });

  //คลิกเลือกวันในรายการ
  dayMenu.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", function () {
      const selectedDay = this.getAttribute("data-day");

      // เปลี่ยนข้อความบนปุ่ม
      dayBtn.innerHTML = `${selectedDay} <img src="/assets/images/icon-dropdown.svg" alt="Dropdown">`;

      //ปิดเมนู
      dayMenu.style.display = "none";

      //เพิ่มฟังก์ชั่นดึงข้อมูลพยากรณ์อากาศได้ (เพิ่มภายหลังได้)
      console.log("Selected Day:", selectedDay);
    });
  });

  //คลิกข้างนอกให้ปิดเมนู
  document.addEventListener("click", () => {
    dayMenu.style.display = "none";
  });
});
