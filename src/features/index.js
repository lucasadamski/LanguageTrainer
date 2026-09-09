import { lineDivider, wordDivider } from './textParser.js';
import { uploadFile, readFileAsText } from './fileUploader.js';
import * as Display from './display.js';
import { startNewGame, getWordGame, provideUserInputToGameEngine } from './gamePlayer.js';
import { initializeStats, provideStatsAnswer, getStatsObject } from './stats.js';
import * as MediaPlayer from './mediaPlayer.js';

window.onClickUploadFile = onClickUploadFile;

let wordOutput;
let answerButton = document.getElementById('answerButton');
let answerData = document.getElementById('answerData');
let responseFromAnswer;
let statsObject;
let userInput;
let videoUrl;

let fileContent = ''; 

const translation = {
    word: '', 
    definition: ''
}

async function onClickUploadFile() {
    Display.initializeDisplay(
        document.getElementById('statsOutput'),
        document.getElementById('responseOutput'),
        document.getElementById('questionOutput'),
        document.getElementById('fileOutput'),
        document.getElementById('videoOutput')
    );


    fileContent = await uploadFile();

    let collectionOfLines = lineDivider(fileContent);
    let collectionOfTranslations = collectionOfLines.map(line => {
        let separatedLine = wordDivider(line);
        if(separatedLine === undefined) return null;
        return {
            word: separatedLine[0],
            definition: separatedLine[1]
        };
    })
    .filter(n => n !== null);

    Display.drawFileContent(collectionOfTranslations);

    startNewGame(collectionOfTranslations);

    initializeStats(collectionOfTranslations);
    statsObject = getStatsObject();
    MediaPlayer.initializeMediaPlayer(statsObject)
    wordOutput = getWordGame();
    Display.drawStats(statsObject);
    Display.drawQuestion(wordOutput);
}

/*************************************
 * MAIN EVENT LOOP OF THE PROGRAM ***
 ************************************/
 answerButton.onclick = () => {
    // Get input from user
    userInput = answerData.value;
    
    // Provide data to engine
    responseFromAnswer = provideUserInputToGameEngine(userInput);
    provideStatsAnswer(responseFromAnswer);

    // Get data from engine 
    wordOutput = getWordGame();
    statsObject = getStatsObject();
    
    // Play media 
    MediaPlayer.provideStatsToMediaPlayer(statsObject);
    videoUrl = MediaPlayer.getVideoToPlay(statsObject);

    // Display on screen
    Display.drawStats(statsObject);
    Display.drawQuestion(wordOutput);
    Display.drawResponse(responseFromAnswer);
    Display.drawVideo(videoUrl);

}