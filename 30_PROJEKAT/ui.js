export class ChatUI{
    //konstruktor
    constructor(l) {
        this.list = l;
    }

    //geter i seter
    set list(l) {
        this._list = l;
    }

    get list() {
        return this._list;
    }

    templateLI(data) {
        // Izvući podatke iz prosleđenog dokuemnat i zapisati ih u formatu
        // useranme: poruka
        // time_stamp
        let htmlLI = 
        `<li>
            <span class="username">${data.username} : </span>
            <span class="message">${data.message}</span>
            <div class="date">${data.created_at.toDate().toDateString()}</div>
        </li>`;
        this.list.innerHTML += htmlLI;
    }
} 