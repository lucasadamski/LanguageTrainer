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
  previousStats = stats;
}

function provideStatsToMediaPlayer(stats) {
  currentStats = stats;
  if(currentStats.ok > previousStats.ok) {
    playGoodSound();
  }
  if(currentStats.bad > previousStats.bad) {
    playBadSound();
  }
  previousStats = currentStats;
}

function playGoodSound() {
}

function playBadSound() {
}

export { initializeMediaPlayer, provideStatsToMediaPlayer, playGoodSound, playBadSound };
