document.addEventListener('DOMContentLoaded', (event) => {
    // Existing code for typed text effect

    // Add twinkling effect to stars
    gsap.to("#stars2", {duration: 50, x: -500, repeat: -1, ease: "none"});
    gsap.to("#stars3", {duration: 100, x: -500, repeat: -1, ease: "none"});

    // Add parallax effect on scroll
    window.addEventListener('scroll', () => {
        let scrollPosition = window.pageYOffset;
        document.getElementById('stars').style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
        document.getElementById('stars2').style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
        document.getElementById('stars3').style.transform = 'translateY(' + scrollPosition * 0.6 + 'px)';
    });
});
