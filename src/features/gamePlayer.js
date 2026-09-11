let wordBank = [{word: '', definition: ''}]; 
let iterator; 
let length; 
let gameOver = false;
let response = {data: '', gameOver: ''};

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

function provideUserInputToGameEngine(answer) {
    if(gameOver) return null;
    let result = checkAnswer(answer);
    if(iterator < length) 
        iterator++;
    else 
        gameOver = true;
    return result;
}

function checkAnswer(answer) {
    if (answer === null || answer === undefined) {
        result = false;
    } 
    let definitionsArray = splitDefinitionsBySeparator(wordBank[iterator].definition);
    if (definitionsArray.includes(answer)) { 
        return true;
    }
    return false;    
}

function splitDefinitionsBySeparator(definition) {
    if(definition.includes(',')) {
        return definition.split(',').map(n => n.trim());
    }
    return [definition];
}

export { startNewGame, getWordGame, provideUserInputToGameEngine };