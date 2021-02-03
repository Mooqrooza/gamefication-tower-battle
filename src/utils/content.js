import questions from './questions';
import towerfloor from '../towerfloor';

/* Замена текста в принятом DOM элементе */
const changeTextIntoSomeElement = ({ element, text }) => {
  element.classList.remove('blink');
  element.classList.add('blink');
  element.textContent = text;
};

/* Задем класс "first-show" в принятом DOM элементе */
const setFirstShowClassToElement = ({ element, className, timeout }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  if (!element) return;
  timeout ?
    setTimeout(() => element.classList.add("first-show"), timeout )
      : element.classList.add("first-show");
};

/* Задем класс "use" в принятом DOM элементе */
const setUseClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  if (!element) return;
  element.classList.remove("use");
  element.offsetWidth;
  element.classList.add("use");
};

/* Задем класс "hover-on" в принятом DOM элементе */
const setHoverOnClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  if (!element) return;
  element.classList.remove("hover-off");
  element.offsetWidth;
  element.classList.add("hover-on");
};

/* Задем класс "hover-off" в принятом DOM элементе */
const setHoverOffClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  if (!element) return;
  element.classList.remove("hover-on");
  element.offsetWidth;
  element.classList.add("hover-off");
};

/* СОбираем этажи башни */
const constructTower = () => {
  const towerElement = document.querySelector('.tower .floors');
  let floorsHtml = ''
  for (let i=0; i < questions.length; i++) {
    floorsHtml += towerfloor;
  };
  towerElement.innerHTML = floorsHtml;
};

export {
  changeTextIntoSomeElement,
  setFirstShowClassToElement,
  setUseClassToElement,
  setHoverOnClassToElement,
  setHoverOffClassToElement,
  constructTower,
}
