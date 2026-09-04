let statsOut;
let responseOut; 
let questionOut; 
let fileOut;


function initializeDisplay(statsElement, responseElement, questionElement, fileListElement) {
    statsOut = statsElement;
    responseOut = responseElement;
    questionOut = questionElement; 
    fileOut = fileListElement;

    responseOut.textContent = 'New game started';
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

function drawResponse(data) {
    let target = responseOut;
    if(data) {
        target.textContent = 'Good answer';
    }
    else {
        target.textContent = 'Wrong answer';
    }
}

function drawNewGame() {
    let target = responseOut;
    target.textContent = 'New ganme started';
}

function drawStats(data) {
    let target = statsOut;
    target.textContent = `Total: ${data.total}, OK: ${data.ok}, Bad: ${data.bad}, Points: ${data.points}, Streaks: ${data.streaks}`;
}

export { 
    initializeDisplay, drawWordList, drawFileContent, drawQuestion, drawResponse,
    drawNewGame, drawStats
 };