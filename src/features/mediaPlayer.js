import * as Config from './config.js';

let previousStats;
let currentStats;

function initializeMediaPlayer(stats) {
  previousStats = { ...stats };
}

function provideStatsToMediaPlayer(stats) {
  previousStats = { ...currentStats };
  currentStats = { ...stats };  
}

function getSoundToPlay(stats) {
  let result;
  if(currentStats.ok > previousStats.ok) {
    result = playGoodSound();
  }
  if(currentStats.bad > previousStats.bad) {
    result = playBadSound();
  }
  return result;
}

function playGoodSound() {
  return Config.OK_ANSWER_SOUND_PATH;
}

function playBadSound() {
  return Config.BAD_ANSWER_SOUND_PATH;
}

function getVideoToPlay(stats) {
  return Config.VIDEO_PATH;  
}

export { initializeMediaPlayer, provideStatsToMediaPlayer, getVideoToPlay, getSoundToPlay };


