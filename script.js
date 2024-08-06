document.addEventListener('DOMContentLoaded', function() {
    const marquee = document.querySelector('.marquee');
    const marqueeText = document.getElementById('marqueeText');
    const marqueeWidth = marqueeText.offsetWidth;
    const containerWidth = marquee.parentElement.offsetWidth;

    let currentPosition = containerWidth;

    function scrollMarquee() {
        if (currentPosition < -marqueeWidth) {
            currentPosition = containerWidth;
        } else {
            currentPosition -= 3;
        }
        marquee.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(scrollMarquee);
    }

    scrollMarquee();
});
