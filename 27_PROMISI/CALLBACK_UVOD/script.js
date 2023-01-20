console.log("Primeri callback funkcija");

let myFunc = callback => {
    callback();
}

myFunc(() => {
    console.log("Callback funkcija okinuta");
});

////////////////////////////////
// callback funkcija za sabiranje dva broja
////////////////////////////////

let sum = funkcija => {
    funkcija(5, 7);
}

// 1.
// Kreirali smo posebnu funkciju koja nam služi kao realizacija i koju ćemo prosleđivati kao parametar
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum); // Poziv funkcije koja realizuje callback ide bez zagrada


//2. 
sum((a, b) => {
    console.log(a + b);
});

////////////////////////////////

let racunaj = (str, cb) => {
    console.log(str);
    let rez = cb(10, 5);
    console.log(rez);
}

racunaj("Oduzimanje", (x, y) => {
    return x-y;
});

racunaj("Deljenje", (x, y) => {
    return x/y;
});

////////////////////////////////

let racunaj2 = (str, br1, br2, funcija) => {
    console.log(str, funcija(br1, br2));
}

racunaj2("Množenje", 4, 7, (x, y) => {
    return x*y;
});

