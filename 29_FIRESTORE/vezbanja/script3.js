// Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
db.collection("customers")
.orderBy("name", "asc")
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Imena:");
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});

// adresa u Nisu
db.collection("customers")
.where("addresses", "array-contains", "Nis")
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Adresa u Nisu ");
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});

// plata >= 500
db.collection("customers")
.where("salary", ">=", 500)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Plata >= 500 ");
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});

// plata izmedju 300 i 800
db.collection("customers")
.where("salary", ">", 300)
.where("salary", "<", 800)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Plata izmedju 300 i 800");
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});

// Imaju platu manju od 900, i imaju 30 godina
db.collection("customers")
.where("salary", "<", 900)
.where("age", "==", 30)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Plata manja od 900 i 30 godina");
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});

// Imaju adresu u Nišu ili Beogradu
db.collection("customers")
.where("addresses", "array-contains-any", ["Nis", "Beograd"])
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Adresa Nis ili Beograd");
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});

// Imaju 22, 25 ili 28 godina
db.collection("customers")
.where("age", "in", [22, 25, 28])
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Godine");
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});


// Iz kolekcije tasks, pročitati sve zadatke, i koji su prioritetni

db.collection('tasks')
.where('priority', '==', true)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Uspesno skinut dokument: " + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});

// Treba da se izvrše u tekućoj godini
let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); // 1. januar sledece godine
//let datum2 = new Date(godina, 11, 31, 23, 59, 59, 999); // 31. decembar tekuce godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

db.collection('tasks')
.where('due_date', '>=', ts1)
.where('due_date', '<', ts2)
//.where('due_date', '<=', ts2)
.get()
.then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log("Uspesno skinut dokument: " + doc.id);
        console.log(doc.data());
    });
})
.catch((e) => {
    console.log("Greska: " + e);
});