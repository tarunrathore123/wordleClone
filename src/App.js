import { useEffect, useState } from "react";
import "./App.scss";
import "./animation.scss";

function App() {
  const lettersPattern = /[a-z]/;
  let words = ["apple", "baker", "store", "horse", "speak", "clone", "bread"];
  const chooseWord = () => {
    // choose random item from words array
    let randomItem = Math.floor(Math.random() * (words.length - 1)) + 1;
    return words[randomItem];
  };

  const [solutionWord, setSolutionWord] = useState("");
  let [currentGuess, setCurrentGuess] = useState(1);
  const [guess1, setGuess1] = useState("");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");
  const [guess4, setGuess4] = useState("");
  const [guess5, setGuess5] = useState("");
  const [guess6, setGuess6] = useState("");

  const updateLetters = (keypress) => {
    if (currentGuess === 1) setGuess1((guess1) => guess1 + keypress);
    if (currentGuess === 2) setGuess2((guess2) => guess2 + keypress);
    if (currentGuess === 3) setGuess3((guess3) => guess3 + keypress);
    if (currentGuess === 4) setGuess4((guess4) => guess4 + keypress);
    if (currentGuess === 5) setGuess5((guess5) => guess5 + keypress);
    if (currentGuess === 6) setGuess6((guess6) => guess6 + keypress);
    console.log(guess1);
  };

  const getCorrectGuessVariable = (n) => {
    if (currentGuess === 1) return guess1;
    if (currentGuess === 2) return guess2;
    if (currentGuess === 3) return guess3;
    if (currentGuess === 4) return guess4;
    if (currentGuess === 5) return guess5;
    if (currentGuess === 6) return guess6;
  };

  const submitGuess = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        revealTile(i, checkLetter(i));
      }, i * 200);
    }
  };
  const revealTile = (i, state) => {
    let tileNum = i + 1;
    flipTile(tileNum, state);
    checkIfGuessComplete(i);
  };

  const checkWin = () => {
    if (solutionWord === getCorrectGuessVariable()) {
      setTimeout(() => {
        jumpTiles();
      }, 500);
    } else {
      // Not won
      setCurrentGuess(currentGuess + 1);
      currentGuess = document.querySelector("#guess" + currentGuess);
      //console.log('not a win, increment guess count to ' + currentGuessCount);
      if (currentGuess == 7) {
        setTimeout(() => {
          showSolution();
        }, 500);
      }
    }
  };
  const jumpTiles = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        let currentTile = document.querySelector(
          "#guess" + currentGuess + "tile" + (i + 1)
        );
        currentTile.classList.add("jump");
      }, i * 200);
    }
  };

  const showSolution = () => {
    alert("Better luck next time. The solution was: " + solutionWord);
  };

  const checkIfGuessComplete = (i) => {
    if (i === 4) {
      checkWin();
    }
  };

  const flipTile = (tileNum, state) => {
    let tile = document.querySelector(
      "#guess" + currentGuess + "tile" + tileNum
    );
    tile.classList.add("flip-in");
    setTimeout(() => {
      tile.classList.add(state);
    }, 250);
    setTimeout(() => {
      tile.classList.remove("flip-in");
      tile.classList.add("flip-out");
    }, 250);
    setTimeout(() => {
      tile.classList.remove("flip-out");
    }, 1500);
  };

  const checkLetter = (position) => {
    let guessedLetter = getCorrectGuessVariable().charAt(position);
    let solutionLetter = solutionWord.charAt(position);

    if (guessedLetter === solutionLetter) {
      return "correct";
    } else if (solutionWord.includes(guessedLetter)) {
      return "present";
    } else {
      return "absent";
    }
  };

  const addEvent = (e) => {
    let keypress = e.key;
    if (
      keypress.length === 1 &&
      lettersPattern.test(keypress) &&
      currentGuess < 7
    ) {
      updateLetters(keypress);
    }
    if (keypress === "Backspace") {
      if (currentGuess === 1) setGuess1((guess1) => guess1.slice(0, -1));
      if (currentGuess === 2) setGuess2((guess2) => guess2.slice(0, -1));
      if (currentGuess === 3) setGuess3((guess3) => guess3.slice(0, -1));
      if (currentGuess === 4) setGuess4((guess4) => guess4.slice(0, -1));
      if (currentGuess === 5) setGuess5((guess5) => guess5.slice(0, -1));
      if (currentGuess === 6) setGuess6((guess6) => guess6.slice(0, -1));
    }
    if (keypress === "Enter") {
      if (currentGuess === 1 && guess1.length === 5) submitGuess();
      if (currentGuess === 2 && guess2.length === 5) submitGuess();
      if (currentGuess === 3 && guess3.length === 5) submitGuess();
      if (currentGuess === 4 && guess4.length === 5) submitGuess();
      if (currentGuess === 5 && guess5.length === 5) submitGuess();
      if (currentGuess === 6 && guess6.length === 5) submitGuess();
    }
  };
  useEffect(() => {
    setSolutionWord(chooseWord());
  }, []);

  useEffect(() => {
    console.log(solutionWord);
    document.addEventListener("keydown", addEvent);

    return () => document.removeEventListener("keydown", addEvent);
  });

  return (
    <div className="App">
      <h1>Wordle</h1>
      <section className="game">
        <div className="guess" id="guess1">
          <div className="guess_tile" id="guess1tile1">
            {guess1[0]}
          </div>
          <div className="guess_tile" id="guess1tile2">
            {guess1[1]}
          </div>
          <div className="guess_tile" id="guess1tile3">
            {guess1[2]}
          </div>
          <div className="guess_tile" id="guess1tile4">
            {guess1[3]}
          </div>
          <div className="guess_tile" id="guess1tile5">
            {guess1[4]}
          </div>
        </div>
        <div className="guess" id="guess2">
          <div className="guess_tile" id="guess2tile1">
            {guess2[0]}
          </div>
          <div className="guess_tile" id="guess2tile2">
            {guess2[1]}
          </div>
          <div className="guess_tile" id="guess2tile3">
            {guess2[2]}
          </div>
          <div className="guess_tile" id="guess2tile4">
            {guess2[3]}
          </div>
          <div className="guess_tile" id="guess2tile5">
            {guess2[4]}
          </div>
        </div>
        <div className="guess" id="guess3">
          <div className="guess_tile" id="guess3tile1">
            {guess3[0]}
          </div>
          <div className="guess_tile" id="guess3tile2">
            {guess3[1]}
          </div>
          <div className="guess_tile" id="guess3tile3">
            {guess3[2]}
          </div>
          <div className="guess_tile" id="guess3tile4">
            {guess3[3]}
          </div>
          <div className="guess_tile" id="guess3tile5">
            {guess3[4]}
          </div>
        </div>
        <div className="guess" id="guess4">
          <div className="guess_tile" id="guess4tile1">
            {guess4[0]}
          </div>
          <div className="guess_tile" id="guess4tile2">
            {guess4[1]}
          </div>
          <div className="guess_tile" id="guess4tile3">
            {guess4[2]}
          </div>
          <div className="guess_tile" id="guess4tile4">
            {guess4[3]}
          </div>
          <div className="guess_tile" id="guess4tile5">
            {guess4[4]}
          </div>
        </div>
        <div className="guess" id="guess5">
          <div className="guess_tile" id="guess5tile1">
            {guess5[0]}
          </div>
          <div className="guess_tile" id="guess5tile2">
            {guess5[1]}
          </div>
          <div className="guess_tile" id="guess5tile3">
            {guess5[2]}
          </div>
          <div className="guess_tile" id="guess5tile4">
            {guess5[3]}
          </div>
          <div className="guess_tile" id="guess5tile5">
            {guess5[4]}
          </div>
        </div>
        <div className="guess" id="guess6">
          <div className="guess_tile" id="guess6tile1">
            {guess6[0]}
          </div>
          <div className="guess_tile" id="guess6tile2">
            {guess6[1]}
          </div>
          <div className="guess_tile" id="guess6tile3">
            {guess6[2]}
          </div>
          <div className="guess_tile" id="guess6tile4">
            {guess6[3]}
          </div>
          <div className="guess_tile" id="guess6tile5">
            {guess6[4]}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
