// Get the form element
const createServicesForm = document.getElementById("create-services-form");

// Function to store the service data in Local Storage
function storeService(service) {
  // Retrieve existing services from Local Storage (if any)
  const existingServices = JSON.parse(localStorage.getItem("services")) || [];
  
  // Add the new service to the existing services
  existingServices.push(service);
  
  // Store the updated services array in Local Storage
  localStorage.setItem("services", JSON.stringify(existingServices));
}

// Add an event listener to the form for form submission
createServicesForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values entered by the admin
  const serviceName = document.getElementById("service-name").value;
  const serviceDescription = document.getElementById("service-description").value;
  const eligibilityCriteria = document.getElementById("eligibility-criteria").value;

  // Perform validation on the form fields
  if (serviceName.trim() === '') {
    alert("Please enter a valid service name.");
    return;
  }

  if (serviceDescription.trim() === '') {
    alert("Please enter a valid service description.");
    return;
  }

  if (eligibilityCriteria.trim() === '') {
    alert("Please enter valid eligibility criteria.");
    return;
  }

  // If the form data is valid, store the service data in Local Storage
  const newService = {
    name: serviceName,
    description: serviceDescription,
    eligibility: eligibilityCriteria
  };
  storeService(newService);

  // Optional: Inform the admin that the service has been created
  alert("Service created successfully!");
  window.location.href="AdminHome.html"

  // Clear the form after submission
  createServicesForm.reset();
});
