// 1. Ispisati brojeve od 1 do 20
let w = 1;
while(w <= 20) {
    console.log(w);
    w++; // w+=1; // w = w + 1;
}

for(i=1; i<=20; i++) {
    console.log(i);
}

// 2. Ispisati brojeve od 20 do 1
for(i=20; i>=1; i--) {
    console.log(i);
}

// 3. Ispisati parne brojeve od 1 do 20 
// 1. način
for(i=1; i<=20; i++) {
    if(i%2 == 0) {
        console.log(i);
    }
}

// 2. način
for(i=2; i<=20; i+=2){
    console.log(i);
}

// 5. Odrediti sumu brojeva od 1 do n
let s = 0;
let n = 5;
for(i=1; i<=n; i++) {
    s += i;
}
console.log(`Suma je: ${s}`);

// 7. Odrediti proizvod brojeva od n do m
n = 2;
m = 5;
pro = 1;
for(i=n; i<=m; i++) {
    pro = pro * i; // pro *= i;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${pro}`);

// 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
// 1.jpg
// 2.jpg
// 3.jpg
for(i=1; i<=3; i++) {
    document.write(`<img src="slike/${i}.jpg">`);
}

// Ispisati prvih n parnih brojeva počevši od broja 2
n = 3;
i = 2;
br_parnih = 0;

while(br_parnih < n) {
    if(i%2 == 0) {
        br_parnih++;
        console.log(`${br_parnih}. od ${n} parnih je broj ${i}`);
    }
    i++;
}

// Koliko neparnih brojeva učestvuje u sumiranju dok suma ne pređe broj k
let k = 10;
let suma = 0;
let br_brojeva = 0; // Pitam se?
let ii = 1;

while(suma < k) {
    if(ii%2 != 0) {
        suma += ii;
        br_brojeva++;
    }
    ii++;
}
console.log(br_brojeva-1);

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let deljiv13 = 0;
for(b=5; b<=150; b++) {
    if(b%13 == 0) {
        deljiv13++;
    }    
}
console.log(`U intervalu od 5 do 150 ima ${deljiv13} brojeva koji su deljivi brojem 13`);
// 13, 26, 39, 52, 65, 78, 91, 104, 117, 130, 143

// Ispisati aritmetičku sredinu brojeva od n do m.
n = 10;
m = 14;
let zbir = 0;
br_brojeva = 0;

for(i=n; i<=m; i++) {
    zbir += i;
    br_brojeva++;
}
let arsr = zbir / br_brojeva;
console.log(`Aritmetička sredina je: ${arsr}`);
// (10+11+12+13+14) / 5 = 60 / 5 = 12


// 1045 % 10 = 5
// 423 % 10 = 3