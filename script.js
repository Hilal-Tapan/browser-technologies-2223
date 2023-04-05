// Check if the browser supports local storage
if (typeof(Storage) !== "undefined") {
  
    // Get references to the input fields for personal information
    var inputFirstName = document.getElementById("firstName");
    var inputLastName = document.getElementById("lastName");
    var inputStudentNumber = document.getElementById("studentNumber");
    var inputEmail = document.getElementById("email");
    
    // Set up event listeners for the input fields for personal information
    if (inputFirstName) {
      // When the user types into the first name input field, store the value in local storage
      inputFirstName.oninput = function (e) {
        localStorage.setItem("firstName", inputFirstName.value);
      }
      // Set the value of the first name input field to the stored value, if there is one
      inputFirstName.value = localStorage.getItem("firstName");
    }
    
    if (inputLastName) {
      // When the user types into the last name input field, store the value in local storage
      inputLastName.oninput = function (e) {
        localStorage.setItem("lastName", inputLastName.value);
      }
      // Set the value of the last name input field to the stored value, if there is one
      inputLastName.value = localStorage.getItem("lastName");
    }
    
    if (inputStudentNumber) {
      // When the user types into the student number input field, store the value in local storage
      inputStudentNumber.oninput = function (e) {
        localStorage.setItem("studentNumber", inputStudentNumber.value);
      }
      // Set the value of the student number input field to the stored value, if there is one
      inputStudentNumber.value = localStorage.getItem("studentNumber");
    }
    
    if (inputEmail) {
      // When the user types into the email input field, store the value in local storage
      inputEmail.oninput = function (e) {
        localStorage.setItem("email", inputEmail.value);
      }
      // Set the value of the email input field to the stored value, if there is one
      inputEmail.value = localStorage.getItem("email");
    }
  
    // VAK 1
    // Select all fieldset elements with class "radio"
    let fieldsets = document.querySelectorAll('fieldset.radio');
    // Iterate over each fieldset element
    for (let i = 0; i < fieldsets.length; i++) {
      // Select all input elements within the current fieldset
      let inputs = fieldsets[i].querySelectorAll('input[type="radio"]');
  
      // Iterate over each input element
      for (let j = 0; j < inputs.length; j++) {
        // Store the current input element in inputElement     
        let inputElement = inputs[j];
  
        // Get the stored value for this input element's name attribute
        let storedValue = localStorage.getItem(inputElement.name);
  
        // Check if a stored value exists for this input element's name attribute
        if (storedValue !== null) {
  
          // If the input element radio button,
          // set its checked property to true if its value attribute matches the stored value
          if (inputElement.type === "radio") {
            inputElement.checked = (inputElement.value === storedValue);
          }
          // If the input element is not a checkbox or radio button,
          // set its value property to the stored value
          else {
            inputElement.value = storedValue;
          }
        }
        // Set up an oninput event handler for the input element
        inputElement.oninput = function (e) {
          // Save the input element's current value to localStorage
          localStorage.setItem(inputElement.name, inputElement.value);
        };
  
        // Log the current value of the input element to the console
        console.log(inputElement.value);
      }
    }
  } else {
    // Display a message to the user that their browser does not support the necessary features
    alert("Your browser does not support the features required by this website. Please try using a different browser or updating your current browser to a newer version.");
  }
  