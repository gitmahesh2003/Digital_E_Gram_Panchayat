// Function to fetch user's applications from local storage
function fetchUserApplications() {
  // Retrieve the applications from local storage
  const storedApplications = JSON.parse(localStorage.getItem("userApplications")) || [];

  // Get the logged-in user's name from local storage
  const loggedInUserName = localStorage.getItem("loggedInUserName");

  // Filter the applications based on the logged-in user's name
  const userApplications = storedApplications.filter(application => application.userName === loggedInUserName);

  // Call the function to display the user's applications with the fetched data
  displayUserApplications(userApplications);
}

// Function to save user's applications to local storage
function saveUserApplications(applications) {
  localStorage.setItem("userApplications", JSON.stringify(applications));
}

// Function to add a new application to the user's applications list
function addApplicationToUserList(application) {
  const userApplications = JSON.parse(localStorage.getItem("userApplications")) || [];
  userApplications.push(application);
  saveUserApplications(userApplications);
}

// Function to create and append an application item to the list
function appendApplicationToList(application) {
  const applicationsList = document.getElementById("applications");
  const applicationItem = document.createElement("li");
  applicationItem.innerHTML = `
    <h3>${application.serviceName}</h3>
    <p>Status: ${application.status}</p>
  `;
  applicationsList.appendChild(applicationItem);
}

// Function to display the user's applications
function displayUserApplications(applications) {
  // Clear the existing list before appending the fetched applications
  const applicationsList = document.getElementById("applications");
  applicationsList.innerHTML = "";

  applications.forEach(application => {
    appendApplicationToList(application);
  });
}

// Fetch the user's applications when the page loads
document.addEventListener("DOMContentLoaded", fetchUserApplications);
