// uminternauta
// Arquivo principal de JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("uminternauta carregado com sucesso!");

    // Permite apenas um player tocando por vez
    const players = document.querySelectorAll("audio");

    players.forEach(player => {
        player.addEventListener("play", () => {
            players.forEach(outro => {
                if (outro !== player) {
                    outro.pause();
                }
            });
        });
    });

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
