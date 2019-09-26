/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes Variable containing an Array of Objects Containing quotes and other meta info
const quotes = [
  { quote     : 'A word is dead when it is said, some say. I say it just begins to live that day.',
    source    : 'Emily Dickinson',
    citation  : 'Book',
    category  : 'Females',
    tags	    : ['Dead', 'Live']
  },
  { quote     : 'Your faith is what you believe, not what you know.',
    source    : 'Mark Twain',
    year      : '1985',
    tags	    : ['Believe', 'Knowledge']
  },
  { quote     : 'You may delay, but time will not.',
    source    : 'Benjamin Franklin',
    category  : 'Presidents',
    tags	    : ['Time']
  },
  { quote     : 'I would not join any club that would have someone like me for a member.',
    source    : 'Groucho Marx',
    citation  : 'Facebook',
    year      : '2011',
    tags	    : ['Member', 'Club', 'Like']
  },
  { quote     : 'Woman begins by resisting a man\'s advances and ends by blocking his retreat.',
    source    : 'Oscar Wilde',
    year      : '1968',
    tags	    : ['Resisting', 'Retreat']
  }
];

// Function to select random quote selector
function getRandomQuote() {
	let randomNumber = Math.floor( Math.random() * quotes.length );
	return quotes[randomNumber];
}

// Function to generate random body background and button background color
function backgroundColor() {
	let red = Math.floor( Math.random() * 10 );
	let green = Math.floor( Math.random() * 10 );
	let blue = Math.floor( Math.random() * 10 );
	let rgbValue = '#' + red + green + blue;
	document.body.style.backgroundColor = rgbValue;
	document.getElementById("loadQuote").style.backgroundColor = rgbValue; 
	// Source: https://www.w3schools.com/jsref/prop_style_backgroundcolor.asp
} 

// Function to Display Random Quote withing a Div with ID 'quote-box'
function printQuote() {
	let randomQuote = getRandomQuote();
	let html = '';
		html += '<p class="quote">' + randomQuote.quote + '</p>';
      	html += '<p class="source">' + randomQuote.source ;
	      	if (randomQuote.citation) {
	      		html += '<span class="citation">' + randomQuote.citation + '</span>';
	      	}
	      	if (randomQuote.year) {
	      		html += '<span class="year">' + randomQuote.year +'</span>'
	      	}
	      	if (randomQuote.category) {
	      		html += '</br><span class="category"> Category: ' + randomQuote.category +'</span>'
	      	} 
	      	if (randomQuote.tags) {
	      		html += '</br><span class="tags"> Tags: ' + randomQuote.tags.join(', ') +'</span>'
	      	}  
      	html += '</p>';
    document.getElementById('quote-box').innerHTML = html;
    // Call random backround function:
    backgroundColor();
}

// Call printQuote function on time interval
printQuote();
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
window.setInterval(printQuote, 5000);


// Call printQuote function on button element press event 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.