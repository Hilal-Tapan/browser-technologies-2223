// PERSOONLIJKE INFO
var inputEmail = document.getElementById("email");
var inputFirstName = document.getElementById("firstName");
var inputLastName = document.getElementById("lastName");
var inputStudentNumber = document.getElementById("studentNumber");
var inputEmail = document.getElementById("email");

// functies store the items
if (inputFirstName) {
    inputFirstName.oninput = function (e) {
        localStorage.setItem("firstName", inputFirstName.value);
    }
    // inputFirstName.value = localStorage.getItem("firstName");
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
var inputWafsVraag1 = document.querySelectorAll('[name="wafs-vraag-1"],[name="wafs-vraag-2"]');

if (inputWafsVraag1) {
    // Loop through all of the selected input elements
    for (var i = 0; i < inputWafsVraag1.length; i++) {
        // var definieerd een variabele voor een hele functie
        // let definieerd een variabele voor een code block {}
        // dat is wat we hier willen want input elements blijft dus bestaan.
        // de var bleef bestaan en de let kijkt naar de meest recente waarde.

        // heeft deze radiobutton de value die ik ken uit local storage
        // if true -> inputElement.checked = true
        // 
        let inputElement = inputWafsVraag1[i];
        inputElement.oninput = function (e) {
            localStorage.setItem(inputElement.name, inputElement.value);
        }
        // inputElement.value = localStorage.getItem(inputElement.name);
        console.log(inputElement.value)
        //if checked is true
        // en ff kijken of oninput werkt op radiobuttons
    }
}

var inputWafsVraag1 = document.querySelectorAll('[name="wafs-vraag-1"],[name="wafs-vraag-2"]');

if (inputWafsVraag1) {
  for (var i = 0; i < inputWafsVraag1.length; i++) {
    let inputElement = inputWafsVraag1[i];
    let storedValue = localStorage.getItem(inputElement.name);
    if (storedValue !== null) {
      if (inputElement.type === "checkbox" || inputElement.type === "radio") {
        inputElement.checked = (inputElement.value === storedValue);
      } else {
        inputElement.value = storedValue;
      }
    }
    inputElement.oninput = function (e) {
      localStorage.setItem(inputElement.name, inputElement.value);
    };
    console.log(inputElement.value);
  }
}




// var inputWafsVraag1 = document.querySelectorAll('[name="wafs-vraag-1"],[name="wafs-vraag-2"]');

// if (inputWafsVraag1) {
//     for (var i = 0; i < inputWafsVraag1.length; i++) {

//         let inputElement = inputWafsVraag1[i];
//         inputElement.oninput = function (e) {
//             localStorage.setItem(inputElement.name, inputElement.value);
//         }
//         console.log(inputElement.value)

//     }
// }

// var inputWafsVraag1 = document.querySelectorAll('[name="wafs-vraag-1"]');
// console.log(inputWafsVraag1);

// // functies store the items
// if (inputWafsVraag1) {
//     inputWafsVraag1.oninput = function (e) {
//         localStorage.setItem("wafs-vraag-1", inputWafsVraag1.value);
//     }
//     inputWafsVraag1.value = localStorage.getItem("wafs-vraag-1");
// }







// server side makkelijk maken met id params -> zo min mogelijk invullen -> gebruiksvriendelijker 
// je moet dit wel kunnen aanpassen in de input value
// type dit uit in je readme