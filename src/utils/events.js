import { TowerGame } from './game';
import {
  setUseClassToElement,
  setHoverOnClassToElement,
  setHoverOffClassToElement
} from './content';

/* Назначаем стандартные обработчики событий для DOM элементов */
const setInitialEvents = () => {
  const splashReadyButtonElement = document.getElementsByClassName("splash-ready-button")[0];
  const answerButtonElements = document.getElementsByClassName("answer-button");


  /* Обработчики для кнопки "Начнем" на экране заставки*/
  splashReadyButtonElement.addEventListener("click",
    () => TowerGame.start()
  );
  splashReadyButtonElement.addEventListener("mouseenter", (event) => {
    setHoverOnClassToElement({ element: event.currentTarget });
  });
  splashReadyButtonElement.addEventListener("mouseleave", (event) => {
    setHoverOffClassToElement({ element: event.currentTarget });
  });

  /* Обработчики для кнопок ответов в интерфейсе тестовых вопросов */
  Array.from(answerButtonElements).forEach( element => {
    element.addEventListener("click", (event) => setUseClassToElement({ element: event.currentTarget }) );
    element.addEventListener("mouseenter", (event) => setHoverOnClassToElement({ element: event.currentTarget }) );
    element.addEventListener("mouseleave", (event) => setHoverOffClassToElement({ element: event.currentTarget }) );
  });


};

export {
  setInitialEvents
}
