// Array of quotes
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there."
];

// Function to rotate quotes
function rotateQuotes() {
    const quoteBar = document.getElementById('quote-bar');
    let currentQuoteIndex = 0;

    // Set the initial quote
    quoteBar.classList.remove('show');
quoteBar.classList.add('fade');

setTimeout(() => {
    quoteBar.textContent = quotes[currentQuoteIndex];
    quoteBar.classList.remove('fade');
    quoteBar.classList.add('show');
}, 500); // Matches your fade duration

    // Change the quote every 8 seconds
    setInterval(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteBar.textContent = quotes[currentQuoteIndex];
    }, 8000);
}

document.addEventListener('DOMContentLoaded', rotateQuotes);