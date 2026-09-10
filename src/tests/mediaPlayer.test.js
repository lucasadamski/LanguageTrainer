import * as Config from '../features/config.js';
import * as MediaPlayer from '../features/mediaPlayer.js';

let initialStatsObject = {
  total: 0,
  ok: 0,
  bad: 0,
  points: 0,
  okInRow: 0,
  badInRow: 0,
  history: []
};

test('1st good answer, return FIRST_OK_ANSWER_SOUND_PATH', () => {
  // Arrange
  let statsObject = {
    total: 10,
    ok: 1,
    bad: 5,
    points: 0,
    okInRow: 1,
    badInRow: 0,
    history: [false, false, false, false, false, true]
  };

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIRST_OK_ANSWER_SOUND_PATH);
});

test('1st bad answer, return FIRST_BAD_ANSWER_SOUND_PATH', () => {
  // Arrange
  let statsObject = {
    total: 10,
    ok: 3,
    bad: 1,
    points: 0,
    okInRow: 0,
    badInRow: 0,
    history: [true, true, true, false]
  };

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIRST_BAD_ANSWER_SOUND_PATH);
});

test('five bad answers in a row, return FIVE_BAD_ANSWERS_SOUND_PATH', () => {
  // Arrange
  let statsObject = {
    total: 10,
    ok: 0,
    bad: 5,
    points: 0,
    okInRow: 0,
    badInRow: 5,
    history: [false, false, false, false, false]
  };

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIVE_BAD_ANSWERS_SOUND_PATH);
});

test('five ok answers in a row, return FIVE_OK_ANSWERS_SOUND_PATH', () => {
  // Arrange
  let statsObject = {
    total: 10,
    ok: 5,
    bad: 0,
    points: 0,
    okInRow: 5,
    badInRow: 0,
    history: [true, true, true, true, true]
  };

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIVE_OK_ANSWERS_SOUND_PATH);
});

test('2 bad answer in a row, play BAD_SOUND_PATH', () => {
  // Arrange
  let statsObject = {
    total: 10,
    ok: 0,
    bad: 2,
    points: 0,
    okInRow: 0,
    badInRow: 2,
    history: [false, false]
  };
  
  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIVE_BAD_ANSWERS_SOUND_PATH);
});

test('2 ok answer in a row, play OK_SOUND_PATH', () => {
  // Arrange
  let statsObject = {
    total: 10,
    ok: 2,
    bad: 0,
    points: 0,
    okInRow: 2,
    badInRow: 0,
    history: [true, true]
  };
  
  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIVE_OK_ANSWERS_SOUND_PATH);
});