// Get the form element
const adminLoginForm = document.getElementById("admin-login-form");

// Add an event listener to the form for form submission
adminLoginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the values entered by the admin
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  // Here, you can add your validation logic for the username and password.
  // For simplicity, let's assume the admin credentials are hardcoded.
  // Replace 'admin' with the actual admin username and 'password123' with the actual password.
  if (username === "admin" && password === "password123") {
    alert("Login successful!");
    // Perform any actions after successful login, such as redirecting to the admin dashboard.
    window.location.href = "AdminHome.html"; // Replace 'admin-dashboard.html' with the actual URL of the admin dashboard page.
  } else {
    alert("Invalid username or password. Please try again.");
  }
});


