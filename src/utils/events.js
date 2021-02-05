import { TowerGame } from './game';

import {
  setShowClassToElement,
  setHideClassToElement,
  setUseClassToElement,
  setClickClassToElement,
  setHoverOnClassToElement,
  setHoverOffClassToElement,

  updateTestsInterface,
} from './content';

/* Обработчики для кнопки "Начнем" на экране заставки*/
const setEventsToStartButton = () => {
  const element = document.getElementsByClassName("start-button")[0];
  if (!element) return;
  element.addEventListener("click", (event) => {
    setClickClassToElement({ element: event.currentTarget })
    TowerGame.start();
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
      TowerGame.useQuestionAndAnswers({ questionButton: event.currentTarget });
    });
    el.addEventListener("mouseenter", (event) => setHoverOnClassToElement({ element: event.currentTarget }) );
    el.addEventListener("mouseleave", (event) => setHoverOffClassToElement({ element: event.currentTarget }) );
  });
};

/* Обработчики для кнопки использования подсказок в интерфейсе тестовых вопросов */
const setEventsToUseHintButton = () => {
  const element = document.getElementsByClassName('use-hint-button')[0];
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

/* Назначаем обработчик событий для кнопок ответов. *.
/* Используется каждый раз при заполнении контейнер с кнопками варинтами ответов */
const setEventsToAnswerButtons = () => {
   const answerButtonElements = document.getElementsByClassName("answer-button");
  Array.from(answerButtonElements).forEach( element => {
    element.addEventListener("click", (event) => {
      setClickClassToElement({ element: event.currentTarget });
      TowerGame.answerSelected( event.currentTarget.getAttribute('data-id') );
      setHideClassToElement({ element: document.getElementsByClassName('tests-interface')[0]});
    });
    element.addEventListener("mouseenter", (event) => setHoverOnClassToElement({ element: event.currentTarget }) );
    element.addEventListener("mouseleave", (event) => setHoverOffClassToElement({ element: event.currentTarget }) );
  });
};

/* Назначаем стандартные обработчики событий для DOM элементов */
const setInitialEvents = () => {
  setEventsToStartButton();
  setEventsToQuestionButtons();
  setEventsToUseHintButton();
};


export {
  setInitialEvents,
  setEventsToAnswerButtons,
}
