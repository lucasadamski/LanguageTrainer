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
 *          Entry method           ***
 ************************************/
async function onClickUploadFile() {
    Output.initializeDisplay(
        document.getElementById('statsOutput'),
        document.getElementById('responseOutput'),
        document.getElementById('questionOutput'),
        document.getElementById('fileOutput'),
        document.getElementById('videoOutput')
    );

    // Wait for user to upload file
    fileContent = await FileUploader.uploadFile();
    // Parse file and write on screen
    collectionOfTranslations = TextParser.parseFileContentIntoTranslations(fileContent);
    Output.drawFileContent(collectionOfTranslations);   
}

/*************************************
 *Initialization based on user input *
 ************************************/
startNewGameButton.onclick = () => {
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

}