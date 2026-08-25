import { initializeStats, provideStatsAnswer } from '../features/stats.js';

const statObject = {
  total: 0,
  ok: 0,
  bad: 0,
  points: 0,
  streaks: 0
};

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
  expect(result.total).toBe(2);
  expect(result.ok).toBe(2);
  expect(result.bad).toBe(0);
  expect(result.points).toBe(0);
  expect(result.streaks).toBe(0);
});