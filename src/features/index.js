import { lineDivider, wordDivider } from './textParser.js';
import { uploadFile, readFileAsText } from './fileUploader.js';
import { initializeDisplay, drawWordList, drawFileContent } from './display.js';
import { startNewGame, getWordGame, provideAnswerForGame } from './gamePlayer.js';
import { initializeStats, provideStatsAnswer } from './stats.js';

window.onClickUploadFile = onClickUploadFile;

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
    let gameEngineResponse;
    let wordOutput;
    do {
        wordOutput = getWordGame();
        if(wordOutput == null) break;

    } while (gameEngineResponse != null);
}
