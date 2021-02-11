import questions from '../questions';

import towerfloor from '../../tower/towerfloor';
import knightclimbing from '../../tower/knightclimbing';

import { setClassToElement } from './classmodifers'

/* СОбираем этажи башни */
const constructTower = () => {
  const towerFloorsBox = document.querySelector('.tower .floors .main');
  let floorsHtml = '';
  for (let i=0; i < questions.length; i++) {
    floorsHtml += towerfloor({ number: i+1 });
  };
  towerFloorsBox.innerHTML = floorsHtml;
};

const removeClassToFloorElement = ({ element, className }) => {
  element.classList.remove(className);
  element.offsetWidth;
};

const setCurrentClassToFloorElement = ({ element }) => {
  setClassToElement({ element, className: 'current' });
};

const setCorrectClassToFloorElement = ({ element }) => {
  removeClassToFloorElement({ element, className: 'current'});
  setClassToElement({ element, className: 'correct' });
};

const setWrongClassToFloorElement = ({ element }) => {
  removeClassToFloorElement({ element, className: 'current'});
  setClassToElement({ element, className: 'wrong' });
};

const useKnightOnTheFloor = ({ element, show, hide, win, lose }) => {
  const knightBoxElement = element.querySelector('.knight-box');
  if (show) {
    knightBoxElement.innerHTML = knightclimbing({ classIdentifer: 'show'});
  } else if (hide) {
    knightBoxElement.innerHTML = knightclimbing({ classIdentifer: 'hide'});
    setTimeout(() => knightBoxElement.innerHTML = '', 400);
  }
};

const useKnightWinnerOnTheUpperFloor = () => {
  const knightWinnerElement = document.querySelector('.tower .floor-upper .knight-winner');
  setClassToElement({ element: knightWinnerElement, className: 'show' });
};

const updateTower = ({
    currentFloor,
    correctFloor,
    wrongFloor,
    targetFloorId = 0,
    questionsStatuses = ['','',''],
    usedQuestionId,
    finished,
  }) => {
  const towerFloorsBox = document.querySelector('.tower .floors .main');
  if (!towerFloorsBox) return;
  const floorElement = Array.from(towerFloorsBox.children)[targetFloorId];
  if (!floorElement) return
  const doorMarksElements = Array.from(floorElement.querySelector('.door-marks').children);

  if (currentFloor) {
    setCurrentClassToFloorElement({ element: floorElement });
    useKnightOnTheFloor({ element: floorElement, show: true });
  } else if (correctFloor) {
    setCorrectClassToFloorElement({ element: floorElement });
    setCorrectClassToFloorElement({ element: doorMarksElements[usedQuestionId] });
    useKnightOnTheFloor({ element: floorElement, hide: true });
  } else if (wrongFloor) {
    setWrongClassToFloorElement({ element: floorElement });
    setWrongClassToFloorElement({ element: doorMarksElements[usedQuestionId] });
    useKnightOnTheFloor({ element: floorElement, hide: true });
  } else if (finished) {
      useKnightWinnerOnTheUpperFloor();
  };
};

export {
  constructTower,
  updateTower,
}
