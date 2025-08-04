/* function mostrarMenu() {
  document.getElementById('slider').classList.add('oculto');
  document.getElementById('seccionMenu').classList.remove('oculto');
}


/*function mostrarInicio() {
  document.getElementById('slider').classList.remove('oculto');
  document.getElementById('seccionMenu').classList.add('oculto');
} */


 document.addEventListener("DOMContentLoaded", () => {
  // Cargar plantilla base con header y footer
  fetch("/../index.html")
    .then(res => res.text())
    .then(base => {
      document.getElementById("pagina").innerHTML = base;

      // Ocultar sliders existentes de la pagina principal
      const sliders = document.querySelectorAll(".slider, .slide");
      sliders.forEach(el => {
        el.style.display = "none";
      });

  
      document.body.classList.add("sin-slider");
    });
});
