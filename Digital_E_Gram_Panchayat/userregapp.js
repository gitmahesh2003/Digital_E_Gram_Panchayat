// Get the registration form element
const registrationForm = document.getElementById("registration-form");

// Get the confirm password input element and the password match message
const confirmPasswordInput = document.getElementById("confirm-password");
const passwordMatchMessage = document.getElementById("password-match-message");

// Function to show the "Passwords do not match" message
function showPasswordMatchMessage() {
  passwordMatchMessage.classList.remove("hidden");
}

// Function to hide the "Passwords do not match" message
function hidePasswordMatchMessage() {
  passwordMatchMessage.classList.add("hidden");
}

// Handle form submission
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const password = document.getElementById("password").value;
  const confirmPassword = confirmPasswordInput.value;

  // Check if the passwords match
  if (password !== confirmPassword) {
    // Display the password match message
    showPasswordMatchMessage();
    return;
  }

  // Hide the password match message if passwords match
  hidePasswordMatchMessage();

  // Save the user data in Local Storage or backend (For now, let's use Local Storage)
  const userData = {
    username,
    email,
    phone,
    address,
    password,
  };

  // Save user data to Local Storage (you may replace this with a backend API call)
  localStorage.setItem("userData", JSON.stringify(userData));

  // Redirect to the login page
  window.location.href = "Userlogin.html";
});

// Hide the password match message when the confirm password input changes
confirmPasswordInput.addEventListener("input", hidePasswordMatchMessage);
