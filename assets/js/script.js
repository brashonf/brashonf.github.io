function createStars() {
    const header = document.querySelector('header');
    const numStars = 100; // Adjust the number of stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        const size = Math.random() * 3 + 1; // Random size
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
        
        star.style.animation = `twinkle ${Math.random() * 1 + 0.5}s infinite`; // Twinkling effect
        header.appendChild(star);
    }
}

const text = "Welcome to My Portfolio!";
const typedText = document.getElementById("typedText");
let index = 0;

function type() {
    if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed
    } else {
        typedText.classList.add("typing");
    }
}

window.onload = function() {
    createStars();
    type(); // Call typing function
};
