// Funkcija 1: niz => {for petljom prodjemo kroz sve elemente niza, i svaki ispisemo u konzoli}
// Funkcija 2: niz => {for petljom prodjemo kroz sve elemente niza, i svaki ispisemo u div element}
// moze li ovako?
// Funkcija: (niz, nacinIspisa) => {for petljom prodjemo kroz sve elemente niza, i svaki ispisemo
//                                  na zadati nacin}

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById("container");
    div.innerHTML = poruka;
}

function ispisNiza(niz, cb) {
    let poruka = "";
    for(let i = 0; i < niz.length; i++) {
        poruka += (niz[i] + " ");
    }
    cb(poruka);
}

ispisKonzola("bla bla");
ispisStranica("bla bla bla");

let a = [6, -8, 10, 0, 5];
let b = ["pera", "mika", "laza"];
ispisNiza(a, ispisStranica);  // 1) ispisNiza, pa tek kasnije ispisStanica (iz tog razloga je ispisStranica CALLBACK funkcija)
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);

//ispisNiza(a, ispisStranica(b)); // 1) ispisStranica(b) -> nesto,   2) ispisNiza(a, nesto)

a.forEach(ispisKonzola);
// forEach petlja je metoda koja za svaki element niza poziva callback funkciju,
// a kao parametar te callback funkcije prosledjuje bas taj element niza
// Konkretno, 35. linija koda za niz a poziva sledece:
// ispisKonzola(6);
// ispisKonzola(-8);
// ispisKonzola(10);
// ispisKonzola(0);
// ispisKonzola(5);

b.forEach(ispisKonzola);
// ispisKonzola("pera");
// ispisKonzola("mika");
// ispisKonzola("laza");

a.forEach(function(element) {
    console.log(element);
});
// forEach ce, za svaki element niza a, da pozove anonimnu f-ju i prosledice svaki put po jedan element niza

a.forEach(elem => {
    console.log(elem);
});
// 1) Poziva se arrow f-ja sa parametrom a[1] (elem postaje a[1])
// 2) Poziva se arrow f-ja sa parametrom a[2] (elem postaje a[2])
// .....
// 5) Poziva se arrow f-ja sa parametrom a[5] (elem postaje a[5])