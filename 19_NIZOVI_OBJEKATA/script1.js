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

let blog4 = {
    title: "Responsive web design",
    likes: 3,
    dislikes: 15
};

let blog5 = {
    title: "NoSQL DB",
    likes: 200,
    dislikes: 15
};

let blog6 = {
    title: "Event Listener",
    likes: 700,
    dislikes: 70
};

let user = {
    username: "Jelena",
    age: 28,
    blogs: [blog1, blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

let user1 = {
    username: "Stefan",
    age: 13,
    blogs: [blog4, blog5],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
}

let user2 = {
    username: "JohnDoe",
    age: 6,
    blogs: [blog6],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
}

////////////////////////////////

// Ispisati sve blogove korisnika user
console.log(user.blogs);

console.log(user.blogs[0]); // Ovo je prvi blog korisnika user
console.log(user.blogs[0].title);// Ispisati naslov prvog bloga koji je napisao korisnik user

user.logBlogs();

////////////////////////////////

let users = [user, user1, user2];

// Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(u => {
    if(u.age < 18) {
        console.log(u.username);
    }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(user => {
    let blogs = user.blogs; // niz blogova tekućeg user-a
    blogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    });
});

// Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(user => {
    if(user.username == "JohnDoe") {
        user.logBlogs();
    }
});

// Napraviti arrow funkciju kojoj se prosleđuje username autora, a ona ispisuje sve njegove blogove
let printBlogs = username => {
    users.forEach(user => {
        if(user.username == username) {
            user.logBlogs();
        }
    });
}
printBlogs("Stefan");