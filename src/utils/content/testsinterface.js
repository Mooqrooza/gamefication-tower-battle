import answerbutton from '../../testsinterface/answerbutton';

import {
  setClassToElement,
  setShowClassToElement
} from './classmodifers';

import {
  setEventsToAnswerButtons
} from '../events';

/* Задем класс "pending-question-type" в принятом DOM элементе. Необходимо для интерфейса с вопросами */
const setPendingQestionTypeClassToElement = ({ element, timeout }) => {
  element ? element : element = document.getElementsByClassName('tests-interface')[0];
  const set = () => setClassToElement(element, 'pending-question-type');
  timeout ? setTimeout(() => set(), timeout ) : set();
};

/* Задем класс "pending-answer-select" в принятом DOM элементе. Необходимо для интерфейса с вопросами */
const setPendingAnswerSelectClassToElement = ({ element, timeout }) => {
  element ? element : element = document.getElementsByClassName('tests-interface')[0];
  const answerButtonElements = element.getElementsByClassName("answer-button");
  const set = () => {
    Array.from(answerButtonElements).forEach( el => {
      setClassToElement( el, 'pending-answer-select');
    });
    setClassToElement(element, 'pending-answer-select');
  };
  timeout ? setTimeout(() => set(), timeout ) : set();
};

/* Заполняем DOM элементами-вариантами ответов  в элемент c ответами */
const fillAnswerVariantsForCurrentQuestion = ({ element, answers }) => {
  element ? element : element = document.querySelector('.tests-interface .answers .variants');
  element.innerHTML = '';
  for (let i = 0; i < answers.length; i++) {
    element.innerHTML += answerbutton({ text: answers[i], id: i });
  };
};

/* Функция через которую происходят все изменения в DOM элементе окна с вопросами и ответами */
const updateTestsInterface = ({
   floorNumber,
   show,
   hide,
   pendingQuestionSelect,
   pendingAnswerSelect,
   answerComplete,
   timeout,
   question,
   answers,
 }) => {
  const testInterfaceElement = document.getElementsByClassName('tests-interface')[0];
  const floorLevelElement = testInterfaceElement.querySelector('.floor-level .number');
  const questionTextElement = testInterfaceElement.querySelector('.question-text p');
  const answersBoxElement = testInterfaceElement.querySelector('.answers .variants');
  switch (true) {
    case !isNaN(floorNumber):
      floorLevelElement.innerText = floorNumber
    case show || pendingQuestionSelect:
      questionTextElement.innerText = 'Выберите сложноть вопроса ...'
      setShowClassToElement({ element: testInterfaceElement, timeout });
      break;
    case hide || answerComplete:
      setPendingQestionTypeClassToElement({ element: testInterfaceElement, timeout });
    case pendingAnswerSelect:
      questionTextElement.innerText = question;
      fillAnswerVariantsForCurrentQuestion({ element: answersBoxElement, answers });
      setPendingAnswerSelectClassToElement({ element: testInterfaceElement, timeout });
      setEventsToAnswerButtons();
  };

};

export {
  updateTestsInterface,
  setPendingQestionTypeClassToElement,
  setPendingAnswerSelectClassToElement,
  fillAnswerVariantsForCurrentQuestion,
}
