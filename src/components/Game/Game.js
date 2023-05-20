import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import styles from "../../styles.css";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleNewGuess(guess) {
    const nextGuesses = [...guesses];
    const id=   crypto.randomUUID();
    nextGuesses.push({guess,id});
    setGuesses(nextGuesses);
  }

  return (
    <div className={styles.gameWrapper}>
      <GuessResults guesses={guesses} />
      <GuessInput handleNewGuess={handleNewGuess} />
    </div>
  );
}

export default Game;
