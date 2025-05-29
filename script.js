const text="DevOps | Cloud Intern | Software Engineer";
    const el = document.getElementById("text");
    let i = 0;

    function type() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 150); // velocidade

      }
        else {
            setTimeout(() => {
            el.innerHTML = ""; // Limpa o texto
            i = 0; // Reseta o índice
            type(); // Reinicia a digitação
            }, 2000); // Tempo antes de reiniciar
        }
    }

    type();