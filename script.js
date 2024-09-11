document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".screen-image");
    let currentImage = 0;

    function changeImage() {
        images[currentImage].style.opacity = 0;
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.opacity = 1;
    }

    setInterval(changeImage, 4000);
});
