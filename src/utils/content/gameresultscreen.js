import {
  setClassToElement,
  setShowClassToElement,
} from './classmodifers';


const showFinalWinResultScreen = ({ gameResult }) => {
  const { scores, hintsUsed, wrongAnswers } = gameResult;
  const resultScreenElement = document.getElementsByClassName('game-result')[0];
  const finalExitButton = resultScreenElement.querySelector('.final-exit-button');
  const titleTextElement = resultScreenElement.querySelector('.title-text p');
  const descTextElement = resultScreenElement.querySelector('.desc-text');
  const scoresElement = resultScreenElement.querySelector('.scores .count');
  const wrongAnswersElement = resultScreenElement.querySelector('.wrong-answers .count');
  const hintUsedElement = resultScreenElement.querySelector('.hint-used .count');
  titleTextElement.innerText = 'Победа!';
  descTextElement.innerText = 'Поздравляем, вы прошли режим тестирования!';
  scoresElement.innerText = scores;
  wrongAnswersElement.innerText = wrongAnswers;
  hintUsedElement.innerText = hintsUsed;
  setShowClassToElement({ element: finalExitButton });
  setClassToElement({ element: resultScreenElement, className: 'show-win'});
};

const showFinalLoseResultScreen = ({ gameResult }) => {
  const { scores, hintsUsed, wrongAnswers } = gameResult;
  const resultScreenElement = document.getElementsByClassName('game-result')[0];
  const finalExitButton = resultScreenElement.querySelector('.final-exit-button');
  const titleTextElement = resultScreenElement.querySelector('.title-text p');
  const descTextElement = resultScreenElement.querySelector('.desc-text');
  const scoresElement = resultScreenElement.querySelector('.scores .count');
  const wrongAnswersElement = resultScreenElement.querySelector('.wrong-answers .count');
  const hintUsedElement = resultScreenElement.querySelector('.hint-used .count');
  titleTextElement.innerText = 'Поражение...';
  descTextElement.innerText = 'К сожалению, вы не удержались и рухнули на землю...';
  scoresElement.innerText = scores;
  wrongAnswersElement.innerText = wrongAnswers;
  hintUsedElement.innerText = hintsUsed;
  setShowClassToElement({ element: finalExitButton });
  setClassToElement({ element: resultScreenElement, className: 'show-lose'});
};

export {
  showFinalWinResultScreen,
  showFinalLoseResultScreen,
}
