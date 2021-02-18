import { setEventsToAnswerButtons } from '../events';

import { constructTower, updateTower, checkAndScrolTowerToCurrentFloor } from './tower';

import { updateQuestionsInterface } from './questionsinterface';

import { createPlayerInterface, updatePlayerInterface } from './playerinterface';

import { showMainAlert } from './alerts';

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
  showMainAlert,

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
