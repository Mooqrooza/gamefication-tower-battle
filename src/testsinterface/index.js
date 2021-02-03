import './styles.scss';

import questionbutton from './questionbutton';
import answerbutton from './answerbutton';
import floorlevel from './floorlevel';

const html = `
  <div class="tests-interface">
    <div class="bottom-gradient"></div>
    ${floorlevel}
    <div class="question-buttons">
      ${questionbutton("Легкий вопрос","used")}
      ${questionbutton("Средний вопрос")}
      ${questionbutton("Сложный вопрос")}
    </div>
    <div class="question-text">
      <div class="line"></div>
      <div class="line"></div>
      <p>
        Что делать если клиенту по ошибке заказали дверные короба,
        вместо благородных винтажных обоев?
      </p>
    </div>

    <div class="answers">
      ${answerbutton("Это конец. Нужно сдаться правохранительным органам.")}
      ${answerbutton("Притвориться, словно клиент это и заказывал.")}
      ${answerbutton("Ничего...")}
    </div>
  </div>
`;

export default html;
