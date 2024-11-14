const inicio = () => {
    console.log('Início');
}

const fim = () => {
    console.log('Fim');
}

const processa = (funcao1, funcao2) => {
    funcao1();

    funcao2();
}

processa(inicio, fim);

processa(() => {
    console.log('Função 1');
}, ()  => {
    console.log('Função 2');
});