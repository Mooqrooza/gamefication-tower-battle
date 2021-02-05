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

const updateTower = ({
    currentFloorId,
    status,
  }) => {
  const towerFloorsBox = document.querySelector('.tower .floors');
  const towerFloors = towerFloorsBox.children();
  setClassToElement( towerFloors[currentFloorId], 'current' );
};

export {
  constructTower,
  updateTower,
}
