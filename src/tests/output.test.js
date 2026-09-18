/**
 * @jest-environment jsdom
 */

import * as Output from '../features/output.js';

let irrelevantDiv = document.createElement('div');

test('when screen turned off, given method called,  then turns on the game player screen ', () => {
  // Arange 
  let sut = document.createElement('div');
  sut.classList.add('hidden');

  Output.initializeDisplay(irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, sut);

  // Act
  Output.showGamePlayerScreen();

  // Assert
  expect(sut.classList.contains('hidden')).toBe(false);
});