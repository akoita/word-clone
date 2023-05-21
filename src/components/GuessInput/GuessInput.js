import React from "react";
import {GUESS_LENGTH} from "../../constants";

function GuessInput({handleNewGuess}) {
    const [guess, setGuess] = React.useState('')

    return (<form className="guess-input-wrapper"
                  onSubmit={event => {
                      event.preventDefault();
                      console.log(guess);
                      setGuess('');
                      handleNewGuess(guess);

                  }}
    >
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={guess}       pattern={"[A-Z]{"+GUESS_LENGTH+"}"}
               onChange={(event) => {
            const inputValue = event.target.value.toString().toUpperCase();
            setGuess(inputValue);
        }}/>
    </form>);
}

export default GuessInput;
