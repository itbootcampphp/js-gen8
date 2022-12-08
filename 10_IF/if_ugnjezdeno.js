// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.
let a = 10;
let b = 20;
let c = 15;

if(a > b) {
    if(a > c) {
        console.log(`Najveći broj je ${a}`);
        if(b > c) {
            console.log(`Srednji broj je ${b}`);
            console.log(`Najmanji broj je ${c}`);
        }
        else {
            console.log(`Srednji broj je ${c}`);
            console.log(`Najmanji broj je ${b}`);
        }
    }
    else {
        console.log(`Najveći broj je ${c}`);
        console.log(`Srednji broj je ${a}`);
        console.log(`Najmanji broj je ${b}`);
    }
}
else {
    // a < b
    // Ili je b najveći ili je c najveći
    if(b > c) {
        console.log(`Najveći broj je ${b}`);
        if(a > c) {
            console.log(`Srednji broj je ${a}`);
            console.log(`Najmanji broj je ${c}`);
        }
        else {
            console.log(`Srednji broj je ${c}`);
            console.log(`Najmanji broj je ${a}`);
        }
    }
    else {
        console.log(`Najveći broj je ${c}`); 
        console.log(`Srednji broj je ${b}`);
        console.log(`Najmanji broj je ${a}`);
    }
}

// 20. Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.
d1 = 12;
m1 = 12;
g1 = 2020;

d2 = 12;
m2 = 12;
g2 = 2019;

if(g1 < g2) {
    console.log(`Raniji datum je: ${d1}.${m1}.${g1}.`);
}
else if(g2 < g1) {
    console.log(`Raniji datum je: ${d2}.${m2}.${g2}.`);
}
else {
    // Obuhvata one slucajeve kada su godine iste
    if(m1 < m2) {
        console.log(`Raniji datum je: ${d1}.${m1}.${g1}.`);
    }
    else if(m2 < m1) {
        console.log(`Raniji datum je: ${d2}.${m2}.${g2}.`);
    }
    else {
        // Obuhvata one slucajeve kada su i meseci isti
        if(d1 < d2) {
            console.log(`Raniji datum je: ${d1}.${m1}.${g1}.`);
        }
        else if(d2 < d1) {
            console.log(`Raniji datum je: ${d2}.${m2}.${g2}.`);
        }
        else {
            console.log(`Datumi su isti`);
        }
    }
}

