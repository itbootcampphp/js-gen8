let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        // resolve("Nešto resolve"); // Ako je sve prošlo ok onda je resolve
        reject("Nešto reject"); // Ako nešto nije prošlo ok onda je reject
    });
    return obj; // Vraća objekat kalse Promise
}

// Ako je Promise vratio resolve, realizuje se .then() grana
// Ako je Promise vratio reject, realizuje se .catch() grana
getSomething().then( a => {
    console.log(`Aktivirana je .then grana ${a}`);
}).catch( b => {
    console.log(`Aktivirana je .catch grana ${b}`);
})
