let x = 5;
let y = 7;

if(x == y) 
{
    console.log("Jednake vrednosti")
}
else
{
    console.log("Različite vrednosti");
}

// Isto kao predhodni primer, samo kontra pitanje
if(x != y)
{
    console.log("Različite vrendosti");
}
else 
{
    console.log("Iste vrednosti");
}

// 1. Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.
let proizvod = 100
if(proizvod > 100) 
{
    document.write("<p>Throw away</p>");
}
else 
{
    document.write("<p>Pack up</p>");
}

// 2. Za unetu temperaturu u paragrafu ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.
let temp = -10
if(temp >= 0) {
    document.write("<p style='color: red;'>Temperatura u plusu</p>");
}
else {
    document.write("<p style='color: blue;'>Temperatura u minusu</p>");
}

// 3. U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu). 
let pol = "M";
if(pol == "m") {
    document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSztU-QItytiQxlTlfO2Y73B4-jyKvgowOhMbetDPs&s' width='50px'>");
}
else {
    document.write("<img src='https://cdn-icons-png.flaticon.com/512/65/65581.png' width='50px'>");
}

// 6. Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).
let b1 = 100;
let b2 = 15;
let b3 = 10;

let maks = b1;
if(maks < b2) {
    maks = b2;
}
if(maks < b3) {
    maks = b3
}
document.write(`<p>Maksimu je ${maks}</p>`);

// Sa minimumom
let mini = b1;
if(b2 < mini) {
    mini = b2;
}
if(b3 < mini) {
    mini = b3;
}
document.write(`<p>Minimum je ${mini}</p>`);
