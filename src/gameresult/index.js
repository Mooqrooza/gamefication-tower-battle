import './styles.scss';

import finalexitbutton from './finalexitbutton';

const avatar = require('../assets/images/male-avatar-180x180-1.jpg')

import winimage from './winimage';

const html = `
  <div class="game-result">
    <div class="content">
      <div class="title-text">
        <div class="line"></div>
        <div class="line"></div>
         Победа!
      </div>
      <div class="desc-text">
        Поздравляем, вы прошли режим тестирования!
      </div>
      <div class="main-composition">
        ${winimage}
        <img class="avatar" src="${avatar}" />
      </div>
      <div>
        <div class="points-detail">
          <div class="line"></div>
          <div class="ico points"><div></div></div>
          <p>Получено баллов:</p>
          <div class="points-count">5678</div>
        </div>
        <div class="points-detail">
          <div class="line"></div>
          <div class="ico wrong-answers-count"><div></div></div>
          <p>Неправильных ответов:</p>
          <div class="points-count">1</div>
        </div>
        <div class="points-detail">
          <div class="line"></div>
          <div class="line"></div>
          <div class="ico hints-used-count"><div></div></div>
          <p>Использованно подсказок:</p>
          <div class="points-count">2</div>
        </div>
      </div>
      ${finalexitbutton({ text: 'Выйти'})}
    </div>
  </div>
`;

export default html;
