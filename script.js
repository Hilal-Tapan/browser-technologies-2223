// PERSOONLIJKE INFO
var inputFirstName = document.getElementById("firstName");
var inputLastName = document.getElementById("lastName");
var inputStudentNumber = document.getElementById("studentNumber");
var inputEmail = document.getElementById("email");

// functies store the items
if (inputFirstName) {
    inputFirstName.oninput = function (e) {
        localStorage.setItem("firstName", inputFirstName.value);
    }
    inputFirstName.value = localStorage.getItem("firstName");
}

if (inputLastName) {
    inputLastName.oninput = function (e) {
        localStorage.setItem("lastName", inputLastName.value);
    }
    inputLastName.value = localStorage.getItem("lastName");
}

if (inputStudentNumber) {
    inputStudentNumber.oninput = function (e) {
        localStorage.setItem("studentNumber", inputStudentNumber.value);
    }
    inputStudentNumber.value = localStorage.getItem("studentNumber");
}

if (inputEmail) {
    inputEmail.oninput = function (e) {
        localStorage.setItem("email", inputEmail.value);
    }
    inputEmail.value = localStorage.getItem("email");
}


//////////////////////////////////////////////////////////////////////////////////////////////////
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




// code zonder for loop door alle inputs
// var inputWafsVraag1 = document.querySelectorAll('[name="wafs-vraag-1"],[name="wafs-vraag-2"]');
// if (inputWafsVraag1) {
//     // Loop through all of the selected input elements
//     for (var i = 0; i < inputWafsVraag1.length; i++) {
//         let inputElement = inputWafsVraag1[i];
//         // var definieerd een variabele voor een hele functie
//         // let definieerd een variabele voor een code block {}
//         // dat is wat we hier willen want input elements blijft dus bestaan.
//         // de var bleef bestaan en de let kijkt naar de meest recente waarde.

//     // Get the stored value for this input element's name attribute
//     let storedValue = localStorage.getItem(inputElement.name);
//     // Check if a stored value exists for this input element's name attribute
//     if (storedValue !== null) {
//       // If the input element is radio button,
//       // set its checked property to true if its value attribute matches the stored value
//       if (inputElement.type === "radio") {
//         inputElement.checked = (inputElement.value === storedValue);
//       }
//       // If the input element is not a radio button,
//       // set its value property to the stored value
//       else {
//         inputElement.value = storedValue;
//       }
//     }
//     // Set up an oninput event handler for the input element
//     inputElement.oninput = function (e) {
//       // Save the input element's current value to localStorage
//       localStorage.setItem(inputElement.name, inputElement.value);
//     };
//   }
// }





// server side makkelijk maken met id params -> zo min mogelijk invullen -> gebruiksvriendelijker 
// je moet dit wel kunnen aanpassen in de input value
// type dit uit in je readme