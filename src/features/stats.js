const statsObject = {
  total: 0,
  ok: 0,
  bad: 0,
  points: 0,
  streaks: 0
};

function getStatsObject() {
  return statsObject;
}

function initializeStats(collection) {
  statsObject.total = collection.length;
  statsObject.ok = 0;
  statsObject.bad = 0;
  statsObject.points = 0;
  statsObject.streaks = 0;
  return statsObject;
}

function provideStatsAnswer(answer) {
  if(isAllQuestionsAswered()) return statsObject;
  if(answer) {
    statsObject.ok++;
  }
  else {
    statsObject.bad++;
  }
  return statsObject;
}

function isAllQuestionsAswered() {
  if(statsObject.total <= statsObject.ok + statsObject.bad) return true;
  else return false;
}

export { initializeStats, provideStatsAnswer, getStatsObject };
