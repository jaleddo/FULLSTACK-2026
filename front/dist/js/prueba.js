let vida = 800;

    let boton = document.getElementById("boton");
    let textoVida = document.getElementById("vida");
    let mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", function () {
      vida = vida - 50;

      if (vida <= 0) {
        vida = 0;
        mensaje.innerText = "GANASTE venciste al jefe";
      }

      textoVida.innerText = "Vida: " + vida;
    });