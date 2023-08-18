const quotes = [
    "Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.",
  "Determination is the power that sees us through all our frustration and obstacles. It helps in building our willpower which is the very basis of success.",
  "Failure will never overtake me if my determination to succeed is strong enough.",
  "Be Active! Take on responsibility! Work for the things you believe in. If you do not, you are surrendering your fate to others.",
  "The best brains of the nation may be found on the last benches of the classroom.",
  "Life is a difficult game. You can win it only by retaining your birthright to be a person.",
  "Dream is not that which you see while sleeping it is something that does not let you sleep.",
  "It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone.",
  "Don't take rest after your first victory because if you fail in the second, more lips are waiting to say that your first victory was just luck.",
  "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
  "Man needs difficulties in life because they are necessary to enjoy success.",
  "Failure will never overtake me if my definition of succeed is strong enough.",
  "You see, God helps only people who work hard. That principle is very clear.",
  "We are all born with a divine fire in us. Our efforts should be to give wings to this fire and fill the world with the glow of its goodness.",
  "Once your mind stretches to a new level it never goes back to its original dimension.",
  "To succeed in life and achieve results, you must understand and master three mighty forces— desire, belief, and expectation.",
  "If you want to leave your footprints On the sands of time Do not drag your feet.",
  "If you want to shine like a sun, first burn like a sun.",
  "To succeed in your mission, you must have single-minded devotion to your goal.",
  "A big shot is a little shot who keeps on shooting, so keep trying.",
  "The only true wisdom is in knowing you know nothing.",
  "Those who cannot work with their hearts achieve but a hollow, half-hearted success that breeds bitterness all around."
    // Add more quotes here
  ];
  
  const quoteElement = document.getElementById("quote");
  
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  // Display a random quote on page load
  displayRandomQuote();
  
  // Change quote every 10 seconds (adjust as needed)
  setInterval(displayRandomQuote, 8000);