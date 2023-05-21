import React from "react";

import { range } from "../../utils";
import {GUESS_LENGTH, GUESS_UNIQUE_IDS} from "../../constants";



function Guess({ guess }) {
  return !!guess ? (
    <p className="guess">
      {range(guess.length).map((i) => (
        <span className="cell" key={i}>
          {guess.charAt(i)}
        </span>
      ))}
    </p>
  ) : (
    <p className="guess">
      {range(GUESS_LENGTH).map((i) => (
      <span className="cell" key={i}></span>))}
    </p>
  );
}

export default Guess;
