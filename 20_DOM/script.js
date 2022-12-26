console.log(document); // objekat (koren DOM stabla)
console.log(document.body); // objekat (body tag iz DOM stabla)

let el1 = document.getElementById("p2");
console.log(el1); // objekat iz DOM stabla

console.log("Stefan");

let el2 = document.getElementsByClassName("par");
console.log(el2); // HTML Collection objekata iz DOM stabla

let el3 = document.getElementsByTagName("p");
console.log(el3); // HTML Collection objekata iz DOM stabla

let el4 = document.getElementsByTagName("a");
console.log(el4); // 

let el5 = document.getElementsByName("p");
console.log(el5); // NodeList objekata iz DOM stabla

// Pristup elementima HTML Collection
for(let i = 0; i < el2.length; i++) {
    console.log(el2[i]);  // el2[i] je element (objekat, HTML tag) iz HTML kolekcije el2
}

/* Ovako ne moze - HTML Collection ne poseduje forEach petlju
el2.forEach(e => {
    console.log(e);
});
*/

let elems = Array.from(el2);
elems.forEach(e => {
    console.log(e);
});

// Pristup elementima NodeList - moze i preko for i preko forEach
el5.forEach(e => {
    console.log(e);
});

// Primena metoda querySelector
let t1 = document.querySelector("#p2");  // kao parametar ide css selektor
console.log(t1);  // objekat

let t2 = document.querySelector(".par");
console.log(t2); // objekat - PRVI objekat obuhvacen prosledjenim CSS selektorom

let t3 = document.querySelectorAll(".par");
console.log(t3);