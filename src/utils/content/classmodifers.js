/* Замена текста в принятом DOM элементе */
const changeTextIntoSomeElement = ({ element, text }) => {
  setClassToElement({ element, className: 'blink' });
  element.textContent = text;
};

/* Задаем переданый класс указанному элементу */
const setClassToElement = ({ element, className }) => {
  if (!element) return;
  if (className === 'hover-on') { element.classList.remove('hover-off'); }
  else if (className === 'hover-off') { element.classList.remove('hover-on'); }
  else if (className === 'show') {
    element.classList.remove('hide');
    element.classList.remove('hidden');
  }
  else if (className === 'hide') { element.classList.remove('show'); }
  else  element.classList.remove(className);
  element.offsetWidth;
  element.classList.add(className);
};

const toggleClassToElement = ({ element, classAdd, classRemove }) => {
  element.offsetWidth;
  element.classList.toggle('classAdd','classRemove');
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

/* Задем класс "sense" в принятом DOM элементе */
const setSenseClassToElement = ({ element, className }) => {
  element ? element : element = document.getElementsByClassName(className)[0];
  setClassToElement({ element, className: 'sense' });
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
  setSenseClassToElement,
  setUseClassToElement,
  setHoverOnClassToElement,
  setHoverOffClassToElement,
}
