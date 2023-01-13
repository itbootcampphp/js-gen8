import Film from "./film.js";

let f1 = new Film("Terminator", "James Cameron", 1984, [9, 7, 9, 9, 8]);
let f2 = new Film("Gospodar Prstenova", "Peter Jackson", 2001, [7, 10, 8, 6, 9, 10]);
let f3 = new Film("", "", 5, [6, 4, 7, 5, 5, 2, 3]);

f1.stampaj();
f2.stampaj();
f3.stampaj();

let filmovi = [f1, f2, f3];

console.log(f3.ocene);
console.log(`Prosečna ocena ${f1.naslov} filma je: ${f1.prosek()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
let vekFilmova = (niz, vek) => {
    let pocetnaGod = vek*100 - 99;
    let krajnjaGod = vek*100;

    niz.forEach(film => {
        if(film.godinaIzdanja>=pocetnaGod && film.godinaIzdanja<=krajnjaGod) {
            console.log(film.naslov);
        }
    });
}

vekFilmova(filmovi, 21);

// Stefanov način
/*
let vekFilmova = (niz, vek) => {
    niz.forEach((el) => {
      let vekFilma = Math.ceil(el.godinaIzdanja / 100);
      if (vekFilma == vek) {
        console.log(el);
      }
    });
  };
vekFilmova(filmovi, 20);
*/

// Nelin način
/*
let vekFilmova = (niz, vek) => {
    niz.forEach((f) => {
        if(Math.floor((f.godinaIzdanja - 1)/100) + 1 == vek) {
            console.log(f);
        }
    });
}
vekFilmova(filmovi, 20);
*/

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let prosecnaOcena = (niz) => {
    let sumaSvihOcena = 0;
    let brojOcena = 0;
    niz.forEach((f) => {
      let ocene = f.ocene;
      console.log(ocene);
      ocene.forEach((o) => {
        sumaSvihOcena += o;
        // brojOcena++;
      });
      brojOcena += ocene.length;
    });
    return sumaSvihOcena / brojOcena;
  };
console.log(`Prosecna ocena svih filmova je ${prosecnaOcena(filmovi)}`);

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova
let osrednjiFilm = niz => {
    let avgSvihFilmova = prosecnaOcena(niz); // Prosecna ocena svih filmova u nizu
    let minFilm = niz[0]; // Pretpostavka za film najbliži proseku
    let minRastojanje = Math.abs(avgSvihFilmova - minFilm.prosek());

    niz.forEach(f => {
        let rastojanje = Math.abs(avgSvihFilmova - f.prosek()); // Kolio se razlikuje proscna ocena svih filmova od prosecne ocene posmatrong filma
        if(minRastojanje > rastojanje) {
            minRastojanje = rastojanje;
            minFilm = f;
        }
    });

    return minFilm;
}
console.log(osrednjiFilm(filmovi));