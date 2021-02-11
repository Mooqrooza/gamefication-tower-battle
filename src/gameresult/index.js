import './styles.scss';

import finalexitbutton from './finalexitbutton';

const avatar = require('../assets/images/male-avatar-180x180-1.jpg')

import winimage from './winimage';

import loseimage from './loseimage';

const html = `
  <div class="game-result">
    <div class="content">
      <div class="title-text">
        <div class="line"></div>
        <div class="line"></div>
        <p>Победа!</p>
      </div>
      <div class="desc-text">
        Поздравляем, вы прошли режим тестирования!
      </div>
      <div class="main-composition">
        ${loseimage}
        ${winimage}
        <img class="avatar" src="${avatar}" />
      </div>
      <div>
        <div class="points-detail">
          <div class="line"></div>
          <div class="ico points"><div></div></div>
          <p>Получено баллов:</p>
          <div class="points-count"></div>
        </div>
        <div class="points-detail">
          <div class="line"></div>
          <div class="ico wrong-answers-count"><div></div></div>
          <p>Неправильных ответов:</p>
          <div class="points-count"></div>
        </div>
        <div class="points-detail">
          <div class="line"></div>
          <div class="line"></div>
          <div class="ico hints-used-count"><div></div></div>
          <p>Использованно подсказок:</p>
          <div class="points-count"></div>
        </div>
      </div>
      ${finalexitbutton({ text: 'Выйти'})}
    </div>
  </div>
`;

export default html;
