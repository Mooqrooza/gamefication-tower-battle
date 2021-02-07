import {
  setClassToElement,
} from './classmodifers';


const showFinalWinResultScreen = () => {
  const element = document.getElementsByClassName('game-result')[0];
  setClassToElement({ element, className: 'show-win'});
};

const showFinalLoseResultScreen = () => {
  const element = document.getElementsByClassName('game-result')[0];
  setClassToElement({ element, className: 'show-win'});
};

export {
  showFinalWinResultScreen,
  showFinalLoseResultScreen,
}
