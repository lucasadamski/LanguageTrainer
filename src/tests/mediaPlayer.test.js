import * as mediaPlayer from '../features/mediaPlayer.js';

test('Plays good sound on good answer', () => {
  // Arrange 
  let stats = {
    total: 10,
    ok: 0,
    bad: 0,
    points: 0,
    streaks: 0
  };
  
  jest.spyOn(mediaPlayer, 'playGoodSound');

  // Act 
  mediaPlayer.initializeMediaPlayer(stats);
  stats.ok = 1; 
  mediaPlayer.provideStatsToMediaPlayer(stats);

  // Assert
  expect(mediaPlayer.playGoodSound).toHaveBeenCalled();
});

