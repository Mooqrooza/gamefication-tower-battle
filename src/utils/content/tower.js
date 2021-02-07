import questions from '../questions';
import towerfloor from '../../towerfloor';
import { setClassToElement } from './classmodifers'

/* СОбираем этажи башни */
const constructTower = () => {
  const towerFloorsBox = document.querySelector('.tower .floors');
  let floorsHtml = ''
  for (let i=0; i < questions.length; i++) {
    floorsHtml += towerfloor({ number: i+1 });
  };
  towerFloorsBox.innerHTML = floorsHtml;
};

const setCurrentClassToFloorElement = ({ element }) => {
  setClassToElement({ element, className: 'current' });
};

const setCorrectClassToFloorElement = ({ element }) => {
  setClassToElement({ element, className: 'correct' });
};

const setWrongClassToFloorElement = ({ element }) => {
  setClassToElement({ element, className: 'wrong' });
};


const updateTower = ({
    currentFloor,
    correctFloor,
    wrongFloor,
    targetFloorId,
    questionsStatuses = ['','',''],
    usedQuestionId,
  }) => {
  const towerFloorsBox = document.querySelector('.tower .floors');
  if (!towerFloorsBox) return;
  const floorElement = Array.from(towerFloorsBox.children)[targetFloorId];
  const doorMarksElements = Array.from(floorElement.querySelector('.door-marks').children);

  switch (true) {
    case currentFloor:
      setCurrentClassToFloorElement({ element: floorElement });
      break;
    case correctFloor:
      setCorrectClassToFloorElement({ element: floorElement });
      setCorrectClassToFloorElement({ element: doorMarksElements[usedQuestionId] });
      break;
    case wrongFloor:
      setWrongClassToFloorElement({ element: floorElement });
      setWrongClassToFloorElement({ element: doorMarksElements[usedQuestionId] });
      break;
  };
};

export {
  constructTower,
  updateTower,
}
