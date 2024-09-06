function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById
    ("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    // se campoPesquisa for um string sem nada.
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado!</p>"
        return
    }

    campoPesquisa = campoPesquisa.tolowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let dado = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.tolowerCase()
        descricao = dado.descricao.tolowerCase()
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Acesse o Link:</a>
            </div>
        `;
        }
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}




