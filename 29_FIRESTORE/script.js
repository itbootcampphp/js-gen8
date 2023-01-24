console.log(db); // db - objekat "baze podataka" 

let users = db.collection('users');
console.log(users);

let user1 = users.doc('jmatejic');
console.log(user1);

let user2 = db.doc('users/sstanimirovic');
console.log(user2);

/*
Kada "pikiramo" dokument preko ovih komandi,
mozemo da izvrsimo jednu od osnovne 4 operacije:
   CRUD (Create, Read, Update, Delete)
   Create: doc.set(...)
   Read  : doc.get(...)
   Update: doc.update(...)
   Delete: doc.delete(...)
Sve cetiri metode kao rezultat vracaju Promise
=> Mozemo da lancamo .then() i .catch() na bilo koju od ove 4 metode
*/

db.collection('customers')
.doc('cust001')
.set({
    name: "Laza Lazic",
    age: 35,
    addresses: ["Beograd", "Cacak"],
    salary: 400
})
.then(() => {
    console.log("Uspesno dodata musterija");
})
.catch((err) => {
    console.log("Greska: " + err);
});

db.collection('customers')
.doc('cust001')
.set({
    height: 185
}, {
    merge: true
})
.then(() => {
    console.log("Uspesno dodata musterija");
})
.catch((err) => {
    console.log("Greska: " + err);
});

console.log(1);
console.log(2);

// Update metoda
db.collection('users')
.doc('vristic')
.update({
    godine: 22,
    adrese: ["Nis", "Beograd"]
})
.then(() => {
    console.log("Korisnik uspesno promenjen");
    return db.collection('users')
    .doc('vristic')
    .update({
        adrese: firebase.firestore.FieldValue.arrayUnion("Leskovac")
    });
})
.then(() => {
    console.log("Korisnik uspesno promenjen");
})
.catch(err => {
    console.log(err);
});

