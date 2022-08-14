import "./App.scss";

function App() {
  const lettersPattern = /[a-z]/;
  let currentGuessCount = 1;
  let currentGuess = document.querySelector("#guess" + currentGuessCount);
  let words = ["apple", "baker", "store", "horse", "speak", "clone", "bread"];
  let solutionWord = "";

  const chooseWord = () => {
    // choose random item from words array
    let randomItem = Math.floor(Math.random() * (words.length - 1)) + 1;
    solutionWord = words[randomItem];
  };
  chooseWord();
  document.addEventListener("keydown", (e) => {
    const keypress = e.key;
    console.log(currentGuess.datasets);
    if (currentGuessCount < 7) {
      if (
        keypress.length === 1 &&
        lettersPattern.test(e.key) &&
        currentGuess.datasets.letters.length < 5
      ) {
      }
    }
  });
  return (
    <div className="App">
      <h1>Wordle</h1>
      <section className="game">
        <div className="guess" id="guess1" data-letters="">
          <div className="guess_tile" id="guess1tile1"></div>
          <div className="guess_tile" id="guess1tile2"></div>
          <div className="guess_tile" id="guess1tile3"></div>
          <div className="guess_tile" id="guess1tile4"></div>
          <div className="guess_tile" id="guess1tile5"></div>
        </div>
        <div className="guess" id="guess2" data-letters="">
          <div className="guess_tile" id="guess1tile1"></div>
          <div className="guess_tile" id="guess1tile2"></div>
          <div className="guess_tile" id="guess1tile3"></div>
          <div className="guess_tile" id="guess1tile4"></div>
          <div className="guess_tile" id="guess1tile5"></div>
        </div>
        <div className="guess" id="guess3" data-letters="">
          <div className="guess_tile" id="guess2tile1"></div>
          <div className="guess_tile" id="guess2tile2"></div>
          <div className="guess_tile" id="guess2tile3"></div>
          <div className="guess_tile" id="guess2tile4"></div>
          <div className="guess_tile" id="guess2tile5"></div>
        </div>
        <div className="guess" id="guess4" data-letters="">
          <div className="guess_tile" id="guess3tile1"></div>
          <div className="guess_tile" id="guess3tile2"></div>
          <div className="guess_tile" id="guess3tile3"></div>
          <div className="guess_tile" id="guess3tile4"></div>
          <div className="guess_tile" id="guess3tile5"></div>
        </div>
        <div className="guess" id="guess5" data-letters="">
          <div className="guess_tile" id="guess4tile1"></div>
          <div className="guess_tile" id="guess4tile2"></div>
          <div className="guess_tile" id="guess4tile3"></div>
          <div className="guess_tile" id="guess4tile4"></div>
          <div className="guess_tile" id="guess4tile5"></div>
        </div>
        <div className="guess" id="guess6" data-letters="">
          <div className="guess_tile" id="guess5tile1"></div>
          <div className="guess_tile" id="guess5tile2"></div>
          <div className="guess_tile" id="guess5tile3"></div>
          <div className="guess_tile" id="guess5tile4"></div>
          <div className="guess_tile" id="guess5tile5"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
