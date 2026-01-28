// reveal animation
const els = document.querySelectorAll(".reveal");

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
});

els.forEach(el => obs.observe(el));

// email protection
const btn = document.getElementById("email-btn");
const out = document.getElementById("email");

const user = "jakub.szydl";
const domain = "gmail.com";

btn.addEventListener("click", () => {
  out.textContent = `${user}@${domain}`;
  out.classList.remove("hidden");
  btn.disabled = true;
});
