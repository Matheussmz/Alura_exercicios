alert('Bem vindo ao jogo!!')

let numeroSecreto = parseInt(Math.random()*10 + 1)
let chute;
let tentativas= 1
while(chute != numeroSecreto){
    chute = prompt('Qual é o número secreto? ')
    if(chute == numeroSecreto){
        break;
    }else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor ${chute}`)
        }else{
            alert(`O numero secreto é maior ${chute}`)
        }
        
    }tentativas++
}
let palavraTentativa = tentativas > 1 ? 'tentativas': 'Tentativa'
alert(`Você acertou com ${tentativas} ${palavraTentativa}`)