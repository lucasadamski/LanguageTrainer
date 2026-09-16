let statsOut;
let responseOut; 
let questionOut; 
let fileOut;
let videoOut;
let gameOverDiv; 


function initializeDisplay(statsElement, responseElement, questionElement, 
        fileListElement, videoElement, gameOver) {
    statsOut = statsElement;
    responseOut = responseElement;
    questionOut = questionElement; 
    fileOut = fileListElement;
    videoOut = videoElement;
    gameOverDiv = gameOver;

    responseOut.textContent = 'New game started';
}

function drawWordList(collection) {

}

function drawFileContent(data) {
    let target = fileOut;
    data.forEach(t => {
        target.innerHtml = '';
        const div = document.createElement('div');
        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = true;
        const wordP  = document.createElement('p');
        wordP.textContent = `Word: ${t.word}`;
        const definitionP = document.createElement('p');
        definitionP.textContent = `Definition: ${t.definition}`;
        div.appendChild(checkBox);
        div.appendChild(wordP);
        div.appendChild(definitionP);
        target.appendChild(div);
    });
}

function getArrayOfAllCheckboxes(){
    if (!fileOut) return [];

    return Array.from(fileOut.querySelectorAll('input[type="checkbox"]'))
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
    target.textContent = `Total: ${data.total}, OK: ${data.ok}, Bad: ${data.bad}, Points: ${data.points}, OK in row: ${data.okInRow}, Bad in row: ${data.badInRow}`;
}

function drawVideo(videoUrl) {
    let target = videoOut;
    target.innerHTML = '';
    const video = document.createElement('video');
    video.src = videoUrl;
    video.muted = true;
    video.autoplay = true;
    video.controls = true;
    target.appendChild(video);
    video.play();
    console.debug('Playing video from ' + videoUrl);
}

function playSound(soundUrl) {
    const audio = new Audio(soundUrl);
    audio.play();
    console.debug('Playing sound from ' + soundUrl);
}

function drawGameOverScreen() {
    let target = gameOverDiv;
    if (!target) return;

    target.innerHTML = '';

    const newGameButton = document.createElement('button');
    newGameButton.id = 'newGameButton';
    newGameButton.type = 'button';
    newGameButton.textContent = 'New Game';

    const restartGameButton = document.createElement('button');
    restartGameButton.id = 'restartGameButton';
    restartGameButton.type = 'button';
    restartGameButton.textContent = 'Restart Game';

    const statsSummary = statsOut;

    target.appendChild(newGameButton);
    target.appendChild(restartGameButton);
    target.appendChild(statsOut);

}

export { 
    initializeDisplay, drawWordList, drawFileContent, drawQuestion, drawResponse,
    drawNewGame, drawStats, drawVideo, playSound, getArrayOfAllCheckboxes,
    drawGameOverScreen
 };