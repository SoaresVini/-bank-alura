import ehUmCPF from "./validaCpf.js";

const camposDoForm = document.querySelectorAll("[required]")

camposDoForm.forEach((campo) =>  {

    campo.addEventListener("blur", () => verificaCampo(campo));
});
// blur tira o foco do input
function verificaCampo(campo){
    if( campo.name === 'cpf' && campo.value.length >= 11) {
        ehUmCPF(campo);
    }

}