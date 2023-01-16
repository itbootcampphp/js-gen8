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

// Najbolje odcenjeni film
let najboljeOcenjeni = niz => {
  let naj = niz[0];
  niz.forEach((f) => {
    if (naj.prosek() < f.prosek()) {
      naj = f;
    }
  });
  return naj;
};
console.log(najboljeOcenjeni(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
let najmanjaOcenaNajboljeg = niz => {
  let najFilm = najboljeOcenjeni(niz);
  let najslabijaOcena = najFilm.ocene[0];
  najFilm.ocene.forEach(o => {
    if(najslabijaOcena > o) {
      najslabijaOcena = o;
    }
  });
  console.log(najslabijaOcena);
}
najmanjaOcenaNajboljeg(filmovi);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
let najmanjaOcena = niz => {
  // Ovo možemo da razložimo
  /*
    let prviObjekat = niz[0]; // Ovo je objekat
    let nizOcenaPrvogObjeka = prviObjekat.ocene; // Ovo je niz ocena selektovanog objekta
    let najmanja = nizOcenaPrvogObjekta[0]; // Ovo je prva ocena iz niza ocena
  */
  let najmanja = niz[0].ocene[0];
  niz.forEach(film => {
    film.ocene.forEach(o => {
      if(o < najmanja) {
        najmanja = o;
      }
    });
  });
  return najmanja;
}
console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 

let sveOcene = niz => {
  let arrSveOcene = [];
  niz.forEach(film => {
    // arrSveOcene.push(film.ocene); // Daje niz u kome su ocene za sveki od filmova podnizovi
    arrSveOcene = arrSveOcene.concat(film.ocene); // Nema podnizova, sve je jedan veliki niz
  });
  return arrSveOcene;
}
console.log(sveOcene(filmovi));

let najcescaOcena = nizOcena => {
  let pretpostavkaNajucestalijiElem = nizOcena[0];
  let brPojavljivanjePretpostavke = 1; // Sigurno se jednom pojavila ta ocena

  for(let i=0; i<nizOcena.length; i++) {
    let tekuci = nizOcena[i]; // zvezdica
    let tekuciBrPojavljivanja = 0;

    for(let j=0; j<nizOcena.length; j++) {
      if(tekuci == nizOcena[j]) {
        tekuciBrPojavljivanja++; // našli smo isti element i treba povećati broj pojavljivanje tekućeg
      }
    }

    if(tekuciBrPojavljivanja > brPojavljivanjePretpostavke) {
      brPojavljivanjePretpostavke = tekuciBrPojavljivanja;
      pretpostavkaNajucestalijiElem = tekuci;
    }
  }

  return pretpostavkaNajucestalijiElem;
}

let nizSvihOcena = sveOcene(filmovi);
console.log(najcescaOcena(nizSvihOcena));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
let iznadOcene = (ocena, filmovi) => {
  let nizFilmova = [];
  filmovi.forEach(film => {
    if(film.prosek() > ocena) {
      nizFilmova.push(film);
    }
  });
  return nizFilmova;
}
console.log(f1.prosek(), f2.prosek(), f3.prosek());
console.log(iznadOcene(8.35, filmovi));

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
let iznadOceneNoviji = (ocena, filmovi) => {
  let nizFilmova = iznadOcene(ocena, filmovi);
  let noviji = nizFilmova[0];
  nizFilmova.forEach(f => {
    if(f.godinaIzdanja > noviji.godinaIzdanja) {
      noviji = f;
    }
  });
  console.log(noviji);
}
iznadOceneNoviji(8, filmovi);