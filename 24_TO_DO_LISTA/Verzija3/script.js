// DOM
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");

inputTask.addEventListener("keyup", e => {
    console.log(e.key, e.keyCode);

    if(e.key == "Enter") {
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

//////////////////////////////////////////
// LOCAL STORAGE
//////////////////////////////////////////
// Smeštanje u lokalnu memoriju
// localStorage.setItem("name","Jelena");
localStorage.setItem("username","Jelena");
localStorage.setItem("city", "Niš");

// Update u lokalnoj memoriji
localStorage.setItem("username", "Stefan");
// Ukoliko key postoji već u local storage onda vrši update vrednosti za taj key
// Ukoliko key ne postoji u local storage, onda vrši dodavanje (novi unos) u local storage

console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("name"));
let u = localStorage.getItem("username");
console.log(u);

localStorage.setItem("year", 28);
let god = localStorage.getItem("year");
god++;
localStorage.setItem("year", god);
console.log(`Imam ${god} godina`);



