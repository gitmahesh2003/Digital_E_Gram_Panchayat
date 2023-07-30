// Function to create and append a service item to the list
function appendServiceToList(service) {
    const servicesList = document.getElementById("services-list");
    const serviceItem = document.createElement("li");
    serviceItem.textContent = `Service Name: ${service.name}, Description: ${service.description}, Eligibility: ${service.eligibility}`;
    servicesList.appendChild(serviceItem);
  }
  
  // Function to display the list of services
  function displayServices(services) {
    const servicesList = document.getElementById("services-list");
    servicesList.innerHTML = ""; // Clear any existing content
  
    // Append each service to the list
    services.forEach(service => {
      appendServiceToList(service);
    });
  }
  
  // Function to search for services
  function searchServices() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const storedServices = JSON.parse(localStorage.getItem("services")) || [];
  
    // Filter services based on the search input
    const filteredServices = storedServices.filter(service => {
      const serviceName = service.name.toLowerCase();
      return serviceName.includes(searchInput);
    });
  
    // Display the filtered services
    displayServices(filteredServices);
  }
  
  // Retrieve services from Local Storage
  const storedServices = JSON.parse(localStorage.getItem("services")) || [];
  
  // Display all services initially when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    displayServices(storedServices);
  });
  
  // Add event listener for search button click
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", searchServices);



  // Function to handle applying for a service
function applyForService(service) {
    // Redirect the user to the applyservice.html page with the selected service's information
    const encodedService = encodeURIComponent(JSON.stringify(service));
    window.location.href = `userapplyservice.html?service=${encodeURIComponent(JSON.stringify(service))}`;
  }
  
  // Function to create and append a service item to the list
  function appendServiceToList(service) {
    const servicesList = document.getElementById("services-list");
    const serviceItem = document.createElement("li");
    serviceItem.innerHTML = `
      <span>Service Name: ${service.name}, Description: ${service.description}, Eligibility: ${service.eligibility}</span>
      <button class="apply-button">Apply</button>
    `;
    servicesList.appendChild(serviceItem);
  
    // Add event listener for the Apply button
    const applyButton = serviceItem.querySelector(".apply-button");
    applyButton.addEventListener("click", () => applyForService(service));
  }
  
  // ... (Previous code for displaying and searching services) ...
  
  