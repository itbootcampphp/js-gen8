console.log("Nizovi objekata");

let blog1 = {
    title: "HTML",
    likes: 30,
    dislikes: 5
};

let blog2 = {
    title: "CSS",
    likes: 20,
    dislikes: 15
};

let blog3 = {
    title: "Java Script",
    likes: 70,
    dislikes: 7
};

let blogs = [blog1, blog2, blog3];

// Ispis niza objekata
console.log(blogs); 

// Ispis jednog objekta iz niza
console.log(blogs[2]);

// Ispis propertija
console.log(blogs[2].title);
console.log(blogs[2]["title"]);

// Ispis svih naslova blogova u konzoli
blogs.forEach(blog => {
    console.log(blog.title);
});

// Ispis svih naslova blogova na stranici
for(let i = 0; i < blogs.length; i++) {
    document.body.innerHTML += `<h3>${blogs[i].title}</h3>`;
    document.body.innerHTML += `<p>likes: ${blogs[i].likes}</p>`;
    document.body.innerHTML += `<p>dislikes: ${blogs[i].dislikes}</p>`;
}

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumLikes = arrObjs => {
    let sum = 0;
    arrObjs.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}
console.log(sumLikes(blogs));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let avgLikes = blogs => {
    return sumLikes(blogs) / blogs.length;
}
console.log(`Prosečan broj lajkova je: ${avgLikes(blogs)}`);

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
// Zlatko
let visePozitivnih = blogs => {
    for(let i = 0; i < blogs.length; i++) {
        if(blogs[i].likes > blogs[i].dislikes) {
            console.log(blogs[i].title);
        }
    }
}
visePozitivnih(blogs);

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
// Desimir
let duploLikes = (arrObjs) => {
    let titles = "";
    for (i = 0; i < arrObjs.length; i++) {
      if (arrObjs[i].likes >= arrObjs[i].dislikes * 2) {
        titles += arrObjs[i].title + "," + " ";
      }
    }
    return titles;
  };
document.body.innerHTML += `<p>Pozitivni blogovi sam najmanje duplo vise lajkova su: ${duploLikes(blogs)}</p>`;

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
// Tijana
let uzvicnik = niz => {
    niz.forEach(e => {
        if (e.title.endsWith("!")) {
            console.log(e.title);
        }
    });
}
uzvicnik(blogs);

// Nela
let uzvik = arrObj => {
    arrObj.forEach(obj => {
        if(obj.title[obj.title.length-1] == '!') {
            console.log(obj.title);
        }
    });
}
uzvik(blogs);

