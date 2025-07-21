
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
let index = 0;
let isVideoPlaying = false;

function goToNextSlide() {
  const currentSlide = slides.children[index];
  const video = currentSlide.querySelector("video");

  if (video && !isVideoPlaying) {
    // ✅ Si hay video y aún no ha sido reproducido en este ciclo
    isVideoPlaying = true;

    video.currentTime = 0;
    video.play();

    setTimeout(() => {
      // Después de 5 segundos, avanza
      index = (index + 1) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
      isVideoPlaying = false;
      goToNextSlide(); // Continua el ciclo
    }, 5000);
  } else if (!video) {
    // ✅ Slide normal (imagen)
    setTimeout(() => {
      index = (index + 1) % totalSlides;
      slides.style.transform = `translateX(-${index * 100}%)`;
      goToNextSlide();
    }, 3000);
  }
}

// 👇 Iniciar ciclo del slider
slides.style.transform = `translateX(0%)`;
goToNextSlide();
