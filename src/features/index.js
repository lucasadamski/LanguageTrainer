import { lineDivider, wordDivider } from './textParser.js';
import { uploadFile, readFileAsText } from './fileUploader.js';
import { initializeDisplay, drawWordList, drawFileContent, drawQuestion } from './display.js';
import { startNewGame, getWordGame, provideAnswerForGame } from './gamePlayer.js';
import { initializeStats, provideStatsAnswer } from './stats.js';

window.onClickUploadFile = onClickUploadFile;

let wordOutput;
let answerButton = document.getElementById('answerButton');
let answerData = document.getElementById('answerData');
let responseFromAnswer;

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
 
   
}

 answerButton.onclick = () => {
    responseFromAnswer = provideAnswerForGame(answerData.value);
    if(responseFromAnswer){
        console.log('Good answer');
    }
    else {
        console.log('Wrong answer');
    }
    wordOutput = getWordGame();
    if(wordOutput == null) {
        drawQuestion('Game over');
    }
    else drawQuestion(wordOutput);
}