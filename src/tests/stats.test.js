import { initializeStats, provideStatsAnswer } from '../features/stats.js';

const translation = {
    word: '', 
    definition: ''
}

const collection1 = [
  {word: '', definition: ''},
  {word: '', definition: ''}
]
test('initialize', () => {
  let result = initializeStats(collection1);
  expect(result.total).toBe(2);
  expect(result.ok).toBe(0);
  expect(result.bad).toBe(0);
  expect(result.points).toBe(0);
  expect(result.streaks).toBe(0);
});


const collection2 = [
  {word: '', definition: ''},
  {word: '', definition: ''}
]
test('one good answer for collection of 2', () => {
  let result = initializeStats(collection2);
  result = provideStatsAnswer(true);
  expect(result.total).toBe(2);
  expect(result.ok).toBe(1);
  expect(result.bad).toBe(0);
  expect(result.points).toBe(0);
  expect(result.streaks).toBe(0);
});

const collection3 = [
  {word: '', definition: ''},
  {word: '', definition: ''}
]
test('two good answers for collection of 2', () => {
  let result = initializeStats(collection3);
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);
  expect(result.total).toBe(2);
  expect(result.ok).toBe(2);
  expect(result.bad).toBe(0);
  expect(result.points).toBe(0);
  expect(result.streaks).toBe(0);
});

const collection4 = [
  {word: '', definition: ''},
  {word: '', definition: ''}
]
test('three good answers for collection of 2, should not accept and keep the restul as 2 good answers', () => {
  let result = initializeStats(collection4);
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);
  expect(result.total).toBe(2);
  expect(result.ok).toBe(2);
  expect(result.bad).toBe(0);
  expect(result.points).toBe(0);
  expect(result.streaks).toBe(0);
});



test('Five good answers in row, should have 5 good answers, and 5 answers in a row good', () => {
  // Arrange
  const collectionOfTen = [
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''}
  ]
  let result = initializeStats(collectionOfTen);

  // Act
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);

  // Assert
  expect(result.total).toBe(10);
  expect(result.ok).toBe(5);
  expect(result.bad).toBe(0);
  expect(result.points).toBe(0);
  expect(result.okInRow).toBe(5);
  expect(result.badInRow).toBe(0);
  expect(result.history).toBe([true, true, true, true, true]);
});


test('Five good answers in row, should have 5 bad answers, and 5 answers in a row bad', () => {
  // Arrange
  const collectionOfTen = [
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''}
  ]
  let result = initializeStats(collectionOfTen);

  // Act
  result = provideStatsAnswer(false);
  result = provideStatsAnswer(false);
  result = provideStatsAnswer(false);
  result = provideStatsAnswer(false);
  result = provideStatsAnswer(false);

  // Assert
  expect(result.total).toBe(10);
  expect(result.ok).toBe(0);
  expect(result.bad).toBe(5);
  expect(result.points).toBe(0);
  expect(result.okInRow).toBe(0);
  expect(result.badInRow).toBe(5);
  expect(result.history).toBe([false, false, false, false, false]);
});


test('2 bad answers in row, 2 answers in a row bad', () => {
  // Arrange
  const collectionOfTen = [
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''},
    {word: '', definition: ''}
  ]
  let result = initializeStats(collectionOfTen);

  // Act
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(true);
  result = provideStatsAnswer(false);
  result = provideStatsAnswer(false);

  // Assert
  expect(result.total).toBe(10);
  expect(result.ok).toBe(3);
  expect(result.bad).toBe(2);
  expect(result.points).toBe(0);
  expect(result.okInRow).toBe(0);
  expect(result.badInRow).toBe(2);
  expect(result.history).toBe([true, true, true, false, false]);
});