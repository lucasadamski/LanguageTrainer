let statsOut;
let responseOut; 
let questionOut; 
let fileOut;
let videoOut;


function initializeDisplay(statsElement, responseElement, questionElement, 
        fileListElement, videoElement) {
    statsOut = statsElement;
    responseOut = responseElement;
    questionOut = questionElement; 
    fileOut = fileListElement;
    videoOut = videoElement;

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

export { 
    initializeDisplay, drawWordList, drawFileContent, drawQuestion, drawResponse,
    drawNewGame, drawStats, drawVideo
 };