// Prioritet u logičkim operatorima:
// 1. !
// 2. &&
// 3. ||

// and - &&
// daje true isključivo ako imamo true && true
let a = -5;
let b = -6;

if(a==5 && b==6) {
    console.log("Hello!")
}

// or - ||
// NE daje true isključivo ako su oba izraza netačna
// tj. daje true ukoliko je makar jedan izraz tačan

if(a==5 || b==6) {
    console.log("world");
}

let c = 7;
if(a==5 && b==6 && c==7) {
    console.log(`Sva tri su tačna`);
}
else {
    console.log(`Neki od uslova nije tačan`);
}

if(a==5 || b==6 || c==7) {
    console.log(`Makar jedan od uslova je tačan`);
}
else {
    console.log(`Ni jedan od uslova nije tačan tj. svi uslovi su netačni`);
}

if(c != 7) {
    console.log(`c je različito od 7`);
}

if( !(c==7) ) {
    console.log(`c je različito od 7`);
}

// 23. Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
let god = 2002;
if( (god%4==0 && god%100!=0) || god%400==0 ) {
    console.log(`Godina ${god}. je prestupna`);
}
else {
    console.log(`Godina ${god}. nije prestupna`);
}

// 24. Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren. U suprotnom ispisati “zatvoreno”.

// Ko bude imao vremena: Ukoliko je butik trenutno otvoren, prikazati i sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati i sličicu zatvorenih vrata.

let dan = 3;
let sat = 22;

if(dan==0 || dan==6) {
    // Vikend
    if(sat>=10 && sat<18) {
        console.log(`Vikend je i butik je trenutno otvoren`);
        document.write(`<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg">`);
    }
    else {
        console.log(`Vikend je i butik je trenutno zatoren`);
        document.write(`<img src="close.png">`);
    }
}
else {
    // Radni dan
    if(sat>=9 && sat<20) {
        console.log(`Radni dan je i butik je trenutno otvoren`);
        document.write(`<img src="https://thumbs.dreamstime.com/b/open-sign-isolated-11711817.jpg">`);
    }
    else {
        console.log(`Radni dan je i butik je trenutno zatvoren`);
        document.write(`<img src="close.png">`);
    }
}