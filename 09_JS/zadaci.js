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