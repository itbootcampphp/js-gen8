function sum(a, b)    // Imenovane funkcije: (function), ime, {param}, {return} 
{
    return a + b;
}

let rez = sum(1, 2);
console.log(rez);

// Anonimne funkcije
let suma = function(a, b) // Anonimna f-je: (function), {param}, {return}
{
    return a + b;
}

rez = suma(1, 2); // poziv anonimne f-je preko promenljive suma
console.log(rez);

// Arrow funkcije (anonimne f-je sa skracenim zapisom)
let suma2 = (a, b) => {   // {param}, =>, {return}
    return a + b;
}

rez = suma2(5, 6);
console.log(rez);

let hello = () => {
    console.log("Hello world!");
}

hello();
hello();

let echo = (s1, s2) => {
    let rezultat = s1 + ", " + s2;
    console.log(rezultat);
}

echo("Stefan", "Stanimirovic");

let ispisHTML = (ime, prezime, godine) => {
    if(godine >= 18) {
        let ispis = `<p>Osoba ${ime} ${prezime} je punoletna</p>`;
        return ispis;
    }
    else {
        let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
        return ispis;
    }
}

document.body.innerHTML += ispisHTML("Stefan", "Stanimirovic", 33);
document.body.innerHTML += ispisHTML("Pera", "Peric", 15);


// Zadatak 3
/*
Varijanta 1: Preko medjupromenljive deklarisane sa let
let neparan = (n) => {
    let x;
    if(n % 2 == 1) { // n % 2 != 0
        x = true;
    }
    else {
        x = false;
    }
    return x;
}
*/

// Varijanta 1': Preko medjupromenljive deklarisane sa let
let neparan2 = (n) => {
    if(n % 2 == 1) { // n % 2 != 0
        let x = true;
        return x;
    }
    else {
        let x = false;
        return x;
    }
}

// Varijanta 2: Preko medjupromenljive deklarisane sa var
let neparan3 = (n) => {
    if(n % 2 == 1) { // n % 2 != 0
        var x = true;
    }
    else {
        var x = false;
    }
    return x;
}

// let - unutar bloka
// var - unutar f-je
let x = 5;
console.log(x);

console.log(neparan3(3));
console.log(neparan3(6));

// Varijanta 4 - bez pomocnih promenljivih
let neparan4 = (n) => {
    if(n % 2 == 1) {   // n % 2 != 0
        return true;
    }
    else {
        return false;
    }
}

// Varijanta 5 - isto kao Varijanta 4, samo skraceno
let neparan5 = (n) => {
    return (n % 2 == 1);
}

// Varijanta 6 - isto kao Varijanta 5, samo koristeci svojstva arrow funkcija
// 1) Ako arrow f-ji prosledjujemo TACNO JEDAN parametar, onda () nisu obavezne
// 2) Ako se telo arrow f-je sastoji SAMO od return naredbe, ona nije obavezna
let neparan6 = n => (n % 2 == 1);

console.log(neparan6(9));
console.log(neparan6(2));



// Zadatak 4
// Varijanta 1 - Arrow f-je
let max2 = (a, b) => {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(max2(9, 4));

// Varijanta 2 - Arrow f-je, sa skracenim zapisom
let maks2 = (a, b) => (a > b) ? a : b;

console.log(maks2(1, 6));

// Maksimum 4 broja
let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));

let maks4a = (a, b, c, d) => maks2(maks2(maks2(a, b), c), d);

console.log(maks4(6, 18, -5, 12));
console.log(maks4a(6, 18, -5, 12));