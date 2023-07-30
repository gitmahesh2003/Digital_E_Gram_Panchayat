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
    const applicationsList = document.getElementById("applications");
    const applicationItem = document.createElement("li");
    applicationItem.innerHTML = `
      <h3>Application ID: ${application.applicationId}</h3>
      <p>Service Name: ${application.serviceName}</p>
      <p>Status: ${application.status}</p>
      <h4>User Information:</h4>
      <p>User Name: ${application.userName}</p>
      <p>Email: ${application.email}</p>
      <p>Phone: ${application.phone}</p>
      <p>Address: ${application.address}</p>
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
    // Implement your logic to update the status of the application to "Accepted" in the server or local storage
    // ...
  
    // Update the status of the application in the local storage
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
    const applicationsList = document.getElementById("applications");
    applicationsList.innerHTML = "";
    displayApplicationsForReview();
  }
  
  // Function to handle the rejection of an application
  function rejectApplication(event) {
    const applicationId = event.target.dataset.applicationId;
    // Implement your logic to update the status of the application to "Rejected" in the server or local storage
    // ...
  
    // Update the status of the application in the local storage
    const applications = fetchApplicationsFromLocalStorage();
    const updatedApplications = applications.map(application => {
      if (application.applicationId === applicationId) {
        application.status = "Rejected";
      }
      return application;
    });
    saveApplicationsToLocalStorage(updatedApplications);
  
    alert(`Application ${applicationId} rejected successfully!`);
    // Refresh the application list after updating the status
    const applicationsList = document.getElementById("applications");
    applicationsList.innerHTML = "";
    displayApplicationsForReview();
  }
  
  // Add event listeners for accept and reject buttons
  document.addEventListener("DOMContentLoaded", () => {
    displayApplicationsForReview();
    const acceptButtons = document.querySelectorAll(".accept-button");
    const rejectButtons = document.querySelectorAll(".reject-button");
  
    acceptButtons.forEach(button => {
      button.addEventListener("click", acceptApplication);
    });
  
    rejectButtons.forEach(button => {
      button.addEventListener("click", rejectApplication);
    });
  });
  