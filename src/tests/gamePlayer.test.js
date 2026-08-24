import { startNewGame, getWordGame, provideAnswerForGame } from '../../src/features/gamePlayer.js';

let collection = [ {word: 'testWord', definition: 'testDef' } ];

test('play one word collection with good answer', () => {
  startNewGame(collection);
  let word = getWordGame();
  expect(word).toBe('testWord');
  let response = provideAnswerForGame('testDef');
  expect(response).toBe(true);
});

test('play one word collection with bad answer', () => {
  startNewGame(collection);
  let word = getWordGame();
  expect(word).toBe('testWord');
  let response = provideAnswerForGame('testDefff');
  expect(response).toBe(false);
});

test('try to get second word from one word collection, should return null', () => {
  startNewGame(collection);
  let word = getWordGame();
  expect(word).toBe('testWord');
  let response = provideAnswerForGame('testDefff');
  expect(response).toBe(false);
  word = getWordGame();
  expect(word).toBe(null);
});






