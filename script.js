var inputEmail= document.getElementById("email");
inputEmail.oninput = function(e){
    localStorage.setItem("email", inputEmail.value);
}

inputEmail.value = localStorage.getItem("email");






// server side makkelijk maken met id params -> zo min mogelijk invullen -> gebruiksvriendelijker 
// je moet dit wel kunnen aanpassen in de input value
// type dit uit in je readme
