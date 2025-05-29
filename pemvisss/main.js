const clickSound = document.getElementById("soundClick");
const bgMusic = document.getElementById("bgMusic");

// Play background music once halaman dibuka (user interaction dibutuhkan)
document.body.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
}, { once: true }); // hanya sekali, karena autoplay butuh klik pertama

// Putar suara klik saat pindah form
function nextForm(no) {
  clickSound.play(); // mainkan suara klik
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));
  document.getElementById(`form${no}`).classList.add("active");
  if (no === 3) updateKasus();
}
document.body.addEventListener("click", () => {
  bgMusic.play();
}, { once: true }); // hanya perlu 1 klik pertama
clickSound.volume = 1.0;
