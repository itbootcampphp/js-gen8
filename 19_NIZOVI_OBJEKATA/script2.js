let student1 = {
    ime: "Dragan",
    prezime: "Petrovic",
    godStudija: 3,
    ocene: [9, 8, 9, 8],
};
let student2 = {
    ime: "Milan",
    prezime: "Markovic",
    godStudija: 4,
    ocene: [10, 10, 9],
};
let student3 = {
    ime: "Milos",
    prezime: "Zarkovic",
    godStudija: 4,
    ocene: [10, 10, 10, 9],
};
let student4 = {
    ime: "Mosa",
    prezime: "Pijade",
    godStudija: 4,
    ocene: [10, 10, 10, 9],
};
let studenti = [student1, student2, student3, student4];

// Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
let prosecnaOcena = ocene => {
    let sum = 0;
    ocene.forEach(o => {
        sum += o;
    });
    return sum / ocene.length;
}

let najStudent = studenti => {

    let naj = studenti[0]; // Pretpostavka da je ovo najbolji student

    studenti.forEach( student => {
        if( prosecnaOcena(naj.ocene) < prosecnaOcena(student.ocene) ) {
            naj = student;
        }
    });

    return `${naj.ime} ${naj.prezime}`;
}
console.log(najStudent(studenti));


let najStudent1 = studenti => {

    let ime_najboljeg = "";
    let prezime_najboljeg = "";
    let prosek_najboljeg = -1;

    studenti.forEach( student => {
        let zbir = 0;
        student.ocene.forEach(ocena => {
            zbir += ocena;
        });
        let prosek = zbir / student.ocene.length;

        // > vraća prvog studenta sa najvećim prosekom
        // >= vraća poslednjeg studenta sa najvećim prosekom
        if(prosek > prosek_najboljeg) {
            prosek_najboljeg = prosek;
            ime_najboljeg = student.ime;
            prezime_najboljeg = student.prezime;
        }

    });

    return `${ime_najboljeg} ${prezime_najboljeg}`;
}
console.log(najStudent1(studenti));

let sviNajStudenti = studenti => {

    let prosek_najboljeg = -1;

    // 1. Izračunamo koji je najveći prosek
    studenti.forEach( student => {
        let zbir = 0;
        student.ocene.forEach(ocena => {
            zbir += ocena;
        });
        let prosek = zbir / student.ocene.length;

        if(prosek > prosek_najboljeg) {
            prosek_najboljeg = prosek;
        }
    });

    // 2. Tražimo sve studente koji imaju prosek koji smo dobili kao najveći u 1.
    studenti.forEach( student => {
        if(prosek_najboljeg == prosecnaOcena(student.ocene)) {
            console.log(`${student.ime} ${student.prezime}`);
        }
    });
}

sviNajStudenti(studenti);

