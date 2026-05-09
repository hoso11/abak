document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("cta-btn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
