/*

Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma.
    Passo 1 - pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima dele

    passo 2 - pegar o elemento do conteudo que precisa ser mostrado 

    passo 3 - pegar o clique do usuario no js 

    passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteudo aparça 

Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido.

    passo1 - verificar se o botao ja esta aberto, se sim, devemos remover a classe ativo pra que eles esconda o conteudo novamente 

*/

const botao = document.querySelector(".btn-plataforma");
console.log (botao);
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
botao.addEventListener("click", () => {

    elementoPlataformas.classList.toggle("ativo");
    
    // if (botaoEstaAberto) {
    //     elementoPlataformas.classList.remove ("ativo");
    // } else {
    //     elementoPlataformas.classList.add ("ativo");
    // }
}); 








 