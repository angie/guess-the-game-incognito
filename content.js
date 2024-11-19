function hideGameNumber() {
  const gameNumber = document.querySelector('.current-game-number');
  if (gameNumber) {
    gameNumber.style.display = 'none';
  }
}

// Run on page load
hideGameNumber();

// Set up a MutationObserver to handle dynamically added content
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      hideGameNumber();
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

console.log("Game Number Hider active");
