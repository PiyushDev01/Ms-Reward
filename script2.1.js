

// for random search


function searchQueries() {
  const numberInput = document.getElementById('numberInput');
  const inputValue = numberInput.value;
  const parsedValue = inputValue ? parseInt(inputValue, 10) : 35;

  var queries = [];

  for (var i = 1; i <= parsedValue; i++) {
    var randomIndex = Math.floor(Math.random() * keywords.length); // Generate random index
    var randomWord = keywords[randomIndex]; // Select random word from the array
    queries.push(randomWord);
  }

  var tabs = [];

  for (var i = 0; i < queries.length; i++) {
    var query = queries[i];
    
    var searchQuery = query;
    // var newTab = window.open("https://www.bing.com/search?q=" + encodeURIComponent(searchQuery), "_blank");
    var newTab = window.open("https://www.piyushdev.me", "_blank");
// newTab.location.href = "";

    tabs.push(newTab);
  }

  setTimeout(function() {
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].close();
    }
  }, 5000);
}





