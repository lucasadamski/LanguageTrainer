let statsOut;
let answerOut; 
let wordListOut; 
let fileOut;


function initializeDisplay(statsElement, answerElement, wordListElement, fileListElement) {
    statsOut = statsElement;
    answerOut = answerElement;
    wordListOut = wordListElement; 
    fileOut = fileListElement;
}

function drawWordList(collection) {

}

function drawFileContent(data) {
    let target = fileOut;
    data.forEach(t => {
        target.innerHtml = '';
        const div = document.createElement('div');
        const wordP  = document.createElement('p');
        wordP.textContent = `Word: ${t.word}`;
        const definitionP = document.createElement('p');
        definitionP.textContent = `Definition: ${t.definition}`;
        div.appendChild(wordP);
        div.appendChild(definitionP);
        target.appendChild(div);
    });
}

export { initializeDisplay, drawWordList, drawFileContent };