/**
 * @jest-environment jsdom
 */

import * as Output from '../features/output.js';

let irrelevantDiv = document.createElement('div');

test('when screen turned off, given showGamePlayerScreen called,  then turns on the game player screen ', () => {
  // Arange 
  let sut = document.createElement('div');
  sut.classList.add('hidden');
  Output.initializeDisplay(irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, sut);

  // Act
  Output.showGamePlayerScreen();

  // Assert
  expect(sut.classList.contains('hidden')).toBe(false);
});

test('when screen turned on, given showGamePlayerScreen called,  keeps the screen turned on ', () => {
  // Arange 
  let sut = document.createElement('div');
  Output.initializeDisplay(irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, sut);

  // Act
  Output.showGamePlayerScreen();

  // Assert
  expect(sut.classList.contains('hidden')).toBe(false);
});


test('when screen turned off, given hideGamePlayerScreen called,  keeps the screen turned off ', () => {
  // Arange 
  let sut = document.createElement('div');
  sut.classList.add('hidden');
  Output.initializeDisplay(irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, sut);

  // Act
  Output.hideGamePlayerScreen();

  // Assert
  expect(sut.classList.contains('hidden')).toBe(true);
});

test('when screen turned on, given hideGamePlayerScreen called,  trurns the screen off ', () => {
  // Arange 
  let sut = document.createElement('div');
  Output.initializeDisplay(irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, irrelevantDiv, sut);

  // Act
  Output.hideGamePlayerScreen();

  // Assert
  expect(sut.classList.contains('hidden')).toBe(true);
});