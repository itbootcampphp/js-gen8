let br = 'broj';
if(br < 0) {
    console.log("Broj je manji od nule");
}
else if(br == 0) {
    console.log("Broj je jednak nuli");
}
else if(br > 0) {
    console.log("Broj je veći od nule");
}
else {
    console.log("Zbunjen sam, nije broj");
}

console.log("Kraj grananja");

// Ako nešto može da pripada na dva mesta, onda će ići IF IF IF
// Ako nešto pripada samo jednom, onda će ići IF - ELSE IF - ELSE


// 7. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
let date = new Date()
let day = date.getDay()

if(day == 0) {
    console.log("Vikend");
}
else if(day == 6) {
    console.log("Vikend");
}
else {
    console.log("Radni dan");
}

// 11.Za unet sat početka i sat kraja radnog vremena dva lekara,  ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
// (Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno)
let p1 = 8
let k1 = 16
let p2 = 10
let k2 = 12

if(k1 < p2) {
	console.log("Nema preklapanja")
}
else if(k2 < p1) {
	console.log("Nema preklapanja")
}
else {
    console.log("Ima preklapanja")
}

// 12. Za uneti broj ispitati da li je paran ili nije. 
br = 0
// 10 / 2 = 5 + ost. 0
// 6 / 2 = 3 + ost. 0
// 206 / 2 = 103 + ost. 0

// 13 / 2 = 6 + ost. 1

// 0 / 2 = 0
// 2 / 0 - nije def.

let ost = br % 2
if(ost == 0) {
    console.log("Paran broj");
}
else {
    console.log("Neparan broj");
}

// Može i ovako
if(br%2 == 0) {
    console.log("Paran broj");
}
else {
    console.log("Neparan broj");
}

// 16. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 
let b1 = 120;
let b2 = 15;
let b3 = 10;

// Određivanje za maks
let maks = b1;
if(maks < b2) {
    maks = b2;
}
if(maks < b3) {
    maks = b3
}
document.write(`<p>Maksimu je ${maks}</p>`);

// Određivanje za min
let mini = b1;
if(b2 < mini) {
    mini = b2;
}
if(b3 < mini) {
    mini = b3;
}
document.write(`<p>Minimum je ${mini}</p>`);

// Određivanje srednjeg broja
let sr = b1 + b2 + b3 - maks - mini;
document.write(`<p>Srednji broj je ${sr}</p>`);
