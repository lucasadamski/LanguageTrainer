import { startNewGame, getWordGame, provideUserInputToGameEngine } from '../../src/features/gamePlayer.js';

let collection = [ {word: 'testWord', definition: 'testDef' } ];

test('play one word collection with good answer', () => {
  startNewGame(collection);
  let word = getWordGame();
  expect(word).toBe('testWord');
  let response = provideUserInputToGameEngine('testDef');
  expect(response).toBe(true);
});

test('play one word collection with bad answer', () => {
  startNewGame(collection);
  let word = getWordGame();
  expect(word).toBe('testWord');
  let response = provideUserInputToGameEngine('testDefff');
  expect(response).toBe(false);
});

test('try to get second word from one word collection, should return null', () => {
  startNewGame(collection);
  let word = getWordGame();
  expect(word).toBe('testWord');
  let response = provideUserInputToGameEngine('testDefff');
  expect(response).toBe(false);
  word = getWordGame();
  expect(word).toBe(null);
});

test('definitions separated by comma, provided good answer no 2, accepts one of them', () => {
  // Arrange
  let testCollection = [ {word: 'testWord', definition: 'testDef,testDef2, testDef3' } ];
  startNewGame(testCollection);
  let question = getWordGame();
  let answer = 'testDef2';
  
  // Act
  let response = provideUserInputToGameEngine(answer);
  
  // Assert
  expect(response).toBe(true);
});

test('definitions separated by comma, provided good answer no 3, accepts one of them', () => {
  // Arrange
  let testCollection = [ {word: 'testWord', definition: 'testDef,testDef2, testDef3' } ];
  startNewGame(testCollection);
  let question = getWordGame();
  let answer = 'testDef3';
  
  // Act
  let response = provideUserInputToGameEngine(answer);
  
  // Assert
  expect(response).toBe(true);
});

test('definitions separated by comma, provided bad answer, rejects it', () => {
  // Arrange
  let testCollection = [ {word: 'testWord', definition: 'testDef,testDef2, testDef3' } ];
  startNewGame(testCollection);
  let question = getWordGame();
  let answer = 'badAnswer';
  
  // Act
  let response = provideUserInputToGameEngine(answer);
  
  // Assert
  expect(response).toBe(false);
});

test('definitions separated by comma, provided bad answer, rejects it', () => {
  // Arrange
  let testCollection = [ {word: 'testWord', definition: 'testDef,testDef2, testDef3' } ];
  startNewGame(testCollection);
  let question = getWordGame();
  let answer = 'badAnswer';
  
  // Act
  let response = provideUserInputToGameEngine(answer);
  
  // Assert
  expect(response).toBe(false);
});


test('ignore prefix "la" in answer', () => {
  // Arrange
  let testCollection = [ {word: 'testWord', definition: ' la testDef2' } ];
  startNewGame(testCollection);
  let question = getWordGame();
  let answer = 'testDef2';
  
  // Act
  let response = provideUserInputToGameEngine(answer);
  
  // Assert
  expect(response).toBe(true);
});


test('ignore prefix "un" in answer', () => {
  // Arrange
  let testCollection = [ {word: 'testWord', definition: ' un testDef1, testDef2' } ];
  startNewGame(testCollection);
  let question = getWordGame();
  let answer = 'testDef1';
  
  // Act
  let response = provideUserInputToGameEngine(answer);
  
  // Assert
  expect(response).toBe(true);
});

test('ignore spanish letters for answers', () => {
  // Arrange
  let testCollection = [ 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }, 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }, 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }, 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }, 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }, 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }, 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }, 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }, 
    {word: 'testWord', definition: 'test_á, test_é, test_í, test_ó, test_ú, test_ü, test_ñ, test_¿, test_¡' }
  ];
  startNewGame(testCollection);
  let question = getWordGame();
  let answers = ['test_a', 'test_e', 'test_i', 'test_o', 'test_u', 'test_n', 'test_', 'test_'];

  answers.forEach(answer => {
    // Act
    let response = provideUserInputToGameEngine(answer);
  
    // Assert
    expect(response).toBe(true);
  })
  });

  test('ignore spanish letters for questions', () => {
  // Arrange
  let testCollection = [ 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }, 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }, 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }, 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }, 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }, 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }, 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }, 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }, 
    {word: 'testWord', definition: 'test_a, test_e, test_i, test_o, test_u, test_u, test_n, test_, test_' }
  ];
  startNewGame(testCollection);
  let question = getWordGame();
  let answers = ['test_á', 'test_é', 'test_í', 'test_ó', 'test_ú', 'test_ü', 'test_ñ', 'test_¿', 'test_¡'];

  answers.forEach(answer => {
    // Act
    let response = provideUserInputToGameEngine(answer);
  
    // Assert
    expect(response).toBe(true);
  })
  });