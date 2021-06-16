var form = document.getElementById("mensagens");
        var msg, itemId, item;

        submit = function() {
            if ((document.getElementById("nome").value != "") && (document.getElementById("mensagem").value != "")) {
                item = document.getElementById("nome");
                mensagem = document.getElementById("mensagem");
                var elemento = item.value + ' : ' + mensagem.value + '   '
                itemId = form.childElementCount;
                msg = createItemEl(elemento, itemId);
                msg.appendChild(createRemoveTaskBtn(itemId));
                form.appendChild(msg);
                item.value = "";
            }
        }

        removeTask = function(itemId) {
            for (i = 0; i < form.children.length; i++) {
                if (form.children[i].getAttribute("index") == itemId) {
                    form.children[i].remove();
                }
            }
        }

        createItemEl = function(itemValue, itemId) {
            let msg = document.createElement("msg");
            msg.setAttribute("index", itemId);
            msg.style.fontFamily = 'fira-code'
            msg.style.fontSize = '20px'
            msg.style.msgstStyle = 'none'
            msg.appendChild(document.createTextNode(itemValue));

            return msg;
        }

        createRemoveTaskBtn = function(itemId) {
            let btn = document.createElement("button");
            btn.setAttribute("oncmsgck", "removeTask(" + itemId + ")");
            btn.innerHTML = "Excluir";
            btn.style.color = "salmon"

            return btn;
        }

        function exibeAlerta() {
            alert("Desenvolvimento de Software para Web\n Ana Lara Silva Omsgveira")
        }