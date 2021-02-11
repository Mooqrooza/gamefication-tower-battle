import answerbutton from '../../questionsinterface/answerbutton';

import {
  setShowClassToElement,
  setHideClassToElement,
} from './classmodifers';

import {
  setEventsToAnswerButtons
} from '../events';


const removeClassFromQuestionsInterfaceElement = ({ element, className }) => {
  element.classList.remove(className);
};

const resetStateForQuestionButtonElements = () => {
  let questionButtonsElements = document.getElementsByClassName('question-buttons')[0];
  questionButtonsElements = Array.from(questionButtonsElements.children);
  for (let i = 0; i < questionButtonsElements.length; i++) {
    const textElement = questionButtonsElements[i].querySelector('.text');
    const text = i === 0 ? 'Легкий вопрос' :
      i === 1 ? 'Средний вопрос' : 'Сложный вопрос';
    textElement.innerText = text;
    removeClassFromQuestionsInterfaceElement({ element: questionButtonsElements[i] , className: 'use' });
    removeClassFromQuestionsInterfaceElement({ element: questionButtonsElements[i] , className: 'hover-on' });
    removeClassFromQuestionsInterfaceElement({ element: questionButtonsElements[i] , className: 'hover-on' });
  };
};

const setClassToQuestionsInterfaceElement = ({ element, className, timeout }) => {
  const setClassName = () => {
    if (className === 'pending-question-select' || className === 'show') {
      element.classList.remove('hide');
      element.classList.remove('pending-answer-select');
    }
    else if (className === 'pending-answer-select') {
      element.classList.remove('pending-question-select');
    }
    else if (className === 'hide') {
      element.classList.remove('show');
      element.classList.remove('pending-question-select');
      element.classList.remove('pending-answer-select');
    }
    element.offsetWidth;
    element.classList.add(className);
  };
  timeout ? setTimeout(() => setClassName(), timeout) : setClassName();
};

/* Задем класс "pending-question-type" в принятом DOM элементе. Необходимо для интерфейса с вопросами */
const setPendingQestionTypeClassToElement = ({ element, timeout }) => {
  element ? element : element = document.getElementsByClassName('questions-interface')[0];
  const set = () => setClassToQuestionsInterfaceElement({ element, className: 'pending-question-type' });
  timeout ? setTimeout(() => set(), timeout ) : set();
};

/* Задем класс "pending-answer-select" в принятом DOM элементе. Необходимо для интерфейса с вопросами */
const setPendingAnswerSelectClassToElement = ({ element, timeout }) => {
  element ? element : element = document.getElementsByClassName('questions-interface')[0];
  const answerButtonElements = element.getElementsByClassName("answer-button");
  const set = () => {
    Array.from(answerButtonElements).forEach( el => {
      setClassToQuestionsInterfaceElement({ element: el, className: 'pending-answer-select'});
    });
    setClassToQuestionsInterfaceElement({ element, className: 'pending-answer-select'});
  };
  timeout ? setTimeout(() => set(), timeout ) : set();
};

/* Заполняем DOM элементами-вариантами ответов  в элемент c ответами */
const fillAnswerVariantsForCurrentQuestion = ({ element, answers }) => {
  element ? element : element = document.querySelector('.questions-interface .answers .variants');
  element.innerHTML = '';
  for (let i = 0; i < answers.length; i++) {
    element.innerHTML += answerbutton({ text: answers[i], id: i });
  };
};

const resetClassesOfQuestionsInterfaceElements = () => {
  const questionsInterfaceElement = document.getElementsByClassName('questions-interface')[0];
  const questionButtonsElement = questionsInterfaceElement.querySelector('.question-button');
  questionsInterfaceElement.classList.remove('pending-question-select');
  questionsInterfaceElement.classList.remove('show');
  questionsInterfaceElement.classList.remove('pending-answer-select');
  questionsInterfaceElement.classList.remove('hide');
  questionButtonsElement.classList.remove('use');
  questionButtonsElement.classList.remove('show');
  questionButtonsElement.classList.remove('first-show');
};

/* Функция через которую происходят все изменения в DOM элементе окна с вопросами и ответами */
const updateQuestionsInterface = ({
   floorNumber,
   show,
   hide,
   showAndWaitForQuestionSelect,
   selectQuestionAndPandingAnswer,
   answerComplete,
   timeout,
   question,
   answers
 }) => {
  const testInterfaceElement = document.getElementsByClassName('questions-interface')[0];
  const floorLevelElement = testInterfaceElement.querySelector('.floor-level .number');
  const questionTextElement = testInterfaceElement.querySelector('.question-text p');
  const answersBoxElement = testInterfaceElement.querySelector('.answers .variants');

  switch (true) {

    case !isNaN(floorNumber):
      floorLevelElement.innerText = floorNumber

    case show || showAndWaitForQuestionSelect:
      questionTextElement.innerText = 'Выберите сложноть вопроса ...'
      setClassToQuestionsInterfaceElement({ element: testInterfaceElement, className: 'show', timeout });
      break;

    case selectQuestionAndPandingAnswer:
      questionTextElement.innerHTML = question;
      fillAnswerVariantsForCurrentQuestion({ element: answersBoxElement, answers });
      setPendingAnswerSelectClassToElement({ element: testInterfaceElement, timeout });
      setEventsToAnswerButtons();
      break;

    case hide || answerComplete:
      resetStateForQuestionButtonElements();
      setClassToQuestionsInterfaceElement({ element: testInterfaceElement, className: 'hide', timeout });
  };
};

export {
  updateQuestionsInterface,
  setPendingQestionTypeClassToElement,
  setPendingAnswerSelectClassToElement,
  fillAnswerVariantsForCurrentQuestion,
}
