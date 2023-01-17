// DOM
let btnDodaj =  document.getElementById('submit');
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");

btnDodaj.addEventListener("click", () => {
    let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja

    if(inputTaskValue != "") {
        let liNewTask = document.createElement("li"); // Kreiram novi <li>
        liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
        
        let radioAdd = document.querySelector("input[name=add]:checked");
        // console.log(radioAdd, radioAdd.value);
        if(radioAdd.value == 'beggin') {
            ulTasks.prepend(liNewTask); // Dodajemo <li> čvor na početak <ul>
        }
        else {
            ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
        }
        inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
    }
})

ulTasks.addEventListener("click", e => {
    // console.log("Kliknuto na UL");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.tagName);
    if(e.target.tagName == "LI") {
        // console.log("Kliknuto na LI");
        // e.target.classList.toggle("precrtaj");
        e.target.remove();
    }
});