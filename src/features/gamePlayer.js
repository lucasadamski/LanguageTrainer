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
    let defArr = removePrefixesFromDefinitions(definitionsArray);
    let normalizedArr = normalizeSpecialCharacters(defArr);
    if (normalizedArr.includes(answer)) { 
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

function removePrefixesFromDefinitions(definitionsArray) {
    if(definitionsArray == null || definitionsArray == undefined) return null;
    let prefixes = ['la', 'el', 'los', 'las', 'un', 'uno', 'una'];
    let result = definitionsArray.map(definition => {
        let defArr = definition.trim().split(' ');
        if (defArr.length > 1) {
            if(prefixes.some(n => n === defArr[0].toLowerCase().trim() )) {
                defArr.shift();
                return defArr.join(' ');
            }
        }
        return definition;
    });
    return result;
}

function normalizeSpecialCharacters(definitionsArray) {
    if(definitionsArray == null || definitionsArray == undefined) return null;    
    const normalizeMap = {
            'á': 'a',
            'é': 'e',
            'í': 'i',
            'ó': 'o',
            'ú': 'u',
            'ü': 'u',
            'ñ': 'n',
            '¿': '',
            '¡': ''
        };

    return definitionsArray.map(definition =>
        definition
            .split('')
            .map(ch => normalizeMap[ch] ?? ch)
            .join('')
    );

}

export { startNewGame, getWordGame, provideUserInputToGameEngine };