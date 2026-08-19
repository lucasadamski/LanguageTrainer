function lineDivider(text) {
    const lines = text.split('\n')
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

    return result
            .map(n => n.trim())
            .filter(n => n.length > 0);
} 

export { lineDivider, wordDivider };