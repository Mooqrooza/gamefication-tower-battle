
const changeTextIntoSomeElement = ({ element, text }) => {
  element.classList.remove('blink');
  element.classList.add('blink');
  element.textContent = text;
};

export {
  changeTextIntoSomeElement
}
