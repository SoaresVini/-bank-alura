import ehUmCPF from "./validaCpf.js";
import ehMaiorDeIdade from "./validaIdade.js";
import {mensagens} from "./mensagemError.js";
import {tiposDeErro} from "./mensagemError.js";
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    //não faz reload

   //cria a chave localStorege e cria os atributos dele  

    const listaRespostas = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value,
    }

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

    window.location.href = '../pages/abrir-conta-form-2.html'

})

const camposDoForm = document.querySelectorAll("[required]")

camposDoForm.forEach((campo) =>  {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid",event => event.preventDefault());
});


// blur tira o foco do input
function verificaCampo(campo){
    let mensagem = "";
    campo.setCustomValidity('');

    if( campo.name === 'cpf' && campo.value.length >= 11) {
        ehUmCPF(campo);
    }
    if( campo.name === 'aniversario' ) {
        ehMaiorDeIdade(campo);
    }

   tiposDeErro.forEach(erro => {
       if (campo.validity[erro]) {
           mensagem = mensagens[campo.name][erro];
           console.log(mensagem);
       }
   });

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validaInput = campo.checkValidity();

    if (!validaInput) {
        mensagemErro.textContent = mensagem;
    }else {
        mensagemErro.textContent = ""
    }
}