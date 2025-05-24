// Array of quotes
const quotes = [
    { text: "The best way to predict the future is to invent it.", id: "dev1" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", id: "dev2" },
    { text: "Success is not the key to happiness. Happiness is the key to success.", id: "dev3" },
    { text: "The only way to do great work is to love what you do.", id: "dev4" },
    { text: "Believe you can and you're halfway there.", id: "dev5" }
];

// Function to rotate quotes
function rotateQuotes() {
    const quoteBar = document.getElementById('quote-bar');
    let currentQuoteIndex = 0;

    // Set the initial quote
    quoteBar.classList.remove('show');
quoteBar.classList.add('fade');
quoteBar.textContent = quotes[currentQuoteIndex].text;
quoteBar.setAttribute("data-id", quotes[currentQuoteIndex].id);

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