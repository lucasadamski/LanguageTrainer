import * as TextParser from './textParser.js';
import * as Output from './output.js';
import * as GamePlayer from './gamePlayer.js';
import * as Stats from './stats.js';
import * as MediaPlayer from './mediaPlayer.js';
import * as DataRepository from './dataRepository.js';

window.onClickStartTraining = onClickStartTraining;


let wordOutput;
let answerData = document.getElementById('answerData');

// Buttons input
let answerButton = document.getElementById('answerButton');
let startNewGameButton = document.getElementById('startNewGameButton');
let endGameButton = document.getElementById('endGameButton');
let newGameButton = document.getElementById('newGameButton');
let restartGameButton = document.getElementById('restartGameButton');
let selectAllButton = document.getElementById('selectAllButton');
let deselectAllButton = document.getElementById('deselectAllButton');
let swapWordsWithDefinitionsButton = document.getElementById('swapWordsWithDefinitionsButton');


let responseFromAnswer;
let statsObject;
let userInput;
let videoUrl;
let soundUrl;

let fileContent;
let collectionOfTranslations;

/*************************************
 *          Entry method           ***
 ************************************/
function onClickStartTraining() {
    Output.initializeDisplay(
        document.getElementById('statsOutput'),
        document.getElementById('responseOutput'),
        document.getElementById('questionOutput'),
        document.getElementById('fileOutput'),
        document.getElementById('videoOutput'),
        document.getElementById('gameOverScreen'),
        document.getElementById('mainMenuScreen'),
        document.getElementById('gamePlayerScreen'),
        document.getElementById('gameOverStats'),
        document.getElementById('settingsScreen')
    );
    
    Output.hideMainMenuScreen();
    Output.hideGameOverScreen();
    Output.hideMainMenuScreen();
    Output.hideGamePlayerScreen();

    Output.showSettingsScreen();

    // Wait for user to upload file
    fileContent = DataRepository.getData();
    // Parse file and write on screen
    collectionOfTranslations = TextParser.parseFileContentIntoTranslations(fileContent);
    Output.drawFileContent(collectionOfTranslations);   
}

/*************************************
 *Initialization based on user input *
 ************************************/
startNewGameButton.onclick = () => {
    // Show GamePlayerScreen only
    Output.hideGameOverScreen();
    Output.hideMainMenuScreen();
    Output.hideSettingsScreen();
    Output.showGamePlayerScreen();


    // Filter only selected translations
    let selectedIdsArray = Output.getArrayOfAllCheckboxes();
    let selectedTranslations = TextParser.getSelectedTranslations(collectionOfTranslations, selectedIdsArray.map(n => n.checked)); 
   
    // Initialization
    GamePlayer.startNewGame(selectedTranslations);
    Stats.initializeStats(selectedTranslations);
    statsObject = Stats.getStatsObject();
    MediaPlayer.initializeMediaPlayer(statsObject)
    
    // First round, play first word
    wordOutput = GamePlayer.getWordGame();
    
    // Draw
    Output.drawStats(statsObject);
    Output.drawQuestion(wordOutput);
    Output.drawVideo(videoUrl);
    Output.playSound(soundUrl);
    
    // Play media
    soundUrl = MediaPlayer.getSoundToPlay();
    videoUrl = MediaPlayer.getVideoToPlay();

    answerData.focus();
}

/*************************************
 *              Game loop          ***
 ************************************/
 answerButton.onclick = () => {
    // Get input from user
    userInput = answerData.value;
    
    // Provide data to engine
    responseFromAnswer = GamePlayer.provideUserInputToGameEngine(userInput);
    Stats.provideStatsAnswer(responseFromAnswer);

    // Get data from engine 
    wordOutput = GamePlayer.getWordGame();
    statsObject = Stats.getStatsObject();
    
    // Play media 
    MediaPlayer.provideStatsToMediaPlayer(statsObject);
    videoUrl = MediaPlayer.getVideoToPlay();
    soundUrl = MediaPlayer.getSoundToPlay();

    // Output on screen and media
    Output.drawStats(statsObject);
    Output.drawQuestion(wordOutput);
    Output.drawResponse(responseFromAnswer);
    Output.drawVideo(videoUrl);
    Output.playSound(soundUrl);

    // Check if game is over
    if(wordOutput == null) {
        endGameButton.onclick();
    }

    //clear user input 
    answerData.value = '';
}

answerData.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        answerButton.click();
    }
});

endGameButton.onclick = () => {
    Output.hideGamePlayerScreen();
    Output.showGameOverScreen();
}

restartGameButton.onclick = () => {
    resetUserInputData();
    startNewGameButton.click();
}

newGameButton.onclick = () => {
    resetUserInputData();
    resetUploadedData();
    onClickStartTraining();
}

selectAllButton.onclick = () => {
    Output.selectAllTranslations();
}

deselectAllButton.onclick = () => {
    Output.deselectAllTranslations();
}

swapWordsWithDefinitionsButton.onclick = () => {
    let swapped = TextParser.swapWordsWithDefinitions(collectionOfTranslations);
    collectionOfTranslations = swapped;
    Output.drawFileContent(collectionOfTranslations);
}


function resetUserInputData() {
    responseFromAnswer = '';
    statsObject = '';
    userInput = '';
}

function resetUploadedData() {
    fileContent = '';
    collectionOfTranslations = '';
}