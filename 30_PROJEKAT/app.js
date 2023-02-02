import {Chatroom} from './chat.js';
import {ChatUI} from './ui.js';

// DOM
let ul = document.querySelector('ul');
let formMessage = document.querySelector('#formMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let navRooms = document.querySelector('nav');

let username = "anonymus";
if(localStorage.username) {
    username = localStorage.username;
}

let chatroom = new Chatroom("#js", username); // Objekat chatroom klase
let chatUI = new ChatUI(ul); // Objekat chat ui klase

chatroom.getChats(data => {
    chatUI.templateLI(data);
});

//Kada je submit dugme Send pošalji poruku
formMessage.addEventListener('submit' , e => {
    e.preventDefault();
    let message = inputMessage.value;
    chatroom.addChat(message)
        .then(() => formMessage.reset())
        .catch(err => console.log(err))
});

// Kada je submit dugme Update izmeni korisničko ime
formUsername.addEventListener('submit', e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom.username = newUsername;
    localStorage.setItem("username", newUsername); 
    formUsername.reset();
});

// Dugmad za promenu soba
navRooms.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON") {
        // 1. Uzimam ime sobe na koju je kliknuto
        let newRoom = e.target.textContent;
        // 2. Update sobe na koju je kliknuto
        chatroom.updateRoom(newRoom);
        // 3. Izbrisati sve poruke sa ekrana
        chatUI.clearUL();
        // 4. Prikaži četove
        chatroom.getChats(data => {
            chatUI.templateLI(data);
        });
    }
});