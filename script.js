document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  const message = (data.get("message") || "").toString().trim();

  if (!name || !phone || !message) {
    formNote.style.color = "#ff8a8a";
    formNote.textContent = "Խնդրում ենք լրացնել պարտադիր դաշտերը։";
    return;
  }

  const subject = encodeURIComponent(`Հարցում կայքից՝ ${name}`);
  const body = encodeURIComponent(
    `Անուն: ${name}\nՀեռախոս: ${phone}\nԷլ. փոստ: ${data.get("email") || "—"}\n\nՀաղորդագրություն:\n${message}`
  );
  window.location.href = `mailto:abak500@yandex.ru?subject=${subject}&body=${body}`;

  formNote.style.color = "";
  formNote.textContent = "Շնորհակալություն, Ձեր փոստային ծրագիրը կբացվի՝ հարցումը ուղարկելու համար։";
  form.reset();
});
