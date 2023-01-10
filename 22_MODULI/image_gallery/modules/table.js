import generateImage from "./general.js";

let generateTable = parent => {
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    parent.append(table);
    return table;
}

let generateTableRow = parent => {
    let tr = document.createElement("tr");
    parent.append(tr);
    return tr;
}

let generateItem = (parent, src) => {
    let td = document.createElement("td");
    let img = generateImage(src);
    td.append(img);
    parent.append(td);
    return td;
}

const length = 3;

export { generateTable, generateTableRow, generateItem, length };