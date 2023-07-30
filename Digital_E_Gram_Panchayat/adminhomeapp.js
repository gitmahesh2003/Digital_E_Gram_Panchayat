// Function to display a welcome message for the admin
function displayWelcomeMessage() {
    const adminName = "Admin"; // Replace with the actual admin's name (you can fetch it from the server/database if available)
  
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = `Welcome, ${adminName}! You are logged in as an admin.`;
    welcomeMessage.classList.add("welcome-message");
  
    const container = document.querySelector(".container");
    container.appendChild(welcomeMessage);
  }
  
  // Call the function to display the welcome message when the admin logs in
  displayWelcomeMessage();
  