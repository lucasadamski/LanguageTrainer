function lineDivider(text) {
    const lines = text.split('\n');
    return lines;
}

function wordDivider(word) {
    let result = [];
    if (word.includes(';')) {
        result = word.split(';');
    }
    else if (word.includes('-')) {
        result = word.split('-');
    }
    else if (word.includes(',')) {
        result = word.split(',');
    }
    else {
        result[0] = word;
    }

    result = result
            .map(n => n.trim())
            .filter(n => n.length > 0);

    if(result.length != 2 || result.some(n => n === undefined)) {
        return undefined;
    }

    return result;
} 

function parseFileContentIntoTranslations(text) {
        let lines = lineDivider(text);
        return lines.map(line => {
            let separatedLine = wordDivider(line);
            if(separatedLine === undefined) return null;
            return {
                word: separatedLine[0],
                definition: separatedLine[1]
            };
        })
        .filter(n => n !== null);
}

function getSelectedTranslations(allTranslations, selectionsArray) {
    if(allTranslations == null || selectionsArray == null || 
        allTranslations.length != selectionsArray.length ) {
            console.error("Can't determine selected items");
        }
    return allTranslations.filter((n, index) => selectionsArray[index] === true);
}

function swapWordsWithDefinitions(translations) {
    return translations.map(n => {
        return {
            word: n.definition, 
            definition: n.word
        }
    })
}



export { lineDivider, wordDivider, parseFileContentIntoTranslations, 
    getSelectedTranslations, swapWordsWithDefinitions };