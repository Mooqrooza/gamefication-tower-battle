import {
  setClassToElement,
  setShowClassToElement,
} from './classmodifers';


const showFinalWinResultScreen = ({ scores=0, hintsUsedCount=0, wrongAnswerCount=0 }) => {
  const resultScreenElement = document.getElementsByClassName('game-result')[0];
  const finalExitButton = resultScreenElement.querySelector('.final-exit-button');
  const titleTextElement = resultScreenElement.querySelector('.title-text p');
  const descTextElement = resultScreenElement.querySelector('.desc-text');
  titleTextElement.innerText = 'Победа!';
  descTextElement.innerText = 'Поздравляем, вы прошли режим тестирования!';
  setShowClassToElement({ element: finalExitButton });
  setClassToElement({ element: resultScreenElement, className: 'show-win'});
};

const showFinalLoseResultScreen = ({ scores=0, hintsUsedCount=0, wrongAnswerCount=0 }) => {
  const resultScreenElement = document.getElementsByClassName('game-result')[0];
  const finalExitButton = resultScreenElement.querySelector('.final-exit-button');
  const titleTextElement = resultScreenElement.querySelector('.title-text p');
  const descTextElement = resultScreenElement.querySelector('.desc-text');
  titleTextElement.innerText = 'Поражение...';
  descTextElement.innerText = 'К сожалению, вы не удержались и рухнули на землю...';
  setShowClassToElement({ element: finalExitButton });
  setClassToElement({ element: resultScreenElement, className: 'show-lose'});
};

export {
  showFinalWinResultScreen,
  showFinalLoseResultScreen,
}
