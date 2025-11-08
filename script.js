// ==========================
// 🌞 Part 1: Event Handling
// ==========================

// Toggle dark/light theme
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "🌚 Toggle Light Mode"
    : "🌞 Toggle Dark Mode";
});

// ==========================
// 🎮 Part 2: Interactive Features
// ==========================

// Counter
let count = 0;
const counterValue = document.getElementById("counterValue");
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  counterValue.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  counterValue.textContent = count;
});

// FAQ accordion
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// ==========================
// 📋 Part 3: Form Validation
// ==========================

const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default submission
  let isValid = true;

  // Reset errors
  document.querySelectorAll(".error").forEach((err) => (err.textContent = ""));
  document.getElementById("formSuccess").classList.add("hidden");

  // Name validation
  if (nameInput.value.trim().length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    isValid = false;
  }

  // Email validation (regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  // Password validation (at least 6 chars + number)
  const passPattern = /^(?=.*\d).{6,}$/;
  if (!passPattern.test(passwordInput.value)) {
    document.getElementById("passwordError").textContent =
      "Password must be 6+ characters and include a number.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("formSuccess").classList.remove("hidden");
    form.reset();
  }
});
