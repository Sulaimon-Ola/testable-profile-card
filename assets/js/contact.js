// Select all relevant elements by their data-testid attributes
const form = document.querySelector("form");
const nameInput = document.querySelector("[data-testid='test-contact-name']");
const emailInput = document.querySelector("[data-testid='test-contact-email']");
const subjectInput = document.querySelector("[data-testid='test-contact-subject']");
const messageInput = document.querySelector("[data-testid='test-contact-message']");
const successMessage = document.querySelector("[data-testid='test-contact-success']");

// Helper function to show error message
function showError(input, message, fieldName) {
  let errorEl = document.querySelector(`[data-testid='test-contact-error-${fieldName}']`);
  if (!errorEl) {
    errorEl = document.createElement("p");
    errorEl.classList.add("error-message");
    errorEl.setAttribute("data-testid", `test-contact-error-${fieldName}`);
    errorEl.id = `error-${fieldName}`;
    input.insertAdjacentElement("afterend", errorEl);
  }

  input.setAttribute("aria-describedby", errorEl.id);
  errorEl.textContent = message;
}

// Helper function to clear error
function clearError(fieldName) {
  const errorEl = document.querySelector(`[data-testid='test-contact-error-${fieldName}']`);
  if (errorEl) errorEl.textContent = "";
}

// Email validation function
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Validate individual field
function validateField(input, fieldName) {
  const value = input.value.trim();
  clearError(fieldName);

  switch (fieldName) {
    case "name":
      if (value === "") {
        showError(input, "Full name is required.", fieldName);
        return false;
      }
      break;

    case "email":
      if (value === "") {
        showError(input, "Email is required.", fieldName);
        return false;
      } else if (!isValidEmail(value)) {
        showError(input, "Enter a valid email (e.g. name@example.com).", fieldName);
        return false;
      }
      break;

    case "subject":
      if (value === "") {
        showError(input, "Subject is required.", fieldName);
        return false;
      }
      break;

    case "message":
      if (value === "") {
        showError(input, "Message is required.", fieldName);
        return false;
      } else if (value.length < 10) {
        showError(input, "Message must be at least 10 characters.", fieldName);
        return false;
      }
      break;
  }
  return true;
}

// Real-time validation event listeners
[nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
  const fieldName = input.dataset.testid.split("-")[2]; // extracts name, email, etc.
  input.addEventListener("input", () => validateField(input, fieldName));
});

// Form submission
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid =
    validateField(nameInput, "name") &
    validateField(emailInput, "email") &
    validateField(subjectInput, "subject") &
    validateField(messageInput, "message");

  successMessage.textContent = "";
  successMessage.style.display = "none";

  if (isValid) {
    form.reset();
    successMessage.textContent = "✅ Thank you! Your message has been successfully sent.";
    successMessage.style.display = "block";
  }
});
