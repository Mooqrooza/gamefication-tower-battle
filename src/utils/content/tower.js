import questions from '../questions';

import towerfloor from '../../tower/towerfloor';
import knightclimbing from '../../tower/knightclimbing';

import { setClassToElement } from './classmodifers'

const checkAndScrolTowerToCurrentFloor = ({ element }) => {
  const floorsBoxElement = element.querySelector('.floors');
  const currentFloorElement = floorsBoxElement.querySelector('.floor.current');
  const winHeight = window.innerHeight;
  const checkPosY = ( winHeight/2)-20;
  const elementPosY = currentFloorElement.getBoundingClientRect().top;
  if (elementPosY < checkPosY) {
    floorsBoxElement.style.marginBottom = `-${ Math.floor(checkPosY-elementPosY) }px`;
    floorsBoxElement.style.transition = 'all 0.4s 0s';
  } else {
    floorsBoxElement.style.marginBottom = '50px';
    floorsBoxElement.style.transition = 'all 0.4s 0s';
  }
};

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

const useKnightWinnerAndSaluteOnTheUpperFloor = () => {
  const upperFloorElement = document.querySelector('.tower .floor-upper');
  const knightWinnerElement = upperFloorElement.querySelector('.knight-winner');
  const saluteElement = upperFloorElement.querySelector('.salute');
  setTimeout(() => setClassToElement({ element: knightWinnerElement, className: 'show' }), 400);
  setTimeout(() => setClassToElement({ element: saluteElement, className: 'show' }), 300);

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
  const towerElement = document.getElementsByClassName('tower')[0];
  const towerFloorsBox = towerElement.querySelector('.tower .floors .main');
  if (!towerFloorsBox) return;
  const floorElement = Array.from(towerFloorsBox.children)[targetFloorId];
  if (!floorElement) return
  const doorMarksElements = Array.from(floorElement.querySelector('.door-marks').children);

  if (currentFloor) {
    setCurrentClassToFloorElement({ element: floorElement });
    useKnightOnTheFloor({ element: floorElement, show: true });
    //checkAndScrolTowerToCurrentFloor({ element: towerElement })
  } else if (correctFloor) {
    setCorrectClassToFloorElement({ element: floorElement });
    setCorrectClassToFloorElement({ element: doorMarksElements[usedQuestionId] });
    useKnightOnTheFloor({ element: floorElement, hide: true });
  } else if (wrongFloor) {
    setWrongClassToFloorElement({ element: floorElement });
    setWrongClassToFloorElement({ element: doorMarksElements[usedQuestionId] });
    useKnightOnTheFloor({ element: floorElement, hide: true });
  } else if (finished) {
      useKnightWinnerAndSaluteOnTheUpperFloor();
  };
};

export {
  constructTower,
  updateTower,
  checkAndScrolTowerToCurrentFloor,
}
