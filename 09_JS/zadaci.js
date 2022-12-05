// Zadatak 1
let sati = 23;
let minuti = 59;
let odPonoci = sati * 60 + minuti;
console.log(odPonoci);

let doPonoci = 24 * 60 - odPonoci;
console.log(doPonoci);

// Zadatak 2
// 1. nacin
let minOdPonoci = 95;
let hours = Math.floor(minOdPonoci / 60);
let minutes = minOdPonoci % 60;
console.log(hours + ":" + minutes);

// 2. nacin
minutes = minOdPonoci % 60;   
hours = (minOdPonoci - minutes) / 60;  
console.log(hours + ":" + minutes);


// Zadatak 4
let datum = new Date(); // datum je objekat koji sadrzi info o trenutnom datumu i vremenu
//let mesec = datum.getMonth() + 1;
//console.log(datum.getFullYear() + "/" + mesec);
let h = datum.getHours();
let m = datum.getMinutes();
console.log(h + ":" + m);
let mop = h * 60 + m;
console.log(mop);

// Zadatak 3
let ukupnaCenaRobe = 1399;
let novcanica = 2000;
let kusur = novcanica - ukupnaCenaRobe;
console.log(kusur);

// Zadatak 5
let dan = datum.getDate();
let mesec = datum.getMonth() + 1;
let godina = datum.getFullYear();
console.log(dan + "." + mesec + "." + godina);
console.log(godina + "/" + mesec + "/" + dan);
document.getElementById("naslov1").innerHTML = "Bla bla bla " + dan + "." + mesec + "." + godina; 

// Zadatak 6
// Prva konverzija
let euro = 150;
let kurs = 117.2986;
let dinara = euro * kurs;
console.log(dinara);

// Druga konverzija
let novacDinara = 13000;
let konverzijaEuro = novacDinara / kurs;
console.log(konverzijaEuro);

// Zadatak 8
// Prva konverzija
let c1 = 0;
let f1 = c1 * 1.8 + 32;
console.log(f1);

// Druga konverzija
let f2 = 54;
let c2 = (f2 - 32) / 1.8;
console.log(c2);