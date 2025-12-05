btnGravar.onclick = gravar;
btnOpenPopup.onclick = openPopup;
btnClose.onclick = closePopup;

function gravar(){
    newLine(inBanda.value, inMusica.value);
    
    inBanda.value = "";
    inMusica.value = "";
    inBanda.focus();

    closePopup();
}

function openPopup(){
    popup.style.display = "block";
}

function closePopup(){
    popup.style.display = "none";
}

function newLine(texto1, texto2){
    let linha = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");

    c1.innerText = texto1;
    c2.innerText = texto2;
    c3.appendChild(createDeleteButton());

    linha.appendChild(c1);
    linha.appendChild(c2);
    linha.appendChild(c3);
    musicas.appendChild(linha);
    closePopup();

}

function openPopup(){
    popup.style.display = "block";
}

function closePopup(){
    popup.style.display = "none";
}

let songs = [
    ["Pitty", "Teto de vidro"],
    ["Pitty", "Admiravel chip novo"],
    ["Pitty", "Mácara"],
    ["Pitty", "Equalize"],
    ["Pitty", "O lobo"],
    ["Pitty", "Emboscada"],
    ["Pitty", "Do mesmo lado"],
    ["Pitty", "Temporal"],
    ["Pitty", "I whanna be"],
    ["Pitty", "Semana que vem"]
];

songs.forEach((l) => {
    newLine(l[0], l[1]);
});

function createDeleteButton(){
    let btn = document.createElement("button");
    btn.innerText = "X";
    btn.className = "delete";
    btn.onclick = () => {deleteLine(btn)}
    return btn;
}

function deleteLine(btn){
    btn.parentNode.parentNode.remove();
}