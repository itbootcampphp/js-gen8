// Zadatak 1a)
let i = 1;
while(i <= 20)
{
    console.log(i);
    i++;
}

// Zadatak 1b)
i = 1;
let poruka = "";
while(i <= 20)
{
    poruka += (i + " "); // poruka = poruka + i + " ";
    i++;  // i += 1; // i = i + 1;
}
console.log(poruka);

/*

 #  |    poruka        |    i
 ------------------------------
 0  |      ""          |    1
 1  |     "1 "         |    2
 2  |    "1 2 "        |    3
 3  |  "1 2 3 "        |    4
 ...|  ....            |   ...
 20 | "1 2 ... 19 20 " |   21

*/

// Zadatak 2
// 1. nacin
i = 20;
let k = 1;
while(i >= 1)
{
    console.log(`${i}`);
    i--; // i -= 1; // i = i - 1;
    // i -= k; //i = i - k;
}

// 2. nacin
i = 1;
while(i <= 20)
{
    console.log(21 - i);
    i++;
}
/*
i = 1    ->   20 = 21 - i
i = 2    ->   19 = 21 - i
i = 3    ->   18 = 21 - i
.....   
i = 19   ->    2 = 21 - i
i = 20   ->    1 = 21 - i
*/



// broj 20:     let i = 20;
// string "20": let j = "20"; // string od dva karaktera: '2' i '0'
// console.log(20 + 30);  // 50
// console.log("20" + "30"); // "2030"
// console.log(20 + "30");  // "2030"
// console.log("20" + 30); // "2030" 

// Zadatak 3
// 1. nacin
i = 1;
while(i <= 20)
{
    if(i % 2 == 0)
    {
        console.log(i);
    }
    i++;
}

/*
#     |    i
--------------
0     |    1
1     |    1
2     |    1
3     |    1 
4     |    1
........
*/

// 2. nacin
i = 2;
while(i <= 20)
{
    console.log(i);
    i += 2;   // i = i + 2;
}

// Zadatak 4
let n = 7;
i = 1;
while(i <= n)
{
    if(i % 3 == 0)
    {
        document.body.innerHTML += "<p class='plava'>Neki tekst</p>";
    }
    else if(i % 3 == 1)
    {
        document.body.innerHTML += "<p class='zelena'>Neki tekst</p>";
    }
    else 
    {
        document.body.innerHTML += "<p class='crvena'>Neki tekst</p>";
    }
    i++;
}

// Zadatak 6 (suma brojeva od 1 do 100)
i = 1;
let suma = 0;
while(i <= 100)
{
    suma += i; //suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je: ${suma}`);

/*
#   |   suma   |   i
--------------------------
0   |    0     |   1
1   |    1     |   2
2   |    3     |   3
3   |    6     |   4
4   |   10     |   5
5   |   15     |   6
*/

// Zadatak 10
n = 2;
let m = 6;
let sumaKvadrataParnih = 0;
let sumaKubovaNeparnih = 0;
i = n;
while(i <= m)
{
    if(i % 2 == 0)
    {
        //sumaKvadrataParnih += (i * i);
        sumaKvadrataParnih += (i ** 2);
    }
    else
    {
        sumaKubovaNeparnih += (i ** 3);
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} jednaka je: ${sumaKvadrataParnih}`);
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} jednaka je: ${sumaKubovaNeparnih}`);

// Zadatak 11
k = 4;
i = 1;
let brojDelioca = 0;
while(i <= k)
{
    if(k % i == 0)
    {
        brojDelioca++;
    }
    i++;
}
console.log(`Broj delioca broja ${k} jednak je: ${brojDelioca}`);

// Zadatak 12
if(brojDelioca == 2)
{
    console.log(`Broj ${k} je prost`);
}
else 
{
    console.log(`Broj ${k} je slozen`);
}