let statsOut;
let responseOut; 
let questionOut; 
let fileOut;
let videoOut;
let gameOverScreen; 
let mainMenuScreen;
let gamePlayerScreen;


function initializeDisplay(statsElement, responseElement, questionElement, 
        fileListElement, videoElement, gameOverScr, mainMenuScr,
        gamePlayerScr) {
    statsOut = statsElement;
    responseOut = responseElement;
    questionOut = questionElement; 
    fileOut = fileListElement;
    videoOut = videoElement;
    gameOverScreen = gameOverScr;
    mainMenuScreen = mainMenuScr;
    gamePlayerScreen = gamePlayerScr;

    responseOut.textContent = 'New game started';

    toggleGamePlayerScreen();
    toggleGameOverScreen();
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

function toggleGameOverScreen() {
    console.debug('toggle hidden gameOverScreen');
    gameOverScreen.classList.toggle('hidden');
}

function toggleGamePlayerScreen() {
    console.debug('toggle hidden gamePlayerScreen');
    gamePlayerScreen.classList.toggle('hidden');
}

function toggleMainMenuScreen() {
    console.debug('toggle hidden mainMenuScreen');
    mainMenuScreen.classList.toggle('hidden');
}


export { 
    initializeDisplay, drawWordList, drawFileContent, drawQuestion, drawResponse,
    drawNewGame, drawStats, drawVideo, playSound, getArrayOfAllCheckboxes,
    toggleGameOverScreen, toggleGamePlayerScreen, toggleMainMenuScreen
 };