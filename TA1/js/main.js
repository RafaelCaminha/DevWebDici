var form = document.getElementById("mural");
var msg, itemId, item, muralBox;

submit = function () {
    if ((document.getElementById("nome").value != "") && (document.getElementById("mensagem").value != "")) {
        item = document.getElementById("nome");
        mensagem = document.getElementById("mensagem");
        var elemento = item.value + ' diz : ' + mensagem.value + '   '
        itemId = form.childElementCount;
        msg = createItemEl(elemento, itemId);
        msg.appendChild(createRemoveTaskBtn(itemId));
        form.appendChild(msg);
        item.value = "";
        muralBox = document.getElementById("mural-box").style.backgroundColor = "#361C5D";
    }
}

removeTask = function (itemId) {
    for (i = 0; i < form.children.length; i++) {
        if (form.children[i].getAttribute("index") == itemId) {
            form.children[i].remove();
        }
    }
    muralBox = document.getElementById("mural-box").style.backgroundColor = "transparent";
}

createItemEl = function (itemValue, itemId) {
    let msg = document.createElement("p");
    msg.setAttribute("index", itemId);

    msg.setAttribute("class", "txt-msg");
    msg.appendChild(document.createTextNode(itemValue));



    return msg;
}

createRemoveTaskBtn = function (itemId) {
    let btn = document.createElement("a");
    btn.setAttribute("onclick", "removeTask(" + itemId + ")");
    btn.innerHTML = "";
    btn.setAttribute("class", "btn-excluir")

    return btn;
}

function creditos() {
    alert("Criador por:\nRafael Caminha")
}

function conf(){
    alert("Menssagem enviada!\n Entraremos em contato em breve")
}