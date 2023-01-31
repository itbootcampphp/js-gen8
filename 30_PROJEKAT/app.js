import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';

let chatroom = new Chatroom("#js", "Stefan");

chatroom.getChats(data => {
    console.log(data);
});

///////////////////////////////////////

let ul = document.querySelector('ul');
let chatUI = new ChatUI(ul);

chatroom.getChats(data => {
    chatUI.templateLI(data);
});

// DOM
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message)
        .then( () => {
            console.log("Uspešno dodat čet");
        })
        .catch( err => {
            console.log(err);
        });
});



// chatroom.addChat("Imamo gostovanje")
//     .then( () => {
//         console.log("Uspešno dodat čet");
//     })
//     .catch( err => {
//         console.log(err);
//     });