// Function to get the service information from the query parameter in the URL
function getServiceFromQueryParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const encodedService = urlParams.get("service");
  return JSON.parse(decodeURIComponent(encodedService));
}

// Function to generate a unique application ID
function generateApplicationId() {
  return Date.now().toString(36);
}

// Function to pre-fill the form with the service details
function prefillFormWithServiceDetails(service) {
  const nameField = document.getElementById("name");
  const descriptionField = document.getElementById("description");
  const eligibilityField = document.getElementById("eligibility");

  nameField.value = service.name;
  descriptionField.value = service.description;
  eligibilityField.value = service.eligibility;
}

// Function to handle the form submission
function submitApplication(event) {
  event.preventDefault();

  // Get the form data
  const serviceName = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const eligibility = document.getElementById("eligibility").value;
  const userName = document.getElementById("Username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  // Generate a unique application ID
  const applicationId = generateApplicationId();

  // Create an application object
  const application = {
    applicationId,
    serviceName,
    description,
    eligibility,
    userName,
    email,
    phone,
    address,
    status: "Pending", // Assuming the initial status is "Pending"
  };

  // Save the application to local storage
  saveApplicationToLocalstorage(application);

  // Show a success message to the user
  alert("Application submitted successfully!");

  // Redirect the user to the "My Application Status" page
  window.location.href = "userapplystatus.html";
}

// Function to save the application to local storage
function saveApplicationToLocalstorage(application) {
  const userApplications = JSON.parse(localStorage.getItem("userApplications")) || [];
  userApplications.push(application);
  localStorage.setItem("userApplications", JSON.stringify(userApplications));
}

// Get the service information from the query parameter and pre-fill the form
document.addEventListener("DOMContentLoaded", () => {
  const service = getServiceFromQueryParams();
  prefillFormWithServiceDetails(service);

  const applicationForm = document.getElementById("application-form");
  applicationForm.addEventListener("submit", submitApplication);
});
