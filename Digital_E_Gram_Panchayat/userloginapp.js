// Get the login form element
const loginForm = document.getElementById("login-form");

// Function to check if the user is registered
function isUserRegistered(email, password) {
  // Check if the user data is present in Local Storage
  const userData = JSON.parse(localStorage.getItem("userData"));

  return userData && userData.email === email && userData.password === password;
}

// Handle form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the form values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if the user is registered
  if (!isUserRegistered(email, password)) {
    // Show an alert message if the user is not registered or login credentials are incorrect
    alert("You are not registered. Please register to access the application.");
    window.location.href="UserRegistration.html"
    return;
  }

  // Redirect to the user home page (user dashboard) - We will implement this later
  // For now, redirect to a placeholder page
  window.location.href = "UserHome.html";
});
// ... (Previous code) ...

// Function to display the list of services
function displayServices(services) {
  const servicesList = document.getElementById("services-list");

  // Clear any previous content
  servicesList.innerHTML = "/home/mahesh/twilearn/Digital_E_Gram_Panchayat/adminlistofservice.html";

  // Display each service in the list
  services.forEach((service) => {
    const serviceCard = document.createElement("div");
    serviceCard.className = "service-card";

    const serviceName = document.createElement("h3");
    serviceName.textContent = service.name;

    const serviceDescription = document.createElement("p");
    serviceDescription.textContent = service.description;

    serviceCard.appendChild(serviceName);
    serviceCard.appendChild(serviceDescription);

    servicesList.appendChild(serviceCard);
  });
}

// Function to handle the search form submission
function handleSearchForm(event) {
  event.preventDefault();

  // Get the search input value
  const searchInput = document.getElementById("service-name").value.toLowerCase();

  // Filter services based on the search input
  const filteredServices = servicesData.filter((service) =>
    service.name.toLowerCase().includes(searchInput)
  );

  // Display the filtered services
  displayServices(filteredServices);
}

// Add event listener to the search form
const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", handleSearchForm);

// Initial display of all services when the page loads
document.addEventListener("DOMContentLoaded", () => {
  displayServices(servicesData);
});
