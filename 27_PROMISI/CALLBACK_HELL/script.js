console.log("CALLBACK");

let getResponse = (resource, callback) => {
    // 1. Kreiranje XML objekta
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () =>{
        if(request.readyState == 4 && request.status == 200) {
            // Sve OK
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if(request.readyState == 4) {
            // Nešto nije OK
            // console.log("Nije moguće dohvatiti podatke");
            callback(undefined, "Nije moguće dohvatiti podatke");
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open("GET", resource);

    // 3. Slanje zahteva
    request.send();
}

// Učitaj najpre prvi.json fajl
getResponse("../JSON/prvi.json", (data, err) => {
    if(data) {
        // Ukoliko je sve OK sa prvi.json fajlom, ispiši njegove podatke i potom učitaj drugi.json fajl
        console.log(data); 
        getResponse("../JSON/drugi.json", (data, err) => {
            if(data) {
                // Ukoliko je sve OK sa drugi.json fajlom, ispiši njegove podatke i potom učitaj treci.json fajl
                console.log(data);
                getResponse("../JSON/treci.json", (data, err) => {
                    if(data) {
                        console.log(data);
                    }
                    else {
                        console.log(err); // Ispisuje grešku ukoliko treci.json fajl nije prošao
                    }
                });
            }
            else {
                console.log(err); // Ispisuje grešku ukoliko drugi.json fajl nije prošao
            }
        });   
    }
    else {
        console.log(err); // Ispisuje grešku ako prvi.json fajl nije prošao
    }
});

console.log("KRAJ");