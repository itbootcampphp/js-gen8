let naslov = document.createElement("h3");
naslov.innerHTML = "Naslov kreiran iz JS-a";
document.body.append(naslov);

let lista = document.createElement("ul");
document.body.append(lista);

let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka liste";
lista.append(li1);

let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka liste";
lista.append(li2);

for(let i = 0; i < 3; i++) {
    let par = document.createElement("p");
    par.textContent = `${i + 1}-ta stavka liste`;
    par.classList.add("stil");
    //par.style.color = "blue";
    let li = document.createElement("li");
    li.append(par);
    lista.append(li);
}