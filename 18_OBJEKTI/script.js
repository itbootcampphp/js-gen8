console.log("Objekti");

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena"
};

// Ispis celog objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis jednog propertija
console.log(blog1.title);
console.log(blog1['title']);

// Izmena propertija
blog1.content = "Osnove HTML-a";
console.log(blog1);
blog1['author'] = "Stefan";
console.log(blog1);

//////////////////////////////////

let user = {
    username: "JM",
    age: 28,
    blogs: ["IF naredba grananja", "FOR petlja", "WHILE petlja"],
    login: function() {
        console.log("Ulogovani ste");
    },
    logout: function() {
        console.log("Izlogovani ste");
    },
    logBlogs: function() {
        this.blogs.forEach(b => {
            console.log(b);
        });
    }
};

user.login();
user.logout();
user.logBlogs();
console.log(this);
user.blogs.forEach(b => {
    document.write(`<p>${b}</p>`);
})

//////////////////////////////////

let dan = {
    datum: "2021/12/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [5, 10, 15],
    // 1.
    prosecna: function() {
        let suma = 0;
        this.temperature.forEach(t => {
            suma += t;
        });
        return suma / this.temperature.length;
    },
    // 2.
    brNatprosecnih: function() {
        let br = 0;
        let avg = this.prosecna();
        this.temperature.forEach(t => {
            if(t > avg) {
                br++;
            }
        });
        return br;
    }
};
console.log(dan.prosecna());
console.log(dan.brNatprosecnih());

