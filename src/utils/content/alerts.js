const setShowGoodClassToAlertElements = ({ element }) => {
  element.classList.remove('hide');
  element.classList.remove('show-bad');
  element.classList.add('show-good');
};

const setShowBadClassToAlertElements = ({ element }) => {
  element.classList.remove('hide');
  element.classList.remove('show-good');
  element.classList.add('show-bad');
};

const setHideClassToAlertElements = ({ element }) => {
  element.classList.remove('show-bad');
  element.classList.remove('show-good');
  element.classList.add('hide');
};


const showMainAlert = ({ correctAnswer, wrongAnswer, text }) => {
  
  const alertElement = document.querySelector('.alert');
  const textElement = alertElement.querySelector('.text');

  if (correctAnswer) {
    textElement.innerText = 'Верно!';
    setShowGoodClassToAlertElements({ element: alertElement });
    setTimeout(() => setHideClassToAlertElements({ element: alertElement }), 1000);
  } else if (wrongAnswer) {
    textElement.innerText = 'Не верно!';
    setShowBadClassToAlertElements({ element: alertElement });
    setTimeout(() => setHideClassToAlertElements({ element: alertElement }), 1000);
  };

};

export {
  showMainAlert
}
