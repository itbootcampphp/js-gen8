// Zadatak 2
let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    }); // ova arrow f-ja JESTE callback funkcija
    return suma;
}

// Zadatak 5
let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}

// Zadatak 7
let indexMaxVr = niz => {
    let max = niz[0];
    let idx = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            idx = i;
        }
    });
    return idx;
}

let indexMaxVr2 = niz => {
    let max = maxVr(niz);
    let idx = undefined;
    niz.forEach((el, i) => {
        if(el == max && idx == undefined) {
            idx = i;
        }
    });
    return idx;
}

let indexSvihMaxVr = niz => {
    let max = maxVr(niz);
    let indices = [];
    niz.forEach((el, i) => {
        if(el == max) {
            indices.push(i);
        }
    });
    return indices;
}

let a = [1, 3, 4, 6];
console.log(sumaElem(a)); // sumaElem NIJE callback funkcija
console.log(maxVr(a));
console.log(indexMaxVr(a));

let b = [1, 3, 6, -8, 6, 6, 4];
// console.log(indexMaxVr(b)); // 2
console.log(indexMaxVr2(b)); // 5
console.log(indexSvihMaxVr(b)); // [2, 4, 5]

let naziv = "ITBootcamp";
console.log(naziv.length);

// Zadatak 19
let duzineSvihStr = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}

// Zadatak 20
let maxDuzinaPoslednji = niz => {
    let maxd = 0;
    niz.forEach(el => {
        if(el.length > maxd) {
            maxd = el.length;
        }
    });
    let maxStr = undefined;
    niz.forEach(el => {
        if(el.length == maxd) {
            maxStr = el;
        }
    });
    return maxStr;
}

let maxDuzinaPrvi = niz => {
    let maxd = 0;
    niz.forEach(el => {
        if(el.length > maxd) {
            maxd = el.length;
        }
    });
    let maxStr = undefined;
    niz.forEach(el => {
        if(el.length == maxd && maxStr == undefined) {
            maxStr = el;
        }
    });
    return maxStr;
}

// Zadatak 21
let prosecnaDuzina = niz => {
    let duz = 0;
    niz.forEach(el => {
        duz += el.length;
    });
    return duz / niz.length;
}

let brojNatrposecnoDugih = niz => {
    let duz = prosecnaDuzina(niz);
    let br = 0;
    niz.forEach(el => {
        if(el.length > duz) {
            br++;
        }
    });
    return br;
}

// Zadatak 22
let brojSadrziA = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el.includes("a") || el.includes("A")) {
            br++;
        }
    });
    return br;
}

// Zadatak 23
let brojPocinjeA = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el[0] == "a" || el[0] == "A") {
            br++;
        }
    });
    return br;
}

let imena = ["Stefan", "Nela", "Bojan", "Nikola", "Petar", "Atanasije"];
duzineSvihStr(imena);
console.log(maxDuzinaPoslednji(imena)); // "Nikola"
console.log(maxDuzinaPrvi(imena)); // "Stefan"
console.log(prosecnaDuzina(imena));
console.log(brojNatrposecnoDugih(imena));
console.log(brojSadrziA(imena));
console.log(brojPocinjeA(imena));