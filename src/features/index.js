import { lineDivider, wordDivider } from './textParser.js';
import { sum,  uploadFile, readFileAsText } from './fileUploader.js';

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
        return {
            word: separatedLine[0],
            definition: separatedLine[1]
        };
    })

    debugger;
    console.log(collectionOfLines);
    

}
