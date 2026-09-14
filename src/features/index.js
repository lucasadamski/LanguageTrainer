import * as TextParser from './textParser.js';
import * as FileUploader from './fileUploader.js';
import * as Output from './output.js';
import * as GamePlayer from './gamePlayer.js';
import * as Stats from './stats.js';
import * as MediaPlayer from './mediaPlayer.js';

window.onClickUploadFile = onClickUploadFile;

let wordOutput;
let answerButton = document.getElementById('answerButton');
let answerData = document.getElementById('answerData');
let startNewGameButton = document.getElementById('startNewGameButton');
let responseFromAnswer;
let statsObject;
let userInput;
let videoUrl;
let soundUrl;

let fileContent;

let collectionOfTranslations;

/*************************************
 * INITIALIZATION METHOD           ***
 ************************************/
async function onClickUploadFile() {
    Output.initializeDisplay(
        document.getElementById('statsOutput'),
        document.getElementById('responseOutput'),
        document.getElementById('questionOutput'),
        document.getElementById('fileOutput'),
        document.getElementById('videoOutput')
    );

    fileContent = await FileUploader.uploadFile();

    collectionOfTranslations = TextParser.parseFileContentIntoTranslations(fileContent);
    
    
    Output.drawFileContent(collectionOfTranslations);   
}

startNewGameButton.onclick = () => {
    // TODO 
    // get selected array 
    let selectedIdsArray = Output.getArrayOfAllCheckboxes();
    // get sellect translations 
    let selectedTranslations = TextParser.getSelectedTranslations(collectionOfTranslations, selectedIdsArray); 
    // start new game with collection
    Output.drawStats(statsObject);
    Output.drawQuestion(wordOutput);
    Output.drawVideo(videoUrl);
    Output.playSound(soundUrl);
    GamePlayer.startNewGame(collectionOfTranslations);
    
    Stats.initializeStats(collectionOfTranslations);
    statsObject = Stats.getStatsObject();
    
    MediaPlayer.initializeMediaPlayer(statsObject)
    soundUrl = MediaPlayer.getSoundToPlay();
    videoUrl = MediaPlayer.getVideoToPlay();
    
    wordOutput = GamePlayer.getWordGame();
    
}

/*************************************
 * MAIN EVENT LOOP OF THE PROGRAM ***
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

}