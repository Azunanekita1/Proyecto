  // Cargar plantilla base con header y footer
 document.addEventListener("DOMContentLoaded", () => {

  fetch("/index.html ")
    .then(res => res.text())
    .then(base => {
      document.getElementById('pagina').innerHTML = base;
    });
});

// ocultar sliders
      const sliders = document.querySelectorAll(".slider, .slide");
      sliders.forEach(el => {
        el.style.display = "none";
     });

      document.body.classList.add("sin-slider");