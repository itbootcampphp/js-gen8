let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);
console.log(cars[0]); // Toyota
console.log(cars[2]); // Volvo
console.log(cars[3]); // undefined 

cars[1] = cars[1] + " 208";
console.log(cars);

let razno = [15, -3.5, "hello", true, [1, 2, 3]];
console.log(razno);

// Ispis elemenata niza cars
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Pristup elementima niza razno
for(let i = 0; i < razno.length; i++) {
    console.log(razno[i]);
}
let unutrasnjiNiz = razno[4];
for(let i = 0; i < unutrasnjiNiz.length; i++) {
    console.log(unutrasnjiNiz[i]);
}

for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}

razno[4][1] = 5;
for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}

// Uvecanje vrednosti unutrasnjeg niza za po 10%
for(let i = 0; i < razno[4].length; i++) {
    //razno[4][i] *= 1.1;
    razno[4][i] = razno[4][i] * 1.1;
}
for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}


let brojevi = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];

// Zadatak 2
let sumaElem = niz => {
    let zbir = 0;
    for(let i = 0; i < niz.length; i++) {
        zbir += niz[i];
    }
    return zbir;
}

// Zadatak 3
let proizvodElem = niz => {
    let pr = 1;
    for(let i = 0; i <= niz.length - 1; i++) {
        pr *= niz[i];
    }
    return pr;
}




// Pozivi funkcija: 
let brojevi3 = [5, 1, 2];
//console.log(sumaElem(brojevi2));
//console.log(sumaElem(brojevi));
//console.log(proizvodElem(brojevi));
console.log(proizvodElem(brojevi3));


// Zadatak 4
let srVrednost = niz => {
    let zbir = 0;
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        zbir = zbir + niz[i];
        br++;
    }
    return zbir / br;
}

console.log(srVrednost(brojevi3));

// Druga varijanta
let srVrednost2 = niz => {
    let zbir = sumaElem(niz);
    let br = niz.length;
    return zbir / br;
}

// Treca varijanta
let srVrednost3 = niz => sumaElem(niz) / niz.length;
console.log(srVrednost3(brojevi3));

// Zadatak 4a) Naci srednju vrednost parnih elemenata celobrojnog niza
let srVrednostParnih = niz => {
    let zbir = 0;
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            zbir = zbir + niz[i];
            br++;
        }
    }
    return zbir / br;
}

console.log(srVrednostParnih(brojevi3));

// Zadatak 5
let maxNiza = niz => {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max) { 
            max = niz[i];
        }
    }
    return max;
}

let br = [8, 11, 10, 11, 4];
console.log(maxNiza(br));

// Zadatak 6
let minNiza = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < min) { 
            min = niz[i];
        }
    }
    return min;
}
console.log(minNiza(br));

// Zadatak 7 - Odrediti indeks maksimalnog elementa celobrojnog niza.
// Ovakva funkcija vraća indeks poslednjeg maksimuma
let indMaxNiza = niz => {
    let max = maxNiza(niz);
    let indeks = -1;
    for(let i = 0; i < niz.length; i++) {
        if(max == niz[i]) {
            indeks = i;
        }
    }
    return indeks;
}
let elementi = [15, 13, 15, 10, 15];
console.log(indMaxNiza(elementi));

// Ovakva funkcija vraća indeks prvog maksimuma
let indMaxNiza2 = niz => {
    let max = maxNiza(niz);
    let indeks = -1;
    for(let i = 0; i < niz.length; i++) {
        if(max == niz[i]) {
            indeks = i;
            break
        }
    }
    return indeks;
}
console.log(indMaxNiza2(elementi));

// Ovakva funkcija vraća indeks prvog maksimuma
let indMaxNiza3 = niz => {
    let max = maxNiza(niz);
    for(let i = 0; i < niz.length; i++) {
        if(max == niz[i]) {
            return i;
        }
    } 
}
console.log(indMaxNiza3(elementi));

// Zadatak 12 - Odrediti broj parnih elemenata sa neparnim indeksom.
let paranBrNeparanInd = niz => {
    let br = 0;
    for(let i=0; i < niz.length; i++) {
        if(niz[i] % 2 == 0 && i % 2 != 0) {
            br++; 
        }
    }
    return br;
}
// niz = [10, 12, 11, 13, 14, 16]
// br = 2
// i = 5
let nn = [10, 12, 11, 13, 14, 16];
console.log(paranBrNeparanInd(nn));

let paranBrNeparanInd1 = niz => {
    let br = 0;
    for(let i=1; i < niz.length; i+=2) {
        if(niz[i] % 2 == 0) {
            br++; 
        }
    }
    return br;
}
console.log(paranBrNeparanInd1(nn));

// 5 -> -5
// -10 -> 10