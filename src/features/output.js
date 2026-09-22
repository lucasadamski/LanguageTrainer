let statsOut;
let responseOut; 
let questionOut; 
let fileOut;
let videoOut;
let gameOverScreen; 
let mainMenuScreen;
let gamePlayerScreen;
let settingsScreen;
let gameOverStats;


function initializeDisplay(statsElement, responseElement, questionElement, 
        fileListElement, videoElement, gameOverScr, mainMenuScr,
        gamePlayerScr, gameOverSts, settingsScrn) {
    statsOut = statsElement;
    responseOut = responseElement;
    questionOut = questionElement; 
    fileOut = fileListElement;
    videoOut = videoElement;
    gameOverScreen = gameOverScr;
    mainMenuScreen = mainMenuScr;
    gamePlayerScreen = gamePlayerScr;
    gameOverStats = gameOverSts;
    settingsScreen = settingsScrn

    responseOut.textContent = 'New game started';
}

function drawWordList(collection) {

}

function drawFileContent(data) {
    let target = fileOut;
    target.innerHTML = '';
    data.forEach(t => {  
          const div = document.createElement('div');
        div.className = 'word-row';

        const text = document.createElement('div');
        text.className = 'word-text';

        const wordSpan = document.createElement('span');
        wordSpan.textContent = t.word;

        const defSpan = document.createElement('span');
        defSpan.textContent = t.definition;
        
        const dotsSpan = document.createElement('span');
        dotsSpan.textContent = '................................';

        text.appendChild(wordSpan);
        text.appendChild(dotsSpan);
        text.appendChild(defSpan);


        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = true;

        div.appendChild(text);
        div.appendChild(checkBox);
        target.appendChild(div);
    });
}

function selectAllTranslations() {
    let rows = fileOut.querySelectorAll('.word-row')
    rows.forEach(row => {
        let checkBox = row.querySelector('input[type="checkbox"]');
        if(!checkBox.checked) {
            checkBox.checked = true;
        }
    })
}

function deselectAllTranslations() {
    let rows = fileOut.querySelectorAll('.word-row')
    rows.forEach(row => {
        let checkBox = row.querySelector('input[type="checkbox"]');
        if(checkBox.checked) {
            checkBox.checked = false;
        }
    })
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
    target.textContent = 'New game started';
}

function drawStats(data) {
    let target = statsOut;
    target.textContent = `Total: ${data.total}, OK: ${data.ok}, Bad: ${data.bad}, Points: ${data.points}, OK in row: ${data.okInRow}, Bad in row: ${data.badInRow}`;
    gameOverStats.textContent = target.textContent;
}

function drawVideo(videoUrl) {
    let target = videoOut;
    target.innerHTML = '';
    const video = document.createElement('video');
    video.src = videoUrl;
    video.muted = true;
    video.autoplay = true;
    video.controls = false;
    target.appendChild(video);
    video.play();
    console.debug('Playing video from ' + videoUrl);
}

function playSound(soundUrl) {
    const audio = new Audio(soundUrl);
    audio.play();
    console.debug('Playing sound from ' + soundUrl);
}

// show hide screen
function showGamePlayerScreen() {
    if(gamePlayerScreen.classList.contains('hidden'))
        gamePlayerScreen.classList.remove('hidden');
}

function hideGamePlayerScreen() {
    if(!gamePlayerScreen.classList.contains('hidden'))
        gamePlayerScreen.classList.add('hidden');
}

function showMainMenuScreen() {
    if(mainMenuScreen.classList.contains('hidden'))
        mainMenuScreen.classList.remove('hidden');
}

function hideMainMenuScreen() {
    if(!mainMenuScreen.classList.contains('hidden'))
        mainMenuScreen.classList.add('hidden');
}

function showGameOverScreen() {
    if(gameOverScreen.classList.contains('hidden'))
        gameOverScreen.classList.remove('hidden');
}

function hideGameOverScreen() {
    if(!gameOverScreen.classList.contains('hidden'))
        gameOverScreen.classList.add('hidden');
}

function showSettingsScreen() {
    if(settingsScreen.classList.contains('hidden'))
        settingsScreen.classList.remove('hidden');
}

function hideSettingsScreen() {
    if(!settingsScreen.classList.contains('hidden'))
        settingsScreen.classList.add('hidden');
}

export { 
    initializeDisplay, drawWordList, drawFileContent, drawQuestion, drawResponse,
    drawNewGame, drawStats, drawVideo, playSound, getArrayOfAllCheckboxes, 
    showGamePlayerScreen, hideGamePlayerScreen, showMainMenuScreen, hideMainMenuScreen, 
    showGameOverScreen, hideGameOverScreen, selectAllTranslations, deselectAllTranslations,
    showSettingsScreen, hideSettingsScreen
 };