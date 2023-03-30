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


/////////////////////////////////////////////////////////////////// button submit feedback code
// const form = document.querySelector("#form");

// form.addEventListener("submit", (event) => {
//   // prevent the form from submitting
//   event.preventDefault();

//   // get all input fields within the form
//   const inputs = form.querySelectorAll("input");

//   // loop over each input field
//   inputs.forEach((input) => {
//     // check if the input field has a value
//     if (input.value) {
//       // if it has a value, add a class to style it
//       input.classList.add("has-value");
//       input.classList.remove("no-value");
//     } else {
//       // if it doesn't have a value, add another class to style it
//       input.classList.add("no-value");
//       input.classList.remove("has-value");
//     }
//   });

//   // check if all required fields have a value
//   const isValid = Array.from(inputs).every(
//     (input) => !input.required || input.value
//   );

//   // if all required fields have a value, submit the form
//   if (isValid) {
//     form.submit();
//   }
// });
///////////////////////////////////////////////////////////////////

// const fout = document.querySelectorAll("input:not(input[type="radio"])");

// fout.classList.add("fout");

// console.log(fout);


// onSubmit omdat je dit ook met enter kan doen
// querySelectorAll alle formuliervelden 
// loop hierover heen
// je controleerd of het een waarde heeft
// als het wel een waarde heeft voeg een class toe en stijl deze
// als het geen waarde heeft class toevoegen en css content erin zetten
// als dit niet screenreader dan innerhtml

// als het true is dan gaat die submitten
// als die false is word die niet opgestuurd
// var invalid = false




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