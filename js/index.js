//Variavel para armazenar os itens do botão copiar
var listaCopiar = '';

function lerolero() {
    //Quantida de parágrafos.
    var quantParagrafo = document.getElementById("numeroParagrafos").value;
    var nomePessoa = document.getElementById("nome").value;
    var data = document.getElementById("data").value;
    var titulo = document.getElementById("titulo").value;
    // var linkFoto = document.getElementById("linkFoto").value;
    // var linkVideo = document.getElementById("linkVideo").value;

    //Código para colocar o nome, título e data no documento gerado
    if (nomePessoa != "") {
        document.getElementById("textoNome").innerHTML = nomePessoa;
    }
    if (data != "") {
    document.getElementById("textoData").innerHTML = data;
    }
    if (titulo != "") {  
    document.getElementById("textoTitulo").innerHTML = titulo;
    }

    //Listas para formação das frases aleatórias.
    let listaColunaUm = [
        "Caros colegas",
        "Por outro lado",
        "Assim mesmo",
        "Não podemos esquecer que",
        "Do mesmo modo",
        "A prática mostra que",
        "Nunca é demais insistir, uma vez que",
        "A experiência mostra que",
        "É fundamental ressaltar que",
        "O incentivo ao avança tecnológico, assim como",
    ];
    let listaColunaDois = [
        "a execução deste processo",
        "a complexidade dos estudos efectuados",
        "a expansão de nossa atividade",
        "a actual estrutura da organização",
        "o novo modelo estrutural aqui preconizado",
        "o desenvolvimento de formas distintas de actuação",
        "a constante divulgação das informações",
        "a consolidação das estruturas",
        "a análise dos diversos resultados",
        "o início do programa de formação de atitudes",
    ];
    let listaColunaTres = [
        "obriga-nos à análise",
        "cumpre um papel essencial de formação",
        "exige a precisão e a definição",
        "auxilia a preparação e a definição",
        "contribui para a correcta determinação",
        "assumo importante posição na definição",
        "facilita a definição",
        "prejudica a percepção da importância",
        "oferece uma oportunidade de verificação",
        "acarreta um processo",
    ];
    let listaColunaQuatro = [
        "das nossas opções de desenvolvimento no futuro.",
        "das nossas metas financeiras e administrativas.",
        "dos conceitos de participação geral.",
        "das atitudes e das atribuições da diretoria.",
        "das novas proposições.",
        "das opções básicas para o sucesso do programa.",
        "do nosso sistema de formação de quadros.",
        "das condições apropriadas para os negócios.",
        "dos Índices pretendidos.",
        "de reformulação das formas de acção.",
    ];
    // Laço para printar a quantidade total de parágrafos.
    for (let l = 0; l < quantParagrafo; l++) {

        // Lista com a frase de cada parágrafo.
        var paragrafoLista = [];

        // Laço para a formação de cada frase dentro do parágrafo.
        for (let i = 0; i <= 4; i++) {

            // Variavel que define um valor aleatório Math.random(), Math.floor retira número decimais
            function aleatorio() {
                var valorAleatorio = Math.floor(Math.random() * 10);
                return valorAleatorio;
            }

            // Deixando as frases aleatórias
            var itemAleatorioColunaUm = listaColunaUm[aleatorio()];
            var itemAleatorioColunaDois = listaColunaDois[aleatorio()];
            var itemAleatorioColunaTres = listaColunaTres[aleatorio()];
            var itemAleatorioColunaQuatro = listaColunaQuatro[aleatorio()];

            // Juntando as frases aleatorias, para formar uma frase
            paragrafoLista.push(itemAleatorioColunaUm + " " + itemAleatorioColunaDois + " " + itemAleatorioColunaTres + " " + itemAleatorioColunaQuatro);
        }

        // Criando os parágrafos e varrendo a lista para printar dentro do parágrafo
        var textoPrincipal = document.getElementById("textoPrincipal").innerHTML;
        let text = "<p>";
        for (let j = 0; j < paragrafoLista.length; j++) {
            text += paragrafoLista[j] + " ";

            // Colocando os parágrafos na listaCopiar
            listaCopiar += paragrafoLista[j] + " ";
        }
        text += "</p>";

        // Printando parágrafos
        document.getElementById("textoPrincipal").innerHTML = textoPrincipal + text;
        
    }
}

//Função para copiar o texto para caixa de tranferencia.
function copiarTexto() {
    navigator.clipboard.writeText(listaCopiar);
}
    


