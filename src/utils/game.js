import { hideAndRemoveSplash, putSplashInLoadingCompleteState } from '../splash';

import {
  setFirstShowClassToElement,
  constructTower,
  updateTestsInterface,
  updateTower,
} from './content';

import questions from './questions';

// Класс для объекта игрока
class Player {
  addLive = () => {
    this.lives++;
  };

  lossLive = () => {
    this.lives--;
  };

  addHint = () => {
    this.hints++;
  };

  useHint = () => {
    this.hints--;
  };

  addScores = ( scores ) => {
    this.scores += scores;
  };

  lossScores = ( scores ) => {
    this.scores -= scores;
  };

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

    updateTestsInterface({
      floorNumber: this.questionsCurrentId+1,
      pendingQuestionSelect: true,
      timeout: 2000 });
  };

  useQuestionAndAnswers = ({ questionButton, questionsCurrentId = this.questionsCurrentId }) => {
     const difficulty = questionButton.getAttribute('data-questiondifficulty');
     const questionsBranch = this.questions[questionsCurrentId];
     const questionData = difficulty === 'easy' ? questionsBranch.easyQuestion :
         difficulty === 'normal' ? questionsBranch.normalQuestion :
           difficulty === 'hard' ? questionsBranch.hardQuestion : null;
     this.pendingAnswer = true;
     this.currentQuestionFromBranch = new Object(questionData);
     updateTestsInterface({
       pendingAnswerSelect: true,
       question: questionData.question,
       answers: questionData.answers
     })
  };


  answerSelected = ( selectedAnswerId ) => {
    const correct = selectedAnswerId == this.currentQuestionFromBranch.correctId;

  };

  useHints = () => {
    const deny = this.playerA.hints > 0;

  };

  pendingAnswer = false;

  currentQuestionFromBranch = {};

  constructor ({
    questions = [],
    questionsCurrentId,
    playerA,
    playerB,
  }) {
    this.questions = questions;
    this.questionsCurrentId = questionsCurrentId;
    this.playerA = playerA;
    this.playerB = playerB;
  }
};

/* Создаем первого игрока (Второй пока не нужен)*/
const PlayerA = new Player({ name: 'Венецианские фамильяры' });

/* Создаем объект игры и присвиваем созданный объект игрока*/
/* Присваиваем параметру этажей с вопросами "questionFloors" список вопросов дополняя свойством "status" */
/* Задаем начальный уровень этажа */
const TowerGame = new Game ({
  questions: questions.map( element => ({ ...element, status: '' })),
  questionsCurrentId: 0,
  playerA: PlayerA,
});

export { TowerGame, PlayerA  };
