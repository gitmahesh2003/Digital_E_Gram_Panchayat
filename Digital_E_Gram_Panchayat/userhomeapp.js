// Get the username element
const usernameElement = document.getElementById("username");

// Check if the user data is present in Local Storage
const userData = JSON.parse(localStorage.getItem("userData"));

if (userData && userData.username) {
  // Display the username dynamically
  usernameElement.textContent = userData.username;
}
// ... (Previous code) ...
// ... (Previous code) ...

// Get the profile elements
// const profileName = document.getElementById("profile-name");
const profileEmail = document.getElementById("profile-email");
const profilePhone = document.getElementById("profile-phone");
const profileAddress = document.getElementById("profile-address");

// Function to display the user profile
function displayUserProfile() {
  // Check if the user data is present in Local Storage
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
    // Display the user profile details
    // profileName.textContent = userData.name;
    profileEmail.textContent = userData.email;
    profilePhone.textContent = userData.phone;
    profileAddress.textContent = userData.address;
  }
}

// Display the user profile when the page loads
document.addEventListener("DOMContentLoaded", displayUserProfile);

