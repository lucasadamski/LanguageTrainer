import * as TextParser from '../../src/features/textParser.js';

let twoLines = `this is 
a sample`;
test('twoLines', () => {
  expect(TextParser.lineDivider(twoLines).length).toBe(2);
});

let threeLines = `this is 
a sample
three lines `;
test('threeLines', () => {
  expect(TextParser.lineDivider(threeLines).length).toBe(3);
});

let oneLines = ` `;
test('oneLines', () => {
  expect(TextParser.lineDivider(oneLines).length).toBe(1);
});


//word dividers 

let word1 = 'cos; tam'; 
test('word1', () => {
  let result = TextParser.wordDivider(word1);
  expect(result[0]).toBe('cos');
  expect(result[1]).toBe('tam');
  expect(result.length).toBe(2);
})


let word2 = 'cos cos cos  ; tam'; 
test(word2, () => {
  let result = TextParser.wordDivider(word2);
  expect(result[0]).toBe('cos cos cos');
  expect(result[1]).toBe('tam');
  expect(result.length).toBe(2);
})

let word3 = 'cos-cos  ; tam'; 
test(word3, () => {
  let result = TextParser.wordDivider(word3);
  expect(result[0]).toBe('cos-cos');
  expect(result[1]).toBe('tam');
  expect(result.length).toBe(2);
})

let word4 = '; tam'; 
test(word4, () => {
  let result = TextParser.wordDivider(word4);
   expect(result).toBe(undefined);
})

let word5 = 'cos,tam'; 
test(word5, () => {
  let result = TextParser.wordDivider(word5);
  expect(result[0]).toBe('cos');
  expect(result[1]).toBe('tam');
  expect(result.length).toBe(2);
})

let word6 = 'cos;tam;cos;tam;'; 
test(word6, () => {
  let result = TextParser.wordDivider(word6);
  expect(result).toBe(undefined);
})

let word7 = ' - cos'; 
test(word7, () => {
  let result = TextParser.wordDivider(word7);
  expect(result).toBe(undefined);
})

test('parses text into translations', () => {
  // Arange 
  let sample = 
  `hazme un favor                                                      - do me a favour
  que asco                                                            - how disgusting
  `;
  let expectedResult = [
    { word: 'hazme un favor', definition: 'do me a favour' },
    { word: 'que asco', definition: 'how disgusting' }
  ];
  // Act
  let actualResult = TextParser.parseFileContentIntoTranslations(sample);
  // Assert
  expect(actualResult).toEqual(expectedResult);
});


test('returns only those translations that have corressponding true element in other array', () => {
  // Arange 
   let allTranslations = [
    { word: 'w0', definition: 'd0' },
    { word: 'w1', definition: 'd1' },
    { word: 'w2', definition: 'd2' }
  ];
  let correspondingArray = [ true, false, true ];
  let expectedResult = [
    { word: 'w0', definition: 'd0' },
    { word: 'w2', definition: 'd2' }
  ];
  // Act
  let actualResult = TextParser.getSelectedTranslations(allTranslations, correspondingArray);
  // Assert
  expect(actualResult).toEqual(expectedResult);
});

/* Swap translations */


test('when swap() called, given correct translation, returns collections of swapped elements', () => {
  // Arange 
   let initialTranslations = [
    { word: 'w0', definition: 'd0' },
    { word: 'w1', definition: 'd1' },
    { word: 'w2', definition: 'd2' }
  ];
  let expectedResult = [    
    { word: 'd1', definition: 'w1' },
    { word: 'd0', definition: 'w0' },
    { word: 'd2', definition: 'w2' }
  ];
  // Act
  let actualResult = TextParser.getSelectedTranslations(initialTranslations);
  // Assert
  expect(actualResult).toEqual(expectedResult);
});