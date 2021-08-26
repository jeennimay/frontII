//23/08/21 - AppCadastro

function iniciar() {
    document.getElementById("btnAdicionar").addEventListener("click", () => {
        var lista = document.getElementById("listaElementos");
        var texto = document.getElementById("txtIncluir");
        
        //criando a lista
        var li = document.createElement("li");
            //colocando o "valor"/conteúdo no item da lista 
        li.textContent = texto.value;
            //li como filho do listaElementos
        lista.appendChild(li);
            //"zerando" o valor depois de adicionado / limpando o campo
        texto.value = "";
            //tira o focus do do campo
        texto.focus();

    });
}
window.addEventListener("load", iniciar);