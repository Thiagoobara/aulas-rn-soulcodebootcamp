const principal = document.querySelector("#principal");
const opcoes = document.querySelectorAll(".opcao");
principal.src = opcoes[0].src;
for (const opcao of opcoes) {
    opcao.addEventListener("click", (evento) => {
        const imagem = evento.currentTarget;
        principal.src = imagem.src;
    });
}