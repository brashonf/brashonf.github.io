function createStars() {
    const header = document.querySelector('header');
    const numStars = 100; // Adjust the number of stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3 + 1; // Random size between 1 and 3 pixels
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position on the header
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
        
        // Random twinkling effect duration
        star.style.animation = `twinkle ${Math.random() * 1 + 0.5}s infinite`; 
        header.appendChild(star);
    }
}

const text = "Welcome to My Portfolio!";
const typedText = document.getElementById('typedText');
let index = 0;

function type() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createStars();
    type();
});

document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});
