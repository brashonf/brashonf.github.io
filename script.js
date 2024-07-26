// Function to open the header
function openHeader() {
    const header = document.querySelector('header');
    header.classList.add('open');
}

// Call the function to open the header when the page loads
window.onload = openHeader;

document.getElementById('scrollButton').onclick = function() {
    document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' });
};
