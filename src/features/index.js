import { lineDivider, wordDivider } from './textParser.js';
import { uploadFile, readFileAsText } from './fileUploader.js';
import { initializeDisplay, drawWordList, drawFileContent, drawQuestion, 
    drawResponse, drawNewGame, drawStats } from './display.js';
import { startNewGame, getWordGame, provideUserInputToGameEngine } from './gamePlayer.js';
import { initializeStats, provideStatsAnswer, getStatsObject } from './stats.js';

window.onClickUploadFile = onClickUploadFile;

let wordOutput;
let answerButton = document.getElementById('answerButton');
let answerData = document.getElementById('answerData');
let responseFromAnswer;
let statsObject;
let userInput;

let fileContent = ''; 

const translation = {
    word: '', 
    definition: ''
}

async function onClickUploadFile() {
    initializeDisplay(
        document.getElementById('statsOutput'),
        document.getElementById('responseOutput'),
        document.getElementById('questionOutput'),
        document.getElementById('fileOutput')
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

    drawFileContent(collectionOfTranslations);

    startNewGame(collectionOfTranslations);
    initializeStats(collectionOfTranslations);
    statsObject = getStatsObject();
    drawStats(statsObject);
    wordOutput = getWordGame();
    drawQuestion(wordOutput);
}
//initialize display new game   
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

    // Display on screen
    drawStats(statsObject);
    drawQuestion(wordOutput);
    drawResponse(responseFromAnswer);
}
function getDataFromEngine() {

}

function displayDataOnScreen() {
    
}

function getInputFromUser() {
    
}

function ProvideDataToEngine() {
    
}