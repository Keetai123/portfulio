document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleAbout");
  const moreAbout = document.getElementById("moreAbout");

  toggleBtn.addEventListener("click", () => {
    moreAbout.classList.toggle("show");

    if (moreAbout.classList.contains("show")) {
      toggleBtn.textContent = "ซ่อนข้อมูล";
    } else {
      toggleBtn.textContent = "ดูเพิ่มเติม";
    }
  });

  // Project A
  const toggleProjectA = document.getElementById("toggleProjectA");
  const projectAContent = document.getElementById("projectAContent");

  // Project B
  const toggleProjectB = document.getElementById("toggleProjectB");
  const projectBContent = document.getElementById("projectBContent");

  // Project C
  const toggleProjectC = document.getElementById("toggleProjectC");
  const projectCContent = document.getElementById("projectCContent");

  // Function to hide all project contents
  function hideAllProjects() {
    projectAContent.classList.remove("show");
    projectBContent.classList.remove("show");
    projectCContent.classList.remove("show");
    toggleProjectA.textContent = "ดูรายละเอียด";
    toggleProjectB.textContent = "ดูรายละเอียด";
    toggleProjectC.textContent = "ดูรายละเอียด";
  }

  // Event listeners for each project
  toggleProjectA.addEventListener("click", () => {
    // หากโปรเจกต์ A เปิดอยู่แล้ว ให้ซ่อน
    if (projectAContent.classList.contains("show")) {
      projectAContent.classList.remove("show");
      toggleProjectA.textContent = "ดูรายละเอียด";
    } else {
      hideAllProjects(); // ซ่อนโปรเจกต์อื่น ๆ
      projectAContent.classList.add("show");
      toggleProjectA.textContent = "ซ่อนรายละเอียด";
    }
  });

  toggleProjectB.addEventListener("click", () => {
    // หากโปรเจกต์ B เปิดอยู่แล้ว ให้ซ่อน
    if (projectBContent.classList.contains("show")) {
      projectBContent.classList.remove("show");
      toggleProjectB.textContent = "ดูรายละเอียด";
    } else {
      hideAllProjects(); // ซ่อนโปรเจกต์อื่น ๆ
      projectBContent.classList.add("show");
      toggleProjectB.textContent = "ซ่อนรายละเอียด";
    }
  });

  toggleProjectC.addEventListener("click", () => {
    // หากโปรเจกต์ C เปิดอยู่แล้ว ให้ซ่อน
    if (projectCContent.classList.contains("show")) {
      projectCContent.classList.remove("show");
      toggleProjectC.textContent = "ดูรายละเอียด";
    } else {
      hideAllProjects(); // ซ่อนโปรเจกต์อื่น ๆ
      projectCContent.classList.add("show");
      toggleProjectC.textContent = "ซ่อนรายละเอียด";
    }
  });

  // เปิด Modal เมื่อคลิกที่รูปภาพ
  const projectImages = document.querySelectorAll(".project-image");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  projectImages.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex"; // เปิด modal
      modalImg.src = img.src; // ตั้งค่ารูปใน modal
    });
  });

  // ปิด Modal เมื่อคลิกที่ปุ่มปิด
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"; // ปิด modal
  });

  // ปิด Modal เมื่อคลิกที่พื้นหลัง
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; // ปิด modal
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("showQuoteBtn");
  const quoteEl = document.getElementById("quote");

  btn.addEventListener("click", function () {
    const quote = "เป็นคนธรรมดา ไม่สะดุดตาใคร ส่วนใหญ่สะดุด โต๊ะ ตู้ เตียง เก้าอี้  IG:Save_batteryme";
    
    quoteEl.textContent = quote;
  });
});

