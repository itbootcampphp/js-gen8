console.log(1);
console.log(2);
window.setTimeout(() => {
    console.log("Poruka ispisana nakon nekog vremena");
}, 1000 * 3);
console.log(3);
console.log(4);


let i = 5;
setInterval(() => {
    console.log(i);
    i++;
}, 1000);


let btn1 = document.querySelector("#click1");
let btn2 = document.querySelector("#click2");
let btn3 = document.querySelector("#click3");
let ispis = document.querySelector("#ispis");

let osoba = {
    ime: "Pera",
    prezime: "Peric",
    ispis: function() {
        console.log(this.ime + " " + this.prezime);
        // u arrow f-ji: this je window objekat
        // u anonimnoj f-ji: this je trenutni objekat
    }
}

osoba.ispis();

let vreme = 1000 * 2;
let tajmer = null;

btn1.addEventListener("click", function(e) {
    e.preventDefault();
    let datum = new Date();
    let h = datum.getHours();
    let m = datum.getMinutes();
    let s = datum.getSeconds();
    if(tajmer === null) {
        tajmer = setTimeout(() => {
            ispis.innerHTML = `${h}:${m}:${s}`;
            tajmer = null;
        }, vreme);
    }
});

btn2.addEventListener("click", function(e) {
    e.preventDefault();
    clearTimeout(tajmer);
    tajmer = null;
});

btn3.addEventListener("click", () => {
    setInterval(() => {
        let datum = new Date();
        let h = datum.getHours();
        let m = datum.getMinutes();
        let s = datum.getSeconds();
        ispis.innerHTML = `${h}:${m}:${s}`;
    }, 1000);
});