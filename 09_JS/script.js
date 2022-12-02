console.log("Poruka iz JS datoteke");

let y; // Deklarisali smo promenljivu y
let x = 3; // Deklarisali smo promenljivu x i dodelili joj vrednost 3
console.log(x);
x = "Pera";
console.log(x);

y = -10; // Dodeljuje se pocetna vrednost promenljive y
console.log(y);
x = 8;
console.log(x - y); // 18
let z = true;
console.log(z);

const pi = 3.141592;
console.log(pi);

let age;   // age = undefined
console.log(age); // undefined
console.log(age + 3); // NaN - Not a Number

let age2;
age2 = null;
console.log(age2); // null
console.log(age2 + 3); // 3

let ime = "Stefan";
console.log(ime);
let ime2 = 'Stefan';
console.log(ime2);

let ime3 = "Stefan's room";
console.log(ime3);

let ime4 = 'This was a "funny" joke';
console.log(ime4);

let ime5 = "This was a \"funny\" joke";
console.log(ime5);

x = 5;
// x = x + 3;
x += 3;
console.log(x);

// x = x / 2;
x /= 2;
console.log(x);

x = 6;
x++;
console.log(x);

++x;
console.log(x);

x = 6;
console.log(x++); // 6 (Prvo se iskoristi stara vrednost prom. x, pa se ona uveca)
console.log(x); // 7
console.log(++x); // 8 (Prvo se uveca vrednost prom. x, pa se onda koristi)

x = 6;
console.log(x--); // 6
console.log(--x); // 4

console.log(7 / 3); // (7) = 2 * (3) + 1 -> kolicnik: 2, ostatak: 1
console.log(7 % 3); 
console.log(24 % 18); // (24) = 1 * (18) + 6 -> kolicnik: 1, ostatak: 6

console.log((52 % 13) + 1);

x = 5;
y = 3;
console.log(x ** y);