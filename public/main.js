// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

reveals.forEach(r => observer.observe(r));

// Email protection
const emailBtn = document.getElementById("email-btn");
const emailOut = document.getElementById("email-output");

// email split & reversed
const user = "jakub.szydl";
const domain = "gmail.com";

emailBtn.addEventListener("click", () => {
  emailOut.textContent = `${user}@${domain}`;
  emailOut.classList.remove("hidden");
  emailBtn.disabled = true;
});
