let ul = document.querySelector("ul");
let divError = document.getElementById("error");
let form = document.querySelector("form");

/*
db.collection('tasks')
.orderBy('start_date', 'desc')
.get()
.then((snapshot) => {
    snapshot.forEach(doc => {
        let task = doc.data();
        let li = document.createElement('li');
        li.innerHTML = `${task.title} (${task.start_date.toDate()}) [${task.description}]`;
        if(task.priority == true) {
            li.style.color = 'red';
        }
        ul.append(li);
    });
})
.catch((e) => {
    divError.innerHTML = `An error occured: ${e}`;
    divError.style.color = 'red';
});
*/

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let title = this.title.value;
    let start_date = this.start_date.value;
    let due_date = this.due_date.value;
    let priority = this.priority.checked;
    let description = this.description.value;
    //alert(title + ", " + start_date + ", " + due_date + ", " + priority + ", " + description);

    let date1 = new Date(start_date);
    let date2 = new Date(due_date);
    let ts1 = firebase.firestore.Timestamp.fromDate(date1);
    let ts2 = firebase.firestore.Timestamp.fromDate(date2);

    let obj = {
        title: title,
        start_date: ts1,
        due_date: ts2,
        priority: priority,
        description: description
    };

    db.collection('tasks')
    .add(obj)
    .then(() => {
        divError.innerHTML = `Task successfully added!`;
        divError.style.color = 'green';
    })
    .catch((e) => {
        divError.innerHTML = `An error occured: ${e}`;
        divError.style.color = 'red';
    });
});

// Umesto direktnog pristupa dokumentima neke kolekcije,
// mnogo je bolje pristupati "snapshotovima"
// odnosno, osluskivati promene u kolekciji

db.collection('tasks')
.onSnapshot((snapshot) => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        let type = change.type; // tip promene (added, removed)
        let doc = change.doc; // sam dokument koji je izazvao promenu
        if(type == "added") {
            let task = doc.data();
            let li = document.createElement('li');
            li.id = doc.id;
            li.innerHTML = `${task.title} (${task.start_date.toDate()}) [${task.description}]`;
            if(task.priority == true) {
                li.style.color = 'red';
            }
            ul.append(li);
            let button = document.createElement("button");
            button.innerHTML = "Obrisi task";
            li.append(button);
        }
        else if(type == "removed") {
            let id = doc.id;
            let li = document.getElementById(id);
            li.remove();
        }
    });
});

ul.addEventListener("click", function(e) {
    if(e.target.tagName === "BUTTON") {
        console.log(e.target, e.target.parentElement);
        let li = e.target.parentElement;
        let id = li.id;
        db.collection('tasks')
        .doc(id)
        .delete()
        .then(() => {
            divError.innerHTML = `Task successfully deleted!`;
            divError.style.color = 'orange';
        })
        .catch((e) => {
            divError.innerHTML = `An error occured: ${e}`;
            divError.style.color = 'red';
        });
    }
});