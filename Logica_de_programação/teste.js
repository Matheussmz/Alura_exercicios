alert('Seja bem vindo');

let nome = "Lua"
let idade= 25
let numeroDeVendas = 50
let saldoDisponivel = 1000
nome = prompt('Qual é seu nome? ');
idade = prompt('Quantos anos vc tem? ');

let mensagemDeErro = 'Erro! Preencha todos os campos'
//alert(mensagemDeErro)
if(idade >= 18){
    alert(`Pode tirar habilitação ${nome}`)
}
