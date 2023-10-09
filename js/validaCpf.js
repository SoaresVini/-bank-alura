export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "")

    console.log(validaNumerosRepitos(cpf))
    console.log(validaPrimeiroDigito(cpf))
    console.log(validaSegundoDigito(cpf))

    if( validaNumerosRepitos(cpf) || !validaPrimeiroDigito(cpf) || !validaSegundoDigito(cpf)) {
        campo.setCustomValidity("TMJ");
        // O setCustomValidity tem que ser True para poder aparecer as mensagens de validação
    }
}

function validaNumerosRepitos(cpf) {

    const numeros = cpf.split("")
    let repitiu = true;

    for (let i = 0; i < numeros.length -1; i++) {
        repitiu = numeros[i] === numeros[i - 1];
    }

    return repitiu;
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let i = 0; i < 9; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;


    if( soma === 10 || soma === 11) {
        soma = 0;
    }

    return soma !== cpf[9];

}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for (let i = 0; i < 10; i++) {
        soma += cpf[i] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if( soma === 10 || soma === 11) {
        soma = 0;
    }

    return soma !== cpf[10];
}

