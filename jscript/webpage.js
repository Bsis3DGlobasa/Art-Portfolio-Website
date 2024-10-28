let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slides .slide');
    currentIndex += direction;

    // Wrap around logic
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Chibi hover functionality
const chibi = document.getElementById('chibi');
const chatMessage = document.getElementById('chatMessage');
const card = document.getElementById('card');

chibi.addEventListener('mouseenter', () => {
    chatMessage.style.display = 'block';
});

chibi.addEventListener('mouseleave', () => {
    chatMessage.style.display = 'none';
});

chibi.addEventListener('click', () => {
    card.style.display = 'block'; // Show the card
});

document.addEventListener('mousemove', (event) => {
    const rect = chibi.getBoundingClientRect();
    const isHovering = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
    );

    if (!isHovering) {
        card.style.display = 'none'; // Hide the card if not hovering over the chibi image
    }
});
