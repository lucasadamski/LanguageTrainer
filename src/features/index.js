import { lineDivider, wordDivider } from './textParser.js';
import { sum,  uploadFile, readFileAsText } from './fileUploader.js';
import { drawList } from './output.js';

window.onClickUploadFile = onClickUploadFile;

let fileContent = ''; 

const translation = {
    word: '', 
    definition: ''
}


async function onClickUploadFile() {
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

    let output = document.getElementById('fileOutput');
    drawList(collectionOfTranslations, output);


}
