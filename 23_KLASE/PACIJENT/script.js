import { Pacijent } from "./pacijent.js";

let p1 = new Pacijent("Milica", 1.65, 45);
let p2 = new Pacijent("Goran", 2.02, 105);
let p3 = new Pacijent("Milan", 1.69, 70);
let p4 = new Pacijent("Ana", 1.73, 70);

let pacijenti = [p1, p2, p3, p4];

// Ispisati podatke o pacijentu sa najmanjom težinom.
let btnMinTezina = document.getElementById("racunajMinTezinu");
let pMinTezina = document.getElementById("minTezina");

btnMinTezina.addEventListener("click", () => {
    let minPac = pacijenti[0];
    pacijenti.forEach( p => {
        if(p.težina < minPac.težina) {
            minPac = p;
        }
    });
    minPac.stampaj();
    pMinTezina.innerHTML = minPac.stampajListu();
});

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.
let srednjaVisina = niz => {
    let sumaVisina = 0;
    let brPac = niz.length;
    niz.forEach(p => {
        sumaVisina += p.visina;
    });
    return sumaVisina / brPac;
}
console.log(srednjaVisina(pacijenti));

let divAvgVisina = document.querySelector("#avgVisina");
divAvgVisina.innerHTML = `Prosečna visina svih pacijenata je: ${srednjaVisina(pacijenti)}`;

// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
// Vladislav - forEach petlja
let btnMaxBMI = document.getElementById("racunajNajveciBMI");
let maximalniBMI = document.getElementById("maxBMI");
btnMaxBMI.addEventListener("click", () => {
    let najvecaBMIvrednost = pacijenti[0];
    pacijenti.forEach(pacijent => {
        if (najvecaBMIvrednost.bmi() < pacijent.bmi()) {
            najvecaBMIvrednost = pacijent;
        }
        najvecaBMIvrednost.stampaj();
    });
    
    maximalniBMI.innerHTML = najvecaBMIvrednost.stampajListu();
});

// 2. Način
// Jelena - for petlja
/*
let btnBMI = document.getElementById("racunajNajveciBMI");
let pBMI = document.getElementById("maxBMI");
btnBMI.addEventListener("click", () => {
let najveciBMI = pacijenti[0];
for(let i = 1; i < pacijenti.length; i++){
  if(najveciBMI.bmi() < pacijenti[i].bmi()){//za pretpostavljeni najveci pozivam metodu koja odr bmi i za neki clan niza pozivam istu bmi metodu
    najveciBMI = pacijenti[i];  //ako je neki drugi veci, zameni koji je najveci i daj mi podatke tog pacijenta
  }
}
  najveciBMI.stampaj();
  pBMI.innerHTML= najveciBMI.stampajListu();
});
*/

