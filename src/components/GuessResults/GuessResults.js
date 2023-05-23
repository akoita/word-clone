import React from "react";

import Guess from "../Guess";
import {GUESS_UNIQUE_IDS, NUM_OF_GUESSES_ALLOWED} from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses}) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) =>
        i < guesses.length ? <Guess guess={guesses[i]} key={GUESS_UNIQUE_IDS[i]}/> : <Guess guess={undefined} key={GUESS_UNIQUE_IDS[i]}/>
      )}
    </div>
  );
}

export default GuessResults;
