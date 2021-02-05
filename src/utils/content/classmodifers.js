/* Задаем переданый класс указанному элементу */
const setClassToElement = ( element, setClassName ) => {
  if (!element) return;
  let classRemoveName = setClassName;
  if (setClassName === 'hover-on') { classRemoveName = 'hover-off' }
  else if (setClassName === 'hover-off') classRemoveName = 'hover-on';
  else if (setClassName === 'show') { classRemoveName = 'hide'; }
  else if (setClassName === 'hide') { classRemoveName = 'show'; }
  element.classList.remove(classRemoveName);
  element.offsetWidth; // Обход бага не корректного присвоения повторной анимации
  element.classList.add(setClassName);
};

/* Замена текста в принятом DOM элементе */
const changeTextIntoSomeElement = ({ element, text }) => {
  setClassToElement(element, 'blink');
  element.textContent = text;
};

/* Задем класс "show" в принятом DOM элементе */
const setShowClassToElement = ({ element, className, timeout }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  timeout ?
    setTimeout(() => setClassToElement(element, "show"), timeout )
      : setClassToElement(element, "show");
};

/* Задем класс "hide" в принятом DOM элементе */
const setHideClassToElement = ({ element, className, timeout }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  timeout ?
    setTimeout(() => setClassToElement(element, "hide"), timeout )
      : setClassToElement(element, "hide");
};

/* Задем класс "first-show" в принятом DOM элементе */
const setFirstShowClassToElement = ({ element, className, timeout }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  timeout ?
    setTimeout(() => setClassToElement(element, "first-show"), timeout )
      : setClassToElement(element, "first-show");
};

/* Задем класс "clik" в принятом DOM элементе */
const setClickClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement(element, 'click');
};

/* Задем класс "use" в принятом DOM элементе */
const setUseClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement(element, 'use');
};

/* Задем класс "hover-on" в принятом DOM элементе */
const setHoverOnClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement(element, 'hover-on');
};

/* Задем класс "hover-off" в принятом DOM элементе */
const setHoverOffClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement(element, 'hover-off');
};

export {
  setClassToElement,
  changeTextIntoSomeElement,
  setShowClassToElement,
  setHideClassToElement,
  setFirstShowClassToElement,
  setClickClassToElement,
  setUseClassToElement,
  setHoverOnClassToElement,
  setHoverOffClassToElement,
}
