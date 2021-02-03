import { hideAndRemoveSplash } from '../splash';
import { setFirstShowClassToElement, constructTower } from './content';
import { putSplashInLoadingCompleteState } from '../splash';
import questions from './questions';

// Класс для объекта игрока
class Player {
  constructor ({
      naem = 'Player',
      scores = 0,
      users = [],
      lives = 2,
      hints = 2
  }) {
    this.name = name;
    this.scores = scores;
    this.users = users;
    this.lives = lives;
    this.hints = hints;
  }
};

// Класс для общего объекта игры
class Game {

  ready = () => {
    putSplashInLoadingCompleteState();
  };

  start = () => {
    constructTower();
    hideAndRemoveSplash();
    setFirstShowClassToElement({ className: 'ground', timeout: 600 });
    setFirstShowClassToElement({ className: 'tower', timeout: 500 });
    setFirstShowClassToElement({ className: 'mountains', timeout: 1000 });
    setFirstShowClassToElement({ className: 'clouds-back', timeout: 1000 });
    setFirstShowClassToElement({ className: 'clouds-front', timeout: 1000 });
    setFirstShowClassToElement({ className: 'tests-interface', timeout: 2000 });
  };

  constructor ({
    questions = [],
    gameState = '',
    playerA,
    playerB,
    questionFloors = [],
    questionFloorCurrentId,
  }) {
    this.questinos = questions;
    this.playerA = playerA;
    this.playerB = playerB;
    this.questionFloors = questionFloors;
    this.questionFloorCurrentId = questionFloorCurrentId;
  }

};

/* Создаем первого игрока (Второй пока не нужен)*/
const PlayerA = new Player({ name: 'Венецианские фамильяры' });

/* Создаем объект игры и присвиваем созданный объект игрока*/
/* Присваиваем параметру этажей с вопросами "questionFloors" список вопросов дополняя свойством "status" */
/* Задаем начальный уровень этажа */
const TowerGame = new Game ({
  playerA: PlayerA,
  questionFloors: questions.map( element => ({ ...element, status: '' })),
  questionFloorCurrentId: 0
});

export { TowerGame, PlayerA  };
