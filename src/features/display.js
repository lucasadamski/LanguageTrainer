let statsOut;
let answerOut; 
let questionOut; 
let fileOut;


function initializeDisplay(statsElement, answerElement, questionElement, fileListElement) {
    statsOut = statsElement;
    answerOut = answerElement;
    questionOut = questionElement; 
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

function drawQuestion(data) {
    let target = questionOut;
    target.textContent = data;
}

export { initializeDisplay, drawWordList, drawFileContent, drawQuestion };