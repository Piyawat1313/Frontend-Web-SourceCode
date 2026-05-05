


document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search input");
  const statusBar = document.getElementById("searchStatus");
  const searchContainer = document.querySelector(".search");

  searchInput.addEventListener("input", (e) => {
    if (e.target.value.length > 0) {
      //โชว๋สถานะกำลังค้นหา
      statusBar.style.display = "flex";
      searchContainer.classList.add("is-searching");
    } else {
      //ซ่อนเมื่อไม่มีตัวอักษร
      statusBar.style.display = "none";
      searchContainer.classList.remove("is-searching");
    }
  });
});
