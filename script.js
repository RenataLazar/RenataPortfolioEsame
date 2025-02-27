
const sliderTrack = document.querySelector('.slider-track');
if(sliderTrack != null){

    sliderTrack.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });
    
    sliderTrack.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running';
    });
}    

// caricamento pagina
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }, 2000); // Aspetta 2 secondi prima di mostrare la pagina
});


//video play 
const mediaContainers = document.querySelectorAll(".media-container");
if(mediaContainers != null){
    mediaContainers.forEach(container => {
        const video = container.querySelector(".media-video");

        container.addEventListener("mouseenter", () => {
            video.muted = false; // Assicurati che il video non sia muto
            video.volume = 1;  // Imposta il volume al massimo (da 0 a 1)
            video.play();
        });
    
        container.addEventListener("mouseleave", () => {
            video.pause();
        });
    });
} 
