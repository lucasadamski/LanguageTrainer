const statsObject = {
  total: 0,
  ok: 0,
  bad: 0,
  points: 0,
  okInRow: 0,
  badInRow: 0,
  history: []
};

function getStatsObject() {
  return statsObject;
}

function initializeStats(collection) {
  statsObject.total = collection.length;
  statsObject.ok = 0;
  statsObject.bad = 0;
  statsObject.points = 0;
  statsObject.okInRow = 0;
  statsObject.badInRow = 0;
  statsObject.history = [];
  return statsObject;
}

function provideStatsAnswer(answer) {
  if(isAllQuestionsAswered()) return statsObject;
  statsObject.history.push(answer);
  if(answer) {
    statsObject.ok++;
    statsObject.okInRow++;
    statsObject.badInRow = 0;
  }
  else {
    statsObject.bad++;
    statsObject.badInRow++;
    statsObject.okInRow = 0;
  }
  return statsObject;
}

function isAllQuestionsAswered() {
  if(statsObject.total <= statsObject.ok + statsObject.bad) return true;
  else return false;
}

export { initializeStats, provideStatsAnswer, getStatsObject };
