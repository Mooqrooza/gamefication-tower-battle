import questions from '../questions';

import towerfloor from '../../tower/towerfloor';
import knightclimbing from '../../tower/knightclimbing';
import knightstunned from '../../tower/knightstunned';

import { setClassToElement } from './classmodifers';

import { Game } from '../game';

const moveWorldWithCeurrentFloor = () => {
  const mountainsElement = document.querySelector('.mountains');
  floorsBoxElement.style.marginBottom = `-${b+floorsBoxElemenMarginBottom}px`;
  floorsBoxElement.style.transition = 'all 0.4s 0s';
  mountainsElement.style.marginBottom = `-${b+floorsBoxElemenMarginBottom}px`;
  mountainsElement.style.transition = 'all 0.4s 0s';
};

const checkAndScrolTowerToCurrentFloor = ({ element }) => {
  const floorsBoxElement = element.querySelector('.floors');
  const currentFloorElement = floorsBoxElement.querySelector('.floor.current');
  const winHeight = window.innerHeight;
  const checkPosY = winHeight < 600 ? winHeight/2.5 : winHeight/3.5;
  const elementPosY = currentFloorElement.getBoundingClientRect().top;
  let floorsBoxElemenMarginBottom = window.getComputedStyle(floorsBoxElement).marginBottom;
  let a = 0;
  let b = 0;
  let c = 0;
  floorsBoxElemenMarginBottom = floorsBoxElemenMarginBottom.length > 1 ?
    Math.abs(+floorsBoxElemenMarginBottom.slice(0,-2)) : +floorsBoxElemenMarginBottom;
  a = Math.trunc((checkPosY - elementPosY)/60) * 60;
  c = checkPosY - (elementPosY + a);
  b = a + c;

  if ( elementPosY-floorsBoxElemenMarginBottom < checkPosY ) {
    floorsBoxElement.style.marginBottom = `-${b+floorsBoxElemenMarginBottom}px`;
    floorsBoxElement.style.transition = 'all 0.4s 0s';
  }
 else {
   floorsBoxElement.style.marginBottom = `0px`;
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

const useKnightOnTheFloor = ({ element, show, hide, stunned }) => {
  const knightBoxElement = element.querySelector('.knight-box');
  const knightElement = Array.from(knightBoxElement.children)[0];
  if (show) {
    knightBoxElement.innerHTML = knightclimbing({ classIdentifer: 'show'});
  } else if (hide) {
    knightBoxElement.innerHTML = knightclimbing({ classIdentifer: 'hide'});
    setTimeout(() => knightBoxElement.innerHTML = '', 400);
  } else if (stunned) {
    setClassToElement({ element: knightElement, className: 'hide' });
    setTimeout(() => knightBoxElement.innerHTML = knightstunned({ classIdentifer: 'show'}), 200);
  };
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
    checkAndScrolTowerToCurrentFloor({ element: towerElement })
  } else if (correctFloor) {
    setCorrectClassToFloorElement({ element: floorElement });
    setCorrectClassToFloorElement({ element: doorMarksElements[usedQuestionId] });
    useKnightOnTheFloor({ element: floorElement, hide: true });
  } else if (wrongFloor) {
    setWrongClassToFloorElement({ element: floorElement });
    setWrongClassToFloorElement({ element: doorMarksElements[usedQuestionId] });
    useKnightOnTheFloor({ element: floorElement, stunned: true });
  } else if (finished) {
      useKnightWinnerAndSaluteOnTheUpperFloor();
  };
};

export {
  constructTower,
  updateTower,
  checkAndScrolTowerToCurrentFloor,
}
