// Aguarda todo o site carregar antes de rodar o código
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mudar o fundo do menu ao rolar a página
    const header = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("header-ativo");
        } else {
            header.classList.remove("header-ativo");
        }
    });

    // 2. Rolagem suave ao clicar nos links do menu
    const linksDoMenu = document.querySelectorAll(".nav a, .btn");
    linksDoMenu.forEach(link => {
        link.addEventListener("click", (evento) => {
            evento.preventDefault();
            const idDoAlvo = link.getAttribute("href");
            const elementoAlvo = document.querySelector(idDoAlvo);
            
            if (elementoAlvo) {
                elementoAlvo.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Efeito visual nos cards de pilares ao passar o mouse
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "all 0.3s ease";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
        });
    });

});
