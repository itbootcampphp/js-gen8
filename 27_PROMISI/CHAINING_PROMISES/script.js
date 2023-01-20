console.log("CALLBACK");

let getResponse = resource => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resource);

    // 3. Slanje zahteva
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () =>{
            if(request.readyState == 4 && request.status == 200) {
                resolve(request.responseText); // Sve OK i koristimo resolve kome prosleđujemo podatke iy json fajla
            }
            else if(request.readyState == 4) {
                reject("Nije moguće dohvatiti podatke")// Nešto nije OK i koristimo reject kome šaljemo tekst greške
            }
        });
    });   
}

getResponse("../JSON/prvi.json").then(sadrzaj => {
    console.log("prvi.json resolved", sadrzaj);
    return getResponse("../JSON/drugi.json"); // Vraća Promis, ukoliko je resolved, na njega se odnosi naredni then
}).then(sadrzajDrugog => {
    console.log("drugi.json resolved", sadrzajDrugog);
    return getResponse("../JSON/treci.json"); // Vrća Promis, ukoliko je resolved, na njega se odnosi naredni then
}).then(sadrzajTreceg => {
    console.log("treci.json resolved", sadrzajTreceg);
}).catch(greska => {
    console.log("Promise reject", greska);
});

console.log("KRAJ");