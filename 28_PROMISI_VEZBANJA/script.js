let form = document.getElementById("order");
let truckCap = document.getElementById("cap");
let result = document.getElementById("result");

function getItems(resourse, resolve, reject) {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function() {
        if(request.readyState === 4 && request.status === 200) {
            // sve ok, obradi zahtev
            let data = JSON.parse(request.responseText);
            resolve(data);
        }
        else if(request.readyState === 4) {
            // desila se neka greska
            reject("Greska");
        }
    });
    request.open("GET", resourse);
    request.send();
}

function submitForm1(e) {
    e.preventDefault();
    // 1. Iz fajla stock.json dohvati sve artikle koji nisu na stanju
    let ids = [];
    getItems("./json/stock.json", (data) => {
        data.forEach(artikal => {
            if(artikal.stock == 0) {
                ids.push(artikal.id);
            }
        });
        
        // 2. Iz fajla weights.json dohvati njihovu tezinu
        getItems("./json/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(artikal => {
                if(ids.includes(artikal.id)) {
                    totalWeight += artikal.weight;
                }
            });
            if(totalWeight > truckCap.value) {
                result.innerHTML = "Kamion nema dovoljni kapacitet";
            }
            else {
                // 3. Ako tezina nije veca od kapaciteta kamiona, iz fajla prices.json dohvati njihovu cenu
                getItems("./json/prices.json", (data) => {
                    let totalPrice = 0;
                    data.forEach(artikal => {
                        if(ids.includes(artikal.id)) {
                            totalPrice += artikal.price;
                        }
                    }); 
                    result.innerHTML = `Ukupna cena proizvoda koji treba da se naruce je: ${totalPrice}`;
                }, (message) => {
                    result.innerHTML = message;
                });
            }

        }, (message) => {
            result.innerHTML = message;
        });

    }, (message) => {
        result.innerHTML = message;
    });
    
}

/*
PRVI PRISTUP: Da se funkcije getItems() zovu jedna ispod druge
   OVO NIJE DOBRO!!!!
jer svaki poziv getItems() je asinhroni poziv, sto znaci da se oni ne izvrsavaju tim redom

DRUGI PRISTUP: Redosled asinhronih poziva se odvija preko callback funkcija
   JESTE TACAN, ali jako nepraktican (callback hell)

TRECI PRISTUP: Pozivi lancaju preko promisa
   TACAN I PRAKTICAN
*/


function getItemsReturnPromise(resourse) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener("readystatechange", function() {
            if(request.readyState === 4 && request.status === 200) {
                // sve ok, obradi zahtev
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if(request.readyState === 4) {
                // desila se neka greska
                reject("Greska");
            }
        });
        request.open("GET", resourse);
        request.send();
    });
}

function submitForm2(e) {
    e.preventDefault();
    let ids = [];
    getItemsReturnPromise("./json/stock.json")
    .then((data) => {
        data.forEach(artikal => {
            if(artikal.stock == 0) {
                ids.push(artikal.id);
            }
        });
        return getItemsReturnPromise("./json/weights.json");
    })
    .then((data) => {
        let totalWeight = 0;
        data.forEach(artikal => {
            if(ids.includes(artikal.id)) {
                totalWeight += artikal.weight;
            }
        });
        if(totalWeight > truckCap.value) {
            result.innerHTML = "Kamion nema dovoljni kapacitet";
        }
        else {
            return getItemsReturnPromise("./json/prices.json");
        }
    })
    .then((data) => {
        if(data !== undefined) {
            let totalPrice = 0;
            data.forEach(artikal => {
                if(ids.includes(artikal.id)) {
                    totalPrice += artikal.price;
                }
            }); 
            result.innerHTML = `Ukupna cena proizvoda koji treba da se naruce je: ${totalPrice}`;
        }
    })
    .catch((message) => {
        result.innerHTML = message;
    });
}

//form.addEventListener("submit", submitForm1);
form.addEventListener("submit", submitForm2);