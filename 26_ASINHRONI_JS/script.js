let request = new XMLHttpRequest();
/*
request.addEventListener("readystatechange", () => {
    //console.log(request.readyState);
    if(request.readyState === 4) {
        console.log(request.responseText);
    }
});
*/
/*
request.addEventListener("readystatechange", function() {
    //console.log(request.readyState);
    if(this.readyState === 4) {
        console.log(this.responseText);
    }
});
*/
request.addEventListener("readystatechange", () => {
    if(request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText); // data = neki js objekat
        console.log(data);
    }
    else if(request.readyState === 4) {
        console.log("Desila se greska");
    }
});
request.open("GET", "https://jsonplaceholder.typicode.com/posts");
request.send();



// Zadaci sa slajda broj 16

let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
        if(request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText); 
            resolve(data);
        }
        else if(request.readyState === 4) {
            reject("Desila se greska");
        }
    });
    request.open("GET", "https://jsonplaceholder.typicode.com/userss");
    request.send();
}

let ispisKonzola = poruka => {
    console.log(poruka);
}

// Zadatak 2
let websiteCom = niz => {
    niz.forEach(user => { // for(let i = 0; i < niz.length; i++) { let user = niz[i]; }
        if(user.website.includes(".com")) {
            console.log(user.website);
        }
    });
}
getUsers(websiteCom, ispisKonzola);

// Zadatak 3
let imeClementin = niz => {
    niz.forEach(user => {
        if(user.name.includes("Clementin")) {
            console.log(user.name);
        }
    });
}
getUsers(imeClementin, ispisKonzola);

// Zadatak 4
getUsers((niz) => {
    niz.forEach(user => {
        if(user.company.name.includes("Group") || user.company.name.includes("LLC")) {
            console.log(user.company.name);
        }
    });
}, (poruka) => {
    document.body.innerHTML += poruka;
});