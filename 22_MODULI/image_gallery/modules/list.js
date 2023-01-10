import generateImage from "./general.js";

let generateList = parent => {
    let ul = document.createElement("ul");
    ul.style.overflow = "hidden";
    ul.style.listStyle = "none";
    parent.append(ul);
    return ul;
}

let generateItem = (parent, src) => {
    let li = document.createElement("li");
    li.style.float = "left";
    let img = generateImage(src);
    li.append(img);
    parent.append(li);
    return li;
}

let length = 3;

export { generateList as GL, generateItem as GI, length };