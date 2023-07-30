// Function to create and append a service item to the list with update and delete buttons
function appendServiceToList(service, index) {
    const servicesList = document.getElementById("services-list");
    const serviceItem = document.createElement("li");
  
    const serviceDetails = document.createElement("span");
    serviceDetails.textContent = `Service Name: ${service.name}, Description: ${service.description}, Eligibility: ${service.eligibility}`;
    serviceItem.appendChild(serviceDetails);
  
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", () => handleUpdateService(index));
    serviceItem.appendChild(updateButton);
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => handleDeleteService(index));
    serviceItem.appendChild(deleteButton);
  
    servicesList.appendChild(serviceItem);
  }
  
  // Retrieve services from Local Storage (assumed to be the same data stored in "listofservices.html")
  const storedServices = JSON.parse(localStorage.getItem("services")) || [];
  
  // Function to update a service
  // ... (previous code)

// Function to update a service
function handleUpdateService(index) {
    const servicesList = document.getElementById("services-list");
    const serviceToUpdate = storedServices[index];
  
    // Create a form to edit the service details
    const updateForm = document.createElement("form");
  
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Service Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = serviceToUpdate.name;
    updateForm.appendChild(nameLabel);
    updateForm.appendChild(nameInput);
  
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description:";
    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = serviceToUpdate.description;
    updateForm.appendChild(descriptionLabel);
    updateForm.appendChild(descriptionInput);
  
    const eligibilityLabel = document.createElement("label");
    eligibilityLabel.textContent = "Eligibility Criteria:";
    const eligibilityInput = document.createElement("textarea");
    eligibilityInput.value = serviceToUpdate.eligibility;
    updateForm.appendChild(eligibilityLabel);
    updateForm.appendChild(eligibilityInput);
  
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateForm.appendChild(updateButton);
  
    // Handle form submission to update the service
    updateForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Get the updated values from the form
      const updatedService = {
        name: nameInput.value,
        description: descriptionInput.value,
        eligibility: eligibilityInput.value,
      };
  
      // Update the service at the given index in the stored services
      storedServices[index] = updatedService;
  
      // Update Local Storage with the updated services list
      localStorage.setItem("services", JSON.stringify(storedServices));
  
      // Clear the existing services on the page
      servicesList.innerHTML = "";
  
      // Append the updated services to the list
      storedServices.forEach((service, i) => {
        appendServiceToList(service, i);
      });
  
      // Remove the form after updating
      updateForm.remove();
  
      // Optional: Show a success message or perform any other actions after updating
      alert("Service updated successfully!");
    });
  
    // Append the form to the list item
    const listItem = servicesList.children[index];
    listItem.appendChild(updateForm);
  }
  
  // ... (remaining code)
  
  
  // Function to delete a service
  function handleDeleteService(index) {
    // Remove the service at the given index from the stored services
    storedServices.splice(index, 1);
  
    // Update the Local Storage with the updated services list
    localStorage.setItem("services", JSON.stringify(storedServices));
  
    // Clear the existing services on the page
    const servicesList = document.getElementById("services-list");
    servicesList.innerHTML = "";
  
    // Append the updated services to the list
    storedServices.forEach((service, index) => {
      appendServiceToList(service, index);
    });
  }
  
  // Append the existing services to the list on the page
  storedServices.forEach((service, index) => {
    appendServiceToList(service, index);
  });
  