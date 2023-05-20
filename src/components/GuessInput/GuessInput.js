import React from "react";

import styles from "../../styles.css";

function GuessInput() {
    const [guess, setGuess] = React.useState('')

    return (<form className={styles.guessInputWrapper}
                  onSubmit={event => {
                      event.preventDefault();
                      console.log(guess);
                      setGuess('');
                  }}
    >
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={guess}       pattern="[A-Z]{6}"
               onChange={(event) => {
            const inputValue = event.target.value.toString().toUpperCase();
            setGuess(inputValue);
        }}/>
    </form>);
}

export default GuessInput;
