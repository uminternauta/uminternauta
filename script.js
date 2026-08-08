// uminternauta
// Arquivo principal de JavaScript

document.addEventListener("DOMContentLoaded", () => {

    console.log("uminternauta carregado!");

    // Modo claro/escuro
    const botaoTema = document.getElementById("tema-btn");

    if (botaoTema) {
        botaoTema.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            botaoTema.textContent =
                document.body.classList.contains("dark")
                    ? "☀️ Modo claro"
                    : "🌙 Modo noturno";
        });
    }

    // Apenas um áudio por vez
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {

        audio.onplay = function () {

            audios.forEach(a => {

                if (a !== this) {
                    a.pause();
                    a.currentTime = 0;
                }

            });

        };

    });

});
