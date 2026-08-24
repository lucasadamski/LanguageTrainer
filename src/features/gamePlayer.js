let wordBank = [{word: '', definition: ''}]; 
let iterator; 
let length; 
let gameOver = false;

function startNewGame(collection) {
    wordBank = collection;
    iterator = 0;
    length = collection.length;
}

function getWordGame() {
    if(gameOver) return null;
    if(wordBank[iterator] != null) return wordBank[iterator].word;
    return null;
}

function provideAnswerForGame(answer) {
    if(gameOver) return null;
    let result = false;
    if(answer === null || answer === undefined) result = false;
    if (answer === wordBank[iterator].definition) result = true;
    if(iterator < length) 
        iterator++;
    else 
        gameOver = true;
    return result;
}

export { startNewGame, getWordGame, provideAnswerForGame };