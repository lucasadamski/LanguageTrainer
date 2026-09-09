const statsObject = {
  total: 0,
  ok: 0,
  bad: 0,
  points: 0,
  streaks: 0
};

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
  return '../../media/good.wav';
  }

function playBadSound() {
  return '../../media/bad.wav';
}

function getVideoToPlay(stats) {
  return `../../media/damn.mp4`;  
}

export { initializeMediaPlayer, provideStatsToMediaPlayer, getVideoToPlay, getSoundToPlay };


