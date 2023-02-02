export class Chatroom{

    // Konstruktor
    constructor(r, u){
        this.room = r;
        this.username = u;
        this.chats = db.collection('chats');
        this.unsub; // Biće undefined prilikom kreiranja objekta
    }

    // Seteri
    set username(u){
        this._username = u;
    }
    set room(r){
        this._room = r;
    }

    // Geteri
    get username(){
        return this._username;
    }
    get room(){
        return this._room;
    }

    // Update sobe
    updateRoom(ur){
        this.room = ur; // Pozove seter u promeni sobu
        if(this.unsub) {
            this.unsub();
        }
    }

    // Dodavanje nove poruke
    async addChat(mess){
        // Dohvatanje trenutnog vremena, koji nam je potreban za timestamp (cteated_at polje u dokumentu)
        let date = new Date(); 

        // Kreiranje dokumenta/objekta prosleđujem bazi podataka
        let docChat = {
            message: mess,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date) 
        };

        let response = await this.chats.add(docChat); // Da sačuvam dokument u db   
        return response; // Vraćamo Promise i od njega možemo potraživati .then i .catch    
    }   

    // Praćenje poruka u bazi i ispis dodatih poruka
    getChats(callback) {
        this.unsub = this.chats
        .orderBy('created_at')
        .where('room', '==', this.room)
        .onSnapshot(snapshot => {
           snapshot.docChanges().forEach(change => {
                if(change.type == "added") {
                    // console.log(change.doc.data());
                    callback(change.doc.data());
                }
           });
        });
    }
}