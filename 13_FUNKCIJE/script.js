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

////////////////////////////////

// 3. ZADATAK - Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

////////////////////////////////

function neparan(n) {
    if(n%2 == 0) {
        return "Paran broj";
    } 
    else {
        return "Neparan broj";
    }
}

let tekst = neparan(11);
console.log(tekst);
document.write(tekst);

////////////////////////////////

// 4. ZADATAK - Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja

////////////////////////////////

function maks2(br1, br2) {
    if(br1 > br2) {
        return br1;
    }
    else {
        return br2;
    }
}

let m1 = maks2(13, 6);
console.log(`Veći je broj ${m1}`);

function maks4(br1, br2, br3, br4) {
    // let veci1 = maks2(br1, br2);
    // let veci2 = maks2(br3, br4);
    // let najveci = maks2(veci1, veci2);
    // return najveci;

    return maks2(maks2(br1, br2), maks2(br3, br4));
}

let naj = maks4(15, 2, 14, 3);
console.log(naj);

