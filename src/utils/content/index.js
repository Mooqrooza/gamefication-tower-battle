import { setEventsToAnswerButtons } from '../events';

import { constructTower, updateTower, checkAndScrolTowerToCurrentFloor } from './tower';

import { updateQuestionsInterface } from './questionsinterface';

import { createPlayerInterface, updatePlayerInterface } from './playerinterface';

import {
  setClassToElement,
  changeTextIntoSomeElement,
  setShowClassToElement,
  setHideClassToElement,
  setDisabledClassToElement,
  setFirstShowClassToElement,
  setClickClassToElement,
  setUseClassToElement,
  setHoverOnClassToElement,
  setHoverOffClassToElement,
} from './classmodifers';

import {
  showFinalWinResultScreen,
  showFinalLoseResultScreen,
} from './gameresultscreen';

export {
  setClassToElement,
  changeTextIntoSomeElement,
  setShowClassToElement,
  setHideClassToElement,
  setDisabledClassToElement,
  setFirstShowClassToElement,
  setClickClassToElement,
  setUseClassToElement,
  setHoverOnClassToElement,
  setHoverOffClassToElement,

  constructTower,
  updateTower,
  checkAndScrolTowerToCurrentFloor,
  
  updateQuestionsInterface,

  createPlayerInterface,
  updatePlayerInterface,

  showFinalWinResultScreen,
  showFinalLoseResultScreen,
}
