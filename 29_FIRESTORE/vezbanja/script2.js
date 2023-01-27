/*
db.collection('customers')
.doc('cust001')
.delete()
.then(() => {
    console.log("Dokument uspesno izbrisan");
})
.catch((e) => {
    console.log("Desila se greska: " + e);
});
*/

// Dodavanje dokumenta u kolekciju preko metode add()
/*
db.collection('customers')
.add({
    name: "Mika Mikic",
    age: 25,
    salary: 800,
    addresses: ["Beograd", "Novi Sad"]
})
.then(() => {
    console.log("Dokument uspesno dodat");
})
.catch((e) => {
    console.log("Desila se greska: " + e);
});
*/

// 1) Moze se dohvatiti jedan dokument
// 2) Moze se dohvatiti vise dokumenta

// 1)
/*
db.collection('users')
.doc('vristic')
.get()
.then((doc) => {
    if(doc.exists) {
        let data = doc.data();
        console.log("Uspesno skinut dokument: " + doc.id);
        console.log(data);
    }
    else {
        console.log("Ne postoji dati dokument");
    }
})
.catch((e) => {
    console.log("Greska: " + e);
});
*/

// 2) 
/*
db.collection('customers')
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
*/


// GET metoda kod kolekcije:
// 1) Prikazivanje dokumenata u odredjenom redosledu (orderBy)
// 2) Prikazivanje odredjenog broja dokumenata (limit)
// 3) Prikazivanje dokumenata koji zadovoljavaju odredjene kriterijume - filtriranje (where)


// 1) orderBy:
/*
db.collection('customers')
.orderBy('salary', 'desc')
.orderBy('name', 'asc')
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
*/

// 2) limit:
/*
db.collection('customers')
.orderBy('salary', 'desc')
.orderBy('name', 'asc')
.limit(3)
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
*/

// 3) where:
db.collection('customers')
//.where('salary', '>', 500)   // - svi oni cija je plata veca od 500
//.where('salary', '<=', 600)    // - svi oni cija je plata manja ili jednaka od 600
//.where('name', 'in', ['Laza', 'Mika'])
.where('salary', '<', 900)
.where('age', '==', 30)
//.orderBy('name')
//.orderBy('age')
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