// app.js
// Initialize Firebase with your project's configuration
const firebaseConfig = {

    apiKey: "AIzaSyAz4l-Xw7f2iDkqOKGwoV_4VS75OfFIAg0",

    authDomain: "intern-4a664.firebaseapp.com",

    databaseURL: "https://intern-4a664-default-rtdb.firebaseio.com",

    projectId: "intern-4a664",

    storageBucket: "intern-4a664.appspot.com",

    messagingSenderId: "799503932936",

    appId: "1:799503932936:web:dd35e82ce5edbabf58fbbd"

  };


  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth()
  const database=firebase.database()
  // Get references to the registration and login forms
  const registrationForm = document.getElementById("registrationForm");
  const loginForm = document.getElementById("loginForm");
  
  // Handle user registration
  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Get user input from the registration form
    const name = document.getElementById("name");
    const email = document.getElementById("regemail");
    const password = document.getElementById("regpassword");
  
    // Create a new user account with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful
        const user = userCredential.user;
        console.log("Registration successful:", user);
  
        // Save user data to Firebase Realtime Database
        const userId = user.uid;
        firebase.database().ref("users/" + userId).set({
          name: name,
          email: email
        })
        .then(() => {
          console.log("User data saved to Firebase Realtime Database");
          alert("Registration successful! Please log in.");
          // Redirect to the login page after registration
          window.location.href = "Userlogin.html";
          registrationForm.reset();
        })
        .catch((error) => {
          console.error("Error saving user data to Firebase Realtime Database:", error);
          alert("Registration successful, but user data could not be saved. Please log in.");
          // Redirect to the login page after registration
          window.location.href = "Userlogin.html";
          registrationForm.reset();
        });
      })
      .catch((error) => {
        // Handle registration errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration error:", errorMessage);
        alert(errorMessage);
      });
  });
  
  // Handle user login
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    // Get user input from the login form
    const email = loginForm.loginemail.value;
    const password = loginForm.loginpassword.value;
  
    // Log in the user with email and password
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential.user;
        console.log("Login successful:", user);
        alert("Login successful!");
        // Redirect to the user home page or any other desired page
        window.location.href = "UserHome.html";
        loginForm.reset();
      })
      .catch((error) => {
        // Handle login errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorMessage);
        alert(errorMessage);
      });
  });
  