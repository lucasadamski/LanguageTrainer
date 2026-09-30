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
    { word: 'que asco', definition: 'how disgusting' },
    { word: 'hazme un favor', definition: 'do me a favour' }
  ];
  // Act
  let actualResult = TextParser.parseFileContentIntoTranslations(sample);
  // Assert
  expect(actualResult).toEqual(expectedResult);
});

test('parses text into translations', () => {
  // Arange 
  let sample = 
  `te falta mucha para llegar a helipuerto? Casi etoy                  – Are you far from reaching the helipad?  I'm almost there
no hace falta                                                       - it's not necessary / no need
sacame de aqui                                                      - get me out of here
sea como sea                                                        - no matter what
ha levantado muchas sospechas                                       - it has raised a lot of suspicions
ponme con Sarif. Ya!                                                - put me through to Sarif. Now!
lo mire cuanto antes                                                - look at it as soon as possible
no vemos mas que un bucle                                           - we see nothing but a loop
media docena                                                        - half a dozen
caballeros, listos para aterrizar                                   – gentlemen, ready to land
no quiero correr riesgos                                            – I don't want to take risks
estoy listo, genial. Pues salgamos volando                          - I'm ready. Great. Then let's fly out
Puristas humanas, o eso dicen                                       - Human purists, or so they say
  `;
  let expectedResult = [
    { word: 'te falta mucha para llegar a helipuerto? Casi etoy', definition: `Are you far from reaching the helipad?  I'm almost there` },
    { word: 'no hace falta', definition: "it's not necessary / no need" },
    { word: 'sacame de aqui', definition: 'get me out of here' },
    { word: 'sea como sea', definition: 'no matter what' },
    { word: 'ha levantado muchas sospechas', definition: 'it has raised a lot of suspicions' },
    { word: 'ponme con Sarif. Ya!', definition: 'put me through to Sarif. Now!' },
    { word: 'lo mire cuanto antes', definition: 'look at it as soon as possible' },
    { word: 'no vemos mas que un bucle', definition: 'we see nothing but a loop' },
    { word: 'media docena', definition: 'half a dozen' },
    { word: 'caballeros, listos para aterrizar', definition: 'gentlemen, ready to land' },
    { word: 'no quiero correr riesgos', definition: "I don't want to take risks" },
    { word: 'estoy listo, genial. Pues salgamos volando', definition: "I'm ready. Great. Then let's fly out" },
    { word: 'Puristas humanas, o eso dicen', definition: 'Human purists, or so they say' }
  ].reverse();
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
    { word: 'd0', definition: 'w0' },
    { word: 'd1', definition: 'w1' },
    { word: 'd2', definition: 'w2' }
  ];
  // Act
  let actualResult = TextParser.swapWordsWithDefinitions(initialTranslations);
  // Assert
  expect(actualResult).toEqual(expectedResult);
});