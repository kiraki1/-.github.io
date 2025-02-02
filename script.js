document.getElementById("launch").addEventListener("click", function() {
    createKratong();
});

function createKratong() {
    const kratong = document.createElement("img");
    kratong.src = "kratong.png"; // ใช้ภาพกระทงของคุณ
    kratong.classList.add("kratong");

    // ตั้งค่าขนาดแบบสุ่ม
    let size = Math.random() * 30 + 40; // ขนาดระหว่าง 40px - 70px
    kratong.style.width = size + "px";

    // ตั้งค่าตำแหน่งเริ่มต้นแบบสุ่ม
    let posX = Math.random() * window.innerWidth;
    kratong.style.left = posX + "px";

    // เพิ่มกระทงลงในหน้าเว็บ
    document.getElementById("background").appendChild(kratong);

    // ทำให้กระทงลอยขึ้น
    setTimeout(() => {
        kratong.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 20 - 10}deg)`;
    }, 100);

    // ลบกระทงเมื่อพ้นหน้าจอ
    setTimeout(() => {
        kratong.remove();
    }, 5000);
}
