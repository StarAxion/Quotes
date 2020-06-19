var pageBody = document.body;
var quoteBox = document.getElementById("quote-box");
var quoteText = document.getElementById("quote-text");
var quoteAuthor = document.getElementById("quote-author");
var changeQuoteButton = document.getElementById("change-quote");

var quotesList = [
  {
    quote: 'Things turn out best for the people who make the best of the way things turn out.',
    author: 'John Wooden',
    img: 'url(img/braden-jarvis-prSogOoFmkw-unsplash.jpg)'
  },
  {
    quote: 'If a man does his best, what else is there?',
    author: 'George S. Patton',
    img: 'url(img/chris-meads-GmHHqium3NE-unsplash.jpg)'
  },
  {
    quote: 'Expect the best. Prepare for the worst. Capitalize on what comes.',
    author: 'Zig Ziglar',
    img: 'url(img/christian-joudrey-mWRR1xj95hg-unsplash.jpg)'
  },
  {
    quote: 'I have the simplest tastes. I am always satisfied with the best.',
    author: 'Oscar Wilde',
    img: 'url(img/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg)'
  },
  {
    quote: 'A problem is a chance for you to do your best.',
    author: 'Duke Ellington',
    img: 'url(img/denys-nevozhai-UNv2lxq8Rmo-unsplash.jpg)'
  },
  {
    quote: `I'm selfish, impatient, and a little insecure. I make mistakes, I'm out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    author: 'Marilyn Monroe',
    img: 'url(img/eric-welch-eRwWGWkh0vU-unsplash.jpg)'
  },
  {
    quote: 'The best way to find yourself is to lose yourself in the service of others.',
    author: 'Mahatma Gandhi',
    img: 'url(img/jack-millard-MirsgKxIRGE-unsplash.jpg)'
  },
  {
    quote: 'I do the very best I know how - the very best I can; and I mean to keep on doing so until the end.',
    author: 'Abraham Lincoln',
    img: 'url(img/markus-spiske-FzrjgIId6NU-unsplash.jpg)'
  },
  {
    quote: 'The best way to cheer yourself up is to try to cheer somebody else up.',
    author: 'Mark Twain',
    img: 'url(img/renato-pozzi-FHHpOkaX_cQ-unsplash.jpg)'
  },
  {
    quote: 'In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.',
    author: 'Theodore Roosevelt',
    img: 'url(img/riccardo-chiarini-gYCMiZp-A7E-unsplash.jpg)'
  }
];


function getRandomNumber() {
  return Math.floor(Math.random() * quotesList.length);
}


function randomizeQuote() {
  var arrIndex = getRandomNumber();

  pageBody.style.backgroundImage = quotesList[arrIndex].img;
  quoteText.innerHTML = quotesList[arrIndex].quote;
  quoteAuthor.innerHTML = quotesList[arrIndex].author;
}

randomizeQuote();


if (changeQuoteButton) {

  function changeQuote() {
    quoteBox.style.opacity = 0;
    changeQuoteButton.style.opacity = 0;

    setTimeout(function () {
      randomizeQuote();
      quoteBox.style.opacity = 1;
      changeQuoteButton.style.opacity = 1;
    }, 1000);
  }

  changeQuoteButton.addEventListener('click', changeQuote);

}