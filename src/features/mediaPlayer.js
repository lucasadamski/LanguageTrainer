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
  currentStats = { ...stats };
  if(currentStats.ok > previousStats.ok) {
    playGoodSound();
  }
  if(currentStats.bad > previousStats.bad) {
    playBadSound();
  }
  previousStats = { ...currentStats };
}

function playGoodSound() {
  const path = '../../media/good.wav';
  const audio = new Audio(path);
  audio.play();
  console.debug('Playing good sound from ' + path);
}

function playBadSound() {
  const path = '../../media/bad.wav';
  const audio = new Audio(path);
  audio.play();
  console.debug('Playing bad sound from ' + path);
}

export { initializeMediaPlayer, provideStatsToMediaPlayer };
