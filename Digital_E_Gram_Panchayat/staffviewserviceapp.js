// Function to fetch services from local storage
function fetchServicesFromLocalStorage() {
    return JSON.parse(localStorage.getItem("services")) || [];
  }
  
  // Function to create and append a service item to the list
  function appendServiceToList(service) {
    const servicesList = document.getElementById("services-list");
    const serviceItem = document.createElement("div");
    serviceItem.classList.add("services-item");
    serviceItem.innerHTML = `
      <h2>${service.name}</h2>
      <p>Description: ${service.description}</p>
      <p>Eligibility: ${service.eligibility}</p>
    `;
    servicesList.appendChild(serviceItem);
  }
  
  // Function to display the services
  function displayServices() {
    const services = fetchServicesFromLocalStorage();
    services.forEach(service => {
      appendServiceToList(service);
    });
  }
  
  // Fetch and display the services when the page loads
  document.addEventListener("DOMContentLoaded", displayServices);
  