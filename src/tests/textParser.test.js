import { lineDivider, wordDivider } from '../../src/features/textParser.js';

let twoLines = `this is 
a sample`;
test('twoLines', () => {
  expect(lineDivider(twoLines).length).toBe(2);
});

let threeLines = `this is 
a sample
three lines `;
test('threeLines', () => {
  expect(lineDivider(threeLines).length).toBe(3);
});

let oneLines = ` `;
test('oneLines', () => {
  expect(lineDivider(oneLines).length).toBe(1);
});


//word dividers 

let word1 = 'cos; tam'; 
test('word1', () => {
  let result = wordDivider(word1);
  expect(result[0]).toBe('cos');
  expect(result[1]).toBe('tam');
  expect(result.length).toBe(2);
})


let word2 = 'cos cos cos  ; tam'; 
test(word2, () => {
  let result = wordDivider(word2);
  expect(result[0]).toBe('cos cos cos');
  expect(result[1]).toBe('tam');
  expect(result.length).toBe(2);
})

let word3 = 'cos-cos  ; tam'; 
test(word3, () => {
  let result = wordDivider(word3);
  expect(result[0]).toBe('cos-cos');
  expect(result[1]).toBe('tam');
  expect(result.length).toBe(2);
})

let word4 = '; tam'; 
test(word4, () => {
  let result = wordDivider(word4);
  expect(result[0]).toBe('tam');
  expect(result.length).toBe(1);
})

let word5 = 'cos,tam'; 
test(word5, () => {
  let result = wordDivider(word5);
  expect(result[0]).toBe('cos');
  expect(result[1]).toBe('tam');
  expect(result.length).toBe(2);
})