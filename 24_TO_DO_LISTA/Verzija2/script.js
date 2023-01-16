// DOM
let btnDodaj =  document.getElementById('submit');
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");

btnDodaj.addEventListener("click", () => {
    let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja

    if(inputTaskValue != "") {
        let liNewTask = document.createElement("li"); // Kreiram novi <li>
        liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
        ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
        inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
    }
})