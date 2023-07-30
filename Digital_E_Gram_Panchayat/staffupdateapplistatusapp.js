// Function to fetch applications from local storage
function fetchApplicationsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("userApplications")) || [];
}

// Function to save updated applications back to local storage
function saveApplicationsToLocalStorage(applications) {
  localStorage.setItem("userApplications", JSON.stringify(applications));
}

// Function to create and append an application item to the list
function appendApplicationToList(application) {
  const applicationsList = document.getElementById("applications-list");
  const applicationItem = document.createElement("div");
  applicationItem.classList.add("application-item");
  applicationItem.innerHTML = `
    <h2>Application ID: ${application.applicationId}</h2>
    <p>Service Name: ${application.serviceName}</p>
    <p>Status: ${application.status}</p>
    <div>
      <button class="accept-button" data-application-id="${application.applicationId}">Accept</button>
      <button class="reject-button" data-application-id="${application.applicationId}">Reject</button>
    </div>
  `;
  applicationsList.appendChild(applicationItem);
}

// Function to display the applications for review
function displayApplicationsForReview() {
  const applications = fetchApplicationsFromLocalStorage();
  applications.forEach(application => {
    appendApplicationToList(application);
  });
}

// Function to handle the acceptance of an application
function acceptApplication(event) {
  const applicationId = event.target.dataset.applicationId;

  const applications = fetchApplicationsFromLocalStorage();
  const updatedApplications = applications.map(application => {
    if (application.applicationId === applicationId) {
      application.status = "Accepted";
    }
    return application;
  });
  saveApplicationsToLocalStorage(updatedApplications);

  alert(`Application ${applicationId} accepted successfully!`);
  // Refresh the application list after updating the status
  const applicationsList = document.getElementById("applications-list");
  applicationsList.innerHTML = "";
  displayApplicationsForReview();
}

// Function to handle the rejection of an application
function rejectApplication(event) {
  const applicationId = event.target.dataset.applicationId;

  const applications = fetchApplicationsFromLocalStorage();
  const updatedApplications = applications.map(application => {
    if (application.applicationId === applicationId) {
      application.status = "Rejected";
    }
    return application;
  });
}
// ... (previously defined functions)

// Function to add event listeners for accept and reject buttons
function addEventListeners() {
    const acceptButtons = document.querySelectorAll(".accept-button");
    const rejectButtons = document.querySelectorAll(".reject-button");
  
    acceptButtons.forEach(button => {
      button.addEventListener("click", acceptApplication);
    });
  
    rejectButtons.forEach(button => {
      button.addEventListener("click", rejectApplication);
    });
  }
  
  // Add event listeners and display applications for review when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    displayApplicationsForReview();
    addEventListeners();
  });
  