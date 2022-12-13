console.log(`Funkcije`);

function zdravo() {
    console.log(`Zdravo!`);
}

zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for(i=1; i<=5; i++) {
    zdravo(); // Poziva funkciju onoliko puta koliko se izvrši for petlja
}

////////////////////////////////

function hello(name) {
    console.log(`Hello ${name}`);
}

hello("Jelena");
hello("Stefan");

let ime = "Zlatko";
hello(ime);

let name = "Nikola";
hello(name);

////////////////////////////////

function hello_full_name(ime, prezime) {
    console.log(`Hello ${ime} ${prezime}`);
    console.log(`Hello ${ime}`);
}

hello_full_name("Stefan", "Stanimirovic");

let im = "Ana";
let pr = "Ivanovic";
hello_full_name(im, pr);

////////////////////////////////

// 5. ZADATAK - Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike

////////////////////////////////

function slika(adresa) {
    document.write(`<img src=${adresa}>`);
}
slika("slike/1.jpg");
slika("slike/2.jpg");

////////////////////////////////

// 6. ZADATAK - Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju

////////////////////////////////

function boji_paragraf(boja) {
    document.write(`<p style="color:${boja};">Obojeni tekst</p>`);
}

boji_paragraf("red");
boji_paragraf("orange");