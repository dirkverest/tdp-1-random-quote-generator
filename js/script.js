/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes Variable containing an Array of Objects Containing quotes and other meta info
const quotes = [
  {
    quote:
      "A word is dead when it is said, some say. I say it just begins to live that day.",
    source: "Emily Dickinson",
    citation: "Book",
    category: "Females",
    tags: ["Dead", "Live"],
  },
  {
    quote: "Your faith is what you believe, not what you know.",
    source: "Mark Twain",
    year: "1985",
    tags: ["Believe", "Knowledge"],
  },
  {
    quote: "You may delay, but time will not.",
    source: "Benjamin Franklin",
    category: "Presidents",
    tags: ["Time"],
  },
  {
    quote:
      "I would not join any club that would have someone like me for a member.",
    source: "Groucho Marx",
    citation: "Facebook",
    year: "2011",
    tags: ["Member", "Club", "Like"],
  },
  {
    quote:
      "Woman begins by resisting a man's advances and ends by blocking his retreat.",
    source: "Oscar Wilde",
    year: "1968",
    tags: ["Resisting", "Retreat"],
  },
];

// Get random quote
function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// Generator two-digit random number
function twoDigitGenerator() {
  return Math.floor(Math.random() * 10);
}

// Generate random body background color
function backgroundColor() {
  const rgbValue = `#${twoDigitGenerator()}${twoDigitGenerator()}${twoDigitGenerator()}`;
  document.body.style.backgroundColor = rgbValue;
}


// Display Random Quote within Div with ID 'quote-box'
function printQuote() {
  // get random quote
  const randomQuote = getRandomQuote();
  // Construct html quote component
  let quoteComponent = `<p class="quote">${randomQuote.quote}</p> <p class="source">${randomQuote.source}`;
  quoteComponent += randomQuote.citation ? `<span class="citation">${randomQuote.citation}</span>` : "";
  quoteComponent += randomQuote.year ? `<span class="year">${randomQuote.year}</span>` : "";
  quoteComponent += randomQuote.category ? `</br><span class="category">Category: ${randomQuote.category}</span>` : "";
  quoteComponent += randomQuote.tags ? `</br><span class="tags">Category: Tags: ${randomQuote.tags.join(", ")}</span>` : "";
  quoteComponent += "</p>";
  // insert quote component into div #quote-box
  document.getElementById("quote-box").innerHTML = quoteComponent;
  // Call random background function on quote change:
  backgroundColor();
}

// initials printQuote function call
printQuote();
// interval printQuote function call
window.setInterval(printQuote, 5000);
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
// Call printQuote function on button click event
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
