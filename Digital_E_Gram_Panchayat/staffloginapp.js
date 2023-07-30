// Function to handle the form submission
function login(event) {
    event.preventDefault();
  
    // Get the form data
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Replace this with your authentication logic
    // For example: Check the credentials against a server-side database or API
    if (username === "staff1" && password === "password1") {
      alert("Login successful!");
      // Redirect to the staff dashboard after successful login
      window.location.href = "StaffHome.html";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  }
  
  // Add event listener for form submission
  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", login);
  });
  