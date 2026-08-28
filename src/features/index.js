import { lineDivider, wordDivider } from './textParser.js';
import { uploadFile, readFileAsText } from './fileUploader.js';
import { initializeDisplay, drawWordList, drawFileContent } from './display.js';

window.onClickUploadFile = onClickUploadFile;

let fileContent = ''; 

const translation = {
    word: '', 
    definition: ''
}

async function onClickUploadFile() {
    initializeDisplay(
        document.getElementById('fileOutput'),
        document.getElementById('fileOutput'),
        document.getElementById('fileOutput'),
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
}
