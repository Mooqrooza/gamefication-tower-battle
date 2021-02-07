/* Задаем переданый класс указанному элементу */
const setClassToElement = ({ element, className }) => {
  if (!element) return;
  let classRemoveName = className;
  if (className === 'hover-on') { classRemoveName = 'hover-off' }
  else if (className === 'hover-off') classRemoveName = 'hover-on';
  else if (className === 'show') { classRemoveName = 'hide'; }
  else if (className === 'hide') { classRemoveName = 'show'; }
  element.classList.remove(classRemoveName);
  element.offsetWidth;
  element.classList.add(className);
};

/* Замена текста в принятом DOM элементе */
const changeTextIntoSomeElement = ({ element, text }) => {
  setClassToElement({ element, className: 'blink' });
  element.textContent = text;
};

/* Задем класс "show" в принятом DOM элементе */
const setShowClassToElement = ({ element, className, timeout }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  timeout ?
    setTimeout(() => setClassToElement({ element, className: "show" }), timeout )
      : setClassToElement({ element, className: "show"});
};

/* Задем класс "hide" в принятом DOM элементе */
const setHideClassToElement = ({ element, className, timeout }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  timeout ?
    setTimeout(() => setClassToElement({ element, className:"hide" }), timeout )
      : setClassToElement({ element, className: "hide"});
};

/* Задем класс "first-show" в принятом DOM элементе */
const setFirstShowClassToElement = ({ element, className, timeout }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  timeout ?
    setTimeout(() => setClassToElement({ element, className: "first-show" }), timeout )
      : setClassToElement({ element, className: "first-show" });
};

/* Задем класс "clik" в принятом DOM элементе */
const setClickClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement({ element, className: 'click' });
};

/* Задем класс "use" в принятом DOM элементе */
const setUseClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement({ element, className: 'use' });
};

/* Задем класс "hover-on" в принятом DOM элементе */
const setHoverOnClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement({ element, className: 'hover-on' });
};

/* Задем класс "hover-off" в принятом DOM элементе */
const setHoverOffClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement({ element, className: 'hover-off' });
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
