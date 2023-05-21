export const NUM_OF_GUESSES_ALLOWED = 6;

export const GUESS_LENGTH=5;

export const GUESS_UNIQUE_IDS = [];
for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
    GUESS_UNIQUE_IDS.push(crypto.randomUUID());
}
