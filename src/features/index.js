import { lineDivider, wordDivider } from './textParser.js';
import { uploadFile, readFileAsText } from './fileUploader.js';
import { initializeDisplay, drawWordList, drawFileContent, drawQuestion, 
    drawResponse, drawNewGame, drawStats } from './display.js';
import { startNewGame, getWordGame, provideAnswerForGame } from './gamePlayer.js';
import { initializeStats, provideStatsAnswer, getStatsObject } from './stats.js';

window.onClickUploadFile = onClickUploadFile;

let wordOutput;
let answerButton = document.getElementById('answerButton');
let answerData = document.getElementById('answerData');
let responseFromAnswer;
let statsObject;

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
    firstRoundOfQuestion();
    drawNewGame();
}

 answerButton.onclick = () => {
    //Get data from engine 
    //Display on screen
    //Get input from user
    //Provide data to engine
    
    responseFromAnswer = provideAnswerForGame(answerData.value);
    provideStatsAnswer(responseFromAnswer);
    
    statsObject = getStatsObject();
    drawStats(statsObject);

    drawResponse(responseFromAnswer);
    wordOutput = getWordGame();
    if(wordOutput == null) {
        drawQuestion('Game over');
    }
    else drawQuestion(wordOutput);
}

function firstRoundOfQuestion() {
    wordOutput = getWordGame();
    drawQuestion(wordOutput);
    statsObject = getStatsObject();
    drawStats(statsObject);
}

function getDataFromEngine() {

}

function displayDataOnScreen() {
    
}

function getInputFromUser() {
    
}

function ProvideDataToEngine() {
    
}