let listaNumeroSorteado = [];
let numLimite = 10;
let numeroSecreto = gerarNumeroAle();

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';
//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um número de 1 e 10';
let tentativas= 1;
function exibirTextoNaTela( tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}
mensagemInicial();

function mensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 e 10');
}

function VerificarChute(){
    let chute = document.querySelector('input').value;

    if(chute==numeroSecreto){
        let palavraTentativa= tentativas>1 ? 'tentativas':'tentativa';
        let mensagemTentatia = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('h1','Parabéns')
        exibirTextoNaTela('p',mensagemTentatia)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('h1','O número secreto é menor')
        }else{
            exibirTextoNaTela('h1','O número secreto é maior')
        }tentativas++;
        limpaCampo()
    }
}

function limpaCampo(){
    chute = document.querySelector('input')
    chute.value='';
}

function gerarNumeroAle(){
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidadeElementosNaLista = listaNumeroSorteado.length;
    if(quantidadeElementosNaLista == numLimite){
        listaNumeroSorteado=[];
    }
    if(listaNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAle();
    }else{
        listaNumeroSorteado.push(numeroEscolhido)
        console.log(listaNumeroSorteado)
        return numeroEscolhido
    }
}

function ReiniciarJogo(){
    numeroSecreto = gerarNumeroAle();
    mensagemInicial();
    tentativas=1;
    limpaCampo();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

