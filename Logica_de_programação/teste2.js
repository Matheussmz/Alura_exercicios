/*let Dsemana = prompt('Olá, que dia é hj? ')

if (Dsemana == 'Sábado'||'Domingo' ){
    alert('Bom fim de semana')
}else{
    alert('Boa semana')
}*/

nome = prompt('Qual é seu nome? ')
alert(`Seja bem vindo ${nome}`)

let saldo = 0;
let entrada = 0;
let saida = 0;
entrada = Number(prompt('Quanto vc recebe?'))
saida = Number(prompt('Quanto vc gasta? '))

saldo = entrada - saida
alert(`Seu saldo é ${saldo}`)