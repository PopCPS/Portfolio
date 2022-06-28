function valida(input) {
    const tipoDeInput = input.dataset.tipo;

    if(input.validity.valid) {
        input.parentElement.classList.remove('input__container__invalido');
        input.parentElement.querySelector('.input__mensagem__erro').innerHTML = '';
    }else {
        input.parentElement.classList.add('input__container__invalido');
        input.parentElement.querySelector('.input__mensagem__erro').innerHTML = mostraMensagemDeErro(tipoDeInput,input)
    }
}

const tiposDeErro = [
    'customError',
    'typeMismatch',
    'valueMissing'
]

const mensagemDeErro = {
    nome: {
        valueMissing: 'O campo de nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio',
        typeMismatch: 'O email digitado não é valido'
    },
    assunto: {
        valueMissing: 'O campo de assunto não pode estar vazio'
    },
    mensagem: {
        valueMissing: 'O campo de mensagem não pode estar vazio'
    }
}

function mostraMensagemDeErro(tipoDeInput,input) {
    let mensagem = '';
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagemDeErro[tipoDeInput][erro];
        }
    })

    return mensagem
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
})

const textAreas = document.querySelectorAll('textArea');

textAreas.forEach(input => {

    input.addEventListener('blur', (evento) => {
        valida(evento.target);
    })
})