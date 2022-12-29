console.log("Events");

// 1. Dohvatiti element na koji želimo da postavimo osluškivač 
let btnHello = document.getElementById("hello");

// 2. Postavljamo osluškivač na element koji smo dohvatili
btnHello.addEventListener("click", () => {
    console.log("Hello!");
});

/////////////////////////

let btnHelloHello = document.getElementById("hello2");
btnHelloHello.addEventListener("dblclick", () => {
    console.log("Hello hello!");
});

/////////////////////////

let btnEvents = document.getElementById("hello3");

btnEvents.addEventListener("click", () => {
    console.log("Event click");
});

btnEvents.addEventListener("dblclick", () => {
    console.log("Event dblclick");
});

/////////////////////////
// 1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
let btnBrojac = document.getElementById("brojac");
let brojac = 1;
btnBrojac.addEventListener("click", () => {
    console.log(`Brojač je ${brojac}`);
    brojac = brojac + 1; // brojac++; // brojac += 1;
});

// 3. Napraviti dugme + i dugme -.
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
let btnMinus = document.getElementById("minus");
let btnPlus = document.getElementById("plus");
let spanRez = document.getElementById("rezultat");
let br = 0;

btnMinus.addEventListener("click", () => {
    br--;
    if(br < 0) {
        br = 0;
    }
    spanRez.innerHTML = br;
});

btnPlus.addEventListener("click", () => {
    br++;
    spanRez.innerHTML = br;
});

// 5.
let inputUnos = document.getElementById("ime");
let btnPrikazi = document.getElementById("prikazi");
let spanPrikaz = document.getElementById("prikaz");

btnPrikazi.addEventListener("click", () => {
    let value = inputUnos.value;
    spanPrikaz.innerHTML = `Hello ${value}`;
    // inputUnos.value = "";
});

btnPrikazi.addEventListener("dblclick", () => {
    ///// Selektovanje samo jednog radio button koji je čekiran /////
    let checkedPol = document.querySelector("input[name='pol']:checked"); // Jedan radio button koji je čekiran (vraća HTML tag)
    console.log(checkedPol);
    let valueCheckedPol = checkedPol.value; // Daje vrednost (value) iz selektpvanog HTML taga
    console.log(valueCheckedPol);

    ///// Selektovanje svih radio buttons prema name atributu /////
    let inputRadios = document.getElementsByName('pol');
    inputRadios.forEach(input => {
        if(input.checked) {
            console.log(input.value);
        }
    });

    ///// Isto postižemo i ukoliko koristimo querySelectorAll /////
    let inputRadiosQuery = document.querySelectorAll('input[name="pol"]');
    inputRadiosQuery.forEach(input => {
        if(input.checked) {
            console.log(input.value);
        }
    });


});

