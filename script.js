// uminternauta
// Arquivo principal de JavaScript


document.addEventListener("DOMContentLoaded", function() {

    console.log("uminternauta carregado com sucesso!");

});

const botaoTema = document.getElementById("tema-btn");

if (botaoTema) {

    botaoTema.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            botaoTema.innerHTML = "☀️ Modo claro";
        } else {
            botaoTema.innerHTML = "🌙 Modo noturno";
        }

    });

}
