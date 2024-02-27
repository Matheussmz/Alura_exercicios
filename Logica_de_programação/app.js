let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio'

//function Console(){
//    console.log('Olá, mundo!')
//};

function Alertjs(){
    alert('Eu amo js')
};

function NomeCidade(){
    let cidade = prompt('Aonde vc mora ?')
    alert(`Estive em ${cidade} é gostei muito`)
};

function SomaNum(){
    let soma = 0;
    let num1 = Number(prompt('Diga um Número!'));
    let num2 = Number(prompt('Agora diga outro número!'));
    soma = num1 + num2;
    alert(`A soma dos números deu ${soma}`)
}


function Console(a){
    return a * a
};

let maior = Console(2)
console.log(maior)