import * as Config from '../features/config.js';
import * as MediaPlayer from '../features/mediaPlayer.js';

let initialStatsObject;
initialStatsObject.total = 10;
initialStatsObject.ok = 0;
initialStatsObject.bad = 0;
initialStatsObject.points = 0;
initialStatsObject.okInRow = 0;
initialStatsObject.badInRow = 0;
initialStatsObject.history = [];

test('1st good answer, return FIRST_OK_ANSWER_SOUND_PATH', () => {
  // Arrange
  let statsObject;
  statsObject.total = 10;
  statsObject.ok = 1;
  statsObject.bad = 5;
  statsObject.points = 0;
  statsObject.okInRow = 1;
  statsObject.badInRow = 0;
  statsObject.history = [false, false, false, false, false, true];

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIRST_OK_ANSWER_SOUND_PATH);
});

test('1st bad answer, return FIRST_BAD_ANSWER_SOUND_PATH', () => {
  // Arrange
  let statsObject;
  statsObject.total = 10;
  statsObject.ok = 3;
  statsObject.bad = 1;
  statsObject.points = 0;
  statsObject.okInRow = 0;
  statsObject.badInRow = 0;
  statsObject.history = [true, true, true, false];

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIRST_BAD_ANSWER_SOUND_PATH);
});

test('five bad answers in a row, return FIVE_BAD_ANSWERS_SOUND_PATH', () => {
  // Arrange
  let statsObject;
  statsObject.total = 10;
  statsObject.ok = 0;
  statsObject.bad = 5;
  statsObject.points = 0;
  statsObject.okInRow = 0;
  statsObject.badInRow = 5;
  statsObject.history = [false, false, false, false, false];

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIVE_BAD_ANSWERS_SOUND_PATH);
});

test('five ok answers in a row, return FIVE_OK_ANSWERS_SOUND_PATH', () => {
  // Arrange
  let statsObject;
  statsObject.total = 10;
  statsObject.ok = 5;
  statsObject.bad = 0;
  statsObject.points = 0;
  statsObject.okInRow = 5;
  statsObject.badInRow = 0;
  statsObject.history = [true, true, true, true, true];

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIVE_OK_ANSWERS_SOUND_PATH);
});

test('2 bad answer in a row, play BAD_SOUND_PATH', () => {
  // Arrange
  let statsObject;
  statsObject.total = 10;
  statsObject.ok = 0;
  statsObject.bad = 2;
  statsObject.points = 0;
  statsObject.okInRow = 0;
  statsObject.badInRow = 2;
  statsObject.history = [false, false];

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIVE_BAD_ANSWERS_SOUND_PATH);
});

test('2 ok answer in a row, play OK_SOUND_PATH', () => {
  // Arrange
  let statsObject;
  statsObject.total = 10;
  statsObject.ok = 2;
  statsObject.bad = 0;
  statsObject.points = 0;
  statsObject.okInRow = 2;
  statsObject.badInRow = 0;
  statsObject.history = [true, true];

  MediaPlayer.initializeMediaPlayer(initialStatsObject);
  MediaPlayer.provideStatsToMediaPlayer(statsObject);

  // Act
  let result = MediaPlayer.getSoundToPlay(statsObject);

  // Assert
  expect(result).toBe(Config.FIVE_OK_ANSWERS_SOUND_PATH);
});