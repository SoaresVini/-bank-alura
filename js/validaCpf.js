export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "")

    if( validaNumerosRepitos(cpf) || validaPriemiroDigito(cpf) || validaSegundoDigito(cpf)) {
        console.log("ESSE CPF NÂO EXISTE");
    }else {
        console.log("ESSE AI EXISTE");
    }

}

function validaNumerosRepitos(cpf) {

    const numeros = cpf.split("")
    let repitiu = false;

    for (let i = 0; i < numeros.length -1; i++) {
        repitiu = numeros[i] === numeros[i - 1];
    }

    return repitiu;
}

function validaPriemiroDigito(cpf) {
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

    console.log(soma)

    return soma != cpf[9];

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

    console.log(soma)

    return soma != cpf[10];
}

