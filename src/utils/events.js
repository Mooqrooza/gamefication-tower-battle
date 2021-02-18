import { Game } from './game';

import {
  setShowClassToElement,
  setHideClassToElement,
  setUseClassToElement,
  setClickClassToElement,
  setHoverOnClassToElement,
  setHoverOffClassToElement,

  updateDataInPlayerInterface,

  updateQuestionsInterface,

  checkAndScrolTowerToCurrentFloor,
} from './content';


window.addEventListener("resize", () => {
  const towerElement = document.getElementsByClassName('tower')[0];
  checkAndScrolTowerToCurrentFloor({ element: towerElement });
});

/* Обработчики для кнопки "Выход" на финальном экране */
const setEventsToFinalExitButton = () => {
  const element = document.getElementsByClassName("final-exit-button")[0];
  if (!element) return;
  element.addEventListener("click", (event) => {
    setClickClassToElement({ element: event.currentTarget })
  });
  element.addEventListener("mouseenter", (event) => {
    setHoverOnClassToElement({ element: event.currentTarget });
  });
  element.addEventListener("mouseleave", (event) => {
    setHoverOffClassToElement({ element: event.currentTarget });
  });
};

/* Обработчики для кнопки "Начнем" на экране заставки*/
const setEventsToStartButton = () => {
  const element = document.getElementsByClassName("start-button")[0];
  if (!element) return;
  element.addEventListener("click", (event) => {
    setClickClassToElement({ element: event.currentTarget })
    Game.start();
  });
  element.addEventListener("mouseenter", (event) => {
    setHoverOnClassToElement({ element: event.currentTarget });
  });
  element.addEventListener("mouseleave", (event) => {
    setHoverOffClassToElement({ element: event.currentTarget });
  });
};

/* Обработчики для кнопок вопросов в интерфейсе тестовых вопросов */
const setEventsToQuestionButtons = () => {
  const elements = document.getElementsByClassName('question-button');
  if (!elements) return;
  Array.from(elements).forEach( el => {
    el.addEventListener("click", (event) => {
      if ( event.currentTarget.classList.contains('use')) return;
      setUseClassToElement({ element: event.currentTarget });
      Game.showQuestionsInterface({ questionButton: event.currentTarget })
    });
    el.addEventListener("mouseenter", (event) => setHoverOnClassToElement({ element: event.currentTarget }) );
    el.addEventListener("mouseleave", (event) => setHoverOffClassToElement({ element: event.currentTarget }) );
  });
};

/* Назначаем обработчик событий для кнопок ответов. *.
/* Используется каждый раз при заполнении контейнер с кнопками варинтами ответов */
const setEventsToAnswerButtons = () => {
   const answerButtonElements = document.getElementsByClassName("answer-button");
  Array.from(answerButtonElements).forEach( element => {
    element.addEventListener("click", (event) => {
      setClickClassToElement({ element: event.currentTarget });
      Game.answerSelected({ answerId: event.currentTarget.getAttribute('data-id') });
    });
    element.addEventListener("mouseenter", (event) => setHoverOnClassToElement({ element: event.currentTarget }) );
    element.addEventListener("mouseleave", (event) => setHoverOffClassToElement({ element: event.currentTarget }) );
  });
};

/* Обработчики для кнопки использования подсказок в интерфейсе тестовых вопросов */
const setEventsToUseHintButton = () => {
  const element = document.getElementsByClassName('use-hint-button')[0];
  if (!element) return;
  element.addEventListener("click", (event) => {
     if (event.currentTarget.classList.contains('disabled')) return;
    setClickClassToElement({ element: event.currentTarget });
    Game.useHint();
  });
  element.addEventListener("mouseenter", (event) => {
    if (event.currentTarget.classList.contains('disabled')) return;
    setHoverOnClassToElement({ element: event.currentTarget });
  });
  element.addEventListener("mouseleave", (event) => {
    if (event.currentTarget.classList.contains('disabled')) return;
    setHoverOffClassToElement({ element: event.currentTarget });
  });
};

/* Назначаем стандартные обработчики событий для DOM элементов */
const setInitialEvents = () => {
  setEventsToStartButton();
  setEventsToQuestionButtons();
  setEventsToUseHintButton();
  setEventsToFinalExitButton();
};


export {
  setInitialEvents,
  setEventsToAnswerButtons,
}
