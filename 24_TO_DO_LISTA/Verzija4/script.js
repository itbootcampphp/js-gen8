// DOM
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");

let arrTasks = [];

if(localStorage.getItem("tasks") == null) {
    // Ne postoji takav key u memoriji i treba ga kreirati
    localStorage.setItem("tasks", JSON.stringify(arrTasks));
}
else {
    // Postoji takav key u memoriji
    arrTasks = JSON.parse(localStorage.getItem("tasks"));
    arrTasks.forEach(task => {
        let liNewTask = document.createElement("li"); // Kreiram novi <li>
        liNewTask.textContent += task; // Upisujem u <li> tekst
        ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
    });
}

inputTask.addEventListener("keyup", e => {
    if(e.key == "Enter") {
        let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja

        if(inputTaskValue != "") {
            let liNewTask = document.createElement("li"); // Kreiram novi <li>
            liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
            
            let radioAdd = document.querySelector("input[name=add]:checked");
            // console.log(radioAdd, radioAdd.value);
            if(radioAdd.value == 'beggin') {
                ulTasks.prepend(liNewTask); // Dodajemo <li> čvor na početak <ul>
                arrTasks.unshift(inputTaskValue); // Dodajemo na početak niza arrTasks
            }
            else {
                ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
                arrTasks.push(inputTaskValue); // Dodajemo na kraj niza arrTasks
            }
            inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
            localStorage.setItem("tasks",JSON.stringify(arrTasks));
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
        let index = arrTasks.indexOf(e.target.textContent);
        arrTasks.splice(index, 1);
        localStorage.setItem("tasks",JSON.stringify(arrTasks));
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



