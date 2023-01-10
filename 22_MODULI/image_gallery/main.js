/*
import { GL, GI } from "./modules/list.js";
import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

let ul = GL(document.body);
GI(ul, "images/01.jpg");
GI(ul, "images/02.jpg");
GI(ul, "images/03.jpg");

let table = generateTable(document.body);
let tr = generateTableRow(table);
generateTableItem(tr, "images/01.jpg");
generateTableItem(tr, "images/02.jpg");
generateTableItem(tr, "images/03.jpg");
*/

import * as Lista from "./modules/list.js";
import * as Tabela from "./modules/table.js";

let ul = Lista.GL(document.body);
// Lista.length = 2; - ne moze, ovo je read-only svojstvo
for(let i = 1; i <= Lista.length; i++) {
    Lista.GI(ul, `images/0${i}.jpg`);
}

let table = Tabela.generateTable(document.body);
let tr = Tabela.generateTableRow(table);
for(let i = 1; i <= Tabela.length; i++) {
    Tabela.generateItem(tr, `images/0${i}.jpg`);
}