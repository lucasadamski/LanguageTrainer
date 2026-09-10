import * as Config from './config.js';

let previousStats;
let currentStats;

function initializeMediaPlayer(stats) {
  previousStats = { ...stats };
  currentStats = { ...stats };
}

function provideStatsToMediaPlayer(stats) {
  previousStats = { ...currentStats };
  currentStats = { ...stats };  
}

function getSoundToPlay(stats) {

  if(currentStats.ok === 1 && previousStats.ok === 0) {
    return firstOkAnswerSound();
  }
  if(currentStats.bad === 1 && previousStats.bad === 0) {
    return firstBadAnswerSound();
  }
  if (currentStats.badInRow === 5) {
    return fiveBadAnswersSound();
  }
  if (currentStats.okInRow === 5) {
    return fiveOkAnswersSound();
  }
  if(currentStats.ok > previousStats.ok) {
    return playGoodSound();
  }
  if(currentStats.bad > previousStats.bad) {
    return playBadSound();
  }
}

function twoGoodAnswersInRowSound() {
  return Config.TWO_GOOD_ANSWERS_IN_ROW_SOUND_PATH;
}

function twoBadAnswersInRowSound() {
  return Config.TWO_BAD_ANSWERS_IN_ROW_SOUND_PATH;
}

function firstOkAnswerSound() {
  return Config.FIRST_OK_ANSWER_SOUND_PATH;
}

function firstBadAnswerSound() {
  return Config.FIRST_BAD_ANSWER_SOUND_PATH;
}

function playGoodSound() {
  return Config.OK_ANSWER_SOUND_PATH;
}

function playBadSound() {
  return Config.BAD_ANSWER_SOUND_PATH;
}

function fiveBadAnswersSound() {
  return Config.FIVE_BAD_ANSWERS_SOUND_PATH;
}

function fiveOkAnswersSound() {
  return Config.FIVE_OK_ANSWERS_SOUND_PATH;
}

function getVideoToPlay(stats) {
  return Config.VIDEO_PATH;  
}

export { initializeMediaPlayer, provideStatsToMediaPlayer, getVideoToPlay, getSoundToPlay };


