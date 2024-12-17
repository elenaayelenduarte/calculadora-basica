const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const pressButton = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                
                if (pantalla.textContent === "Error") {
                    pantalla.textContent = "0"; 
                } else {
                    pantalla.textContent = eval(pantalla.textContent);
                }
            } catch {
                pantalla.textContent = "Error";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = pressButton;
        } else {
            pantalla.textContent += pressButton;
        }
    });
});
