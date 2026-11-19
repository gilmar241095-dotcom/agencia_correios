let atendimentos = [];
const botao = document.getElementById('btn');
const nome = document.getElementById('txtnome');
const idade = document.getElementById('txtidade');
const res = document.getElementById('res');
const lista = document.getElementById('listaAtendimentos');
const busca = document.getElementById('txtbusca');
const resultadoBusca = document.getElementById('resultadoBusca');
const estatisticas = document.getElementById('estatisticas');
let contador = 0;


botao.addEventListener('click', processar);
document.getElementById('btnbuscar')
    .addEventListener('click', pesquisar);
document.getElementById('btnlimpar')
    .addEventListener('click', limparFila);


function processar() {

    let n = nome.value.trim().toUpperCase();
    let i = Number(idade.value);

    if (n === '' || idade.value === '') {
        res.textContent = 'Preencha todos os campos!';
        return;
    }

    if (!Number.isInteger(i) || i < 1 || i > 120) {
        res.textContent = 'Idade inválida!';
        return;
    }

    if (i < 18) {
        res.textContent = 'Atendimento recusado!';
        return;
    }