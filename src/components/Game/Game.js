import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import styles from "../../styles.css";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess, isGuessCorrect } from "../../game-helpers";
import Banner from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState(false);

  function handleNewGuess(guess) {
    const nextGuesses = [...guesses];
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      nextGuesses.shift();
    }
    const guessResult = checkGuess(guess, answer);
    setWon(isGuessCorrect(guessResult));
    nextGuesses.push(guessResult);
    setGuesses(nextGuesses);
  }

  return (
    <div className={styles.gameWrapper}>
      {(won || guesses.length === NUM_OF_GUESSES_ALLOWED) && (
        <Banner won={won} nbGuesses={guesses.length}/>
      )}
      <GuessResults guesses={guesses} />
      <GuessInput handleNewGuess={handleNewGuess} disabled={won || guesses.length === NUM_OF_GUESSES_ALLOWED} />
    </div>
  );
}

export default Game;
