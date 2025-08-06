/* function mostrarMenu() {
  document.getElementById('slider').classList.add('oculto');
  document.getElementById('seccionMenu').classList.remove('oculto');
}


/*function mostrarInicio() {
  document.getElementById('slider').classList.remove('oculto');
  document.getElementById('seccionMenu').classList.add('oculto');
} */

  // Cargar plantilla base con header y footer
 document.addEventListener("DOMContentLoaded", () => {

  fetch("/../index.html ")
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

/*document.addEventListener("DOMContentLoaded", () => {
  // llamar slides del index
  fetch("/../slides.html")
    .then(res => res.text())  // Convertir la respuesta a texto (HTML)
    .then(data => {
      document.getElementById('eslaides').innerHTML = data;  // Poner los slides
    })
    .catch(error => {
      console.error("Error al cargar el slider:", error);
    });
}); 

document.addEventListener("DOMContentLoaded", () => {
      // Cargar los slides desde slides.html
      fetch("/../slides.html")
        .then(res => res.text())  // Obtener el contenido como texto
        .then(htmlText => {
          // Usar un DOMParser para procesar el HTML
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlText, "text/html");

          // Extraer solo el contenido del slider (div con id "slider")
          const slider = doc.querySelector("#slider");

          // Si encontramos el slider, insertarlo en el contenedor
          if (slider) {
            document.getElementById("contenedor-slider").innerHTML = slider.outerHTML;
          }
        })
        .catch(err => {
          console.error("Error al cargar los slides:", err);
        });
    }); */

      // Ocultar sliders existentes de la pagina principal
