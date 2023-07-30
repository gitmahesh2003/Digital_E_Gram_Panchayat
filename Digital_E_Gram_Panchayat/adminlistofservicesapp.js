// Function to create and append a service item to the list
function appendServiceToList(service) {
    const servicesList = document.getElementById("services-list");
    const serviceItem = document.createElement("li");
    serviceItem.textContent = `Service Name: ${service.name}, Description: ${service.description}, Eligibility: ${service.eligibility}`;
    servicesList.appendChild(serviceItem);
  }
  
  // Retrieve services from Local Storage
  const storedServices = JSON.parse(localStorage.getItem("services")) || [];
  
  // Iterate through the stored services and append them to the list
  storedServices.forEach(service => {
    appendServiceToList(service);
  });
  