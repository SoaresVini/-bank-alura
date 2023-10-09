export default function ehMaiorDeIdade(campo) {

    const dataNascimento = new Date(campo.value);

   if (!validaIdade(dataNascimento)) {
       campo.setCustomValidity("Qualquer coisa ")
   }
}


function validaIdade(dataNascimento) {

    const dataAtual = new Date();

    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate())

    return dataAtual >= dataMais18;
}

/*
if (idade >= 18 ) {
        if (idade === 18 && (dataAtual.getMonth() <= dataNascimento.getMonth()) && (dataAtual.getDate()  < dataNascimento.getDate())) {
            console.log("Menor de Idade")
        }else {
            console.log("Maior de Idade")
        }
    }else {
        console.log("Menor de Idade")
    }

 */