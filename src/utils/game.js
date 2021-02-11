import {
    hideAndRemoveSplash,
    putSplashInLoadingCompleteState
  } from '../splash';

import {
    getTimeAsMinutesAndSeconds,
    getRemainingTimeBetween
  } from './datetime';

import {
    setTimerClassToButtonTextElement,
    changeTextIntoSomeElement,
    setFirstShowClassToElement,

    constructTower,
    updateTower,

    updateQuestionsInterface,

    createPlayerInterface,
    updatePlayerInterface,

    showFinalWinResultScreen,
    showFinalLoseResultScreen,
  } from './content';

import questions from './questions';

import Player from './player';

const Game = {

  playerA: new Player({ name: 'Венецианские фамильяры' }),

  playerB: new Player({ name: 'Обезумевшая кучка федералов' }),

  questions: questions.map( element => ({ ...element, status: '' })),

  questionsCurrentId: 0,

  currentQuestionFromBranch: {},

  pendingAnswer: false,

  timersForAnswer: {
    startTime: null,
    endTime: null,
    timeout: null,
    interval: null,
    clear() {
      this.startTime = null;
      clearTimeout(this.timeout);
      clearInterval(this.interval);
    }
  },

  ready () {
    putSplashInLoadingCompleteState();
    createPlayerInterface({ playerData: { ...this.playerA }, mainPlayer: true });
    createPlayerInterface({ playerData: { ...this.playerB }, secondPlayer: true });
  },

  start () {
    constructTower();
    hideAndRemoveSplash();
    setFirstShowClassToElement({ className: 'ground', timeout: 600 });
    setFirstShowClassToElement({ className: 'tower', timeout: 500 });
    setFirstShowClassToElement({ className: 'mountains', timeout: 1000 });
    setFirstShowClassToElement({ className: 'clouds-back', timeout: 1000 });
    setFirstShowClassToElement({ className: 'clouds-front', timeout: 1000 });
    this.currentQuestionFromBranch = this.questions[0];
    updateQuestionsInterface({
      floorNumber: this.questionsCurrentId+1,
      showAndWaitForQuestionSelect: true,
      timeout: 2000,
      hintsCount: this.playerA.hints
    });
    updateTower({
      targetFloorId: this.questionsCurrentId,
      currentFloor: true,
    });
  },

  showQuestionsInterface ({ questionButton, questionsCurrentId = this.questionsCurrentId }) {
     const difficulty = questionButton.getAttribute('data-questiondifficulty');
     const questionsBranch = this.questions[questionsCurrentId];
     const questionData = difficulty === 'easy' ? questionsBranch.easyQuestion :
       difficulty === 'normal' ? questionsBranch.normalQuestion :
         difficulty === 'hard' ? questionsBranch.hardQuestion : null;
     this.pendingAnswer = true;
     this.currentQuestionFromBranch = { ...questionData };
     updateQuestionsInterface({
       selectQuestionAndPandingAnswer: true,
       question: questionData.question,
       answers: questionData.answers,
     });
     this.runAnswerTimer()
  },

  hideQuestionsInterface () {
    updateQuestionsInterface({
      answerComplete: true,
    });
  },

  answerSelected ({ answerId }) {
    const { id, correctId, scores } = this.currentQuestionFromBranch;
    const answerIsWrong = !(answerId == correctId);
    this.hideQuestionsInterface();
    answerIsWrong ? this.wrongAnswerSelected() : this.correctAnswerSelected();
    this.questionsCurrentId++;
    this.pendingAnswer = false;
    this.timersForAnswer.clear();
  },

  answerTimeIsOver () {
    const { id, correctId, scores } = this.currentQuestionFromBranch;
    const noLivesLeft = this.playerA.lives-1 === 0;
    this.hideQuestionsInterface();
    this.playerA.loseTime();
    updateTower({
      targetFloorId: this.questionsCurrentId,
      wrongFloor: true,
      usedQuestionId: id
    });
    updatePlayerInterface({
      playerData: this.playerA,
      loseLive: true
    });
    if (noLivesLeft) {
      this.gameOver({ timeout: 1000 });
    } else if (this.isFinalQuestion()) {
      this.gameComplete();
    } else {
      updateTower({ targetFloorId: this.questionsCurrentId+1, currentFloor: true });
      updateQuestionsInterface({
        floorNumber: this.questionsCurrentId+1,
        showAndWaitForQuestionSelect: true,
        timeout: 2000,
        hintsCount: this.playerA.hints
      });
    };
    this.questionsCurrentId++;
    this.pendingAnswer = false;
    this.timersForAnswer.clear();
  },

  wrongAnswerSelected () {
    const { id, correctId, scores } = this.currentQuestionFromBranch;
    const noLivesLeft = this.playerA.lives-1 === 0;
    this.playerA.wrongAnswer();
    updateTower({
      targetFloorId: this.questionsCurrentId,
      wrongFloor: true,
      usedQuestionId: id
    });
    updatePlayerInterface({
      playerData: this.playerA,
      loseLive: true
    });
    if (noLivesLeft) {
      this.gameOver({ timeout: 1000 });
    } else if (this.isFinalQuestion()) {
      this.gameComplete();
    } else {
      updateTower({ targetFloorId: this.questionsCurrentId+1, currentFloor: true });
      updateQuestionsInterface({
        floorNumber: this.questionsCurrentId+1,
        showAndWaitForQuestionSelect: true,
        timeout: 2000,
        hintsCount: this.playerA.hints
      });
    };
  },

  correctAnswerSelected () {
    const { id, correctId, scores } = this.currentQuestionFromBranch;
    this.playerA.scores += scores;
    updateTower({
      targetFloorId: this.questionsCurrentId,
      correctFloor: true,
      usedQuestionId: id
    });
    updatePlayerInterface({
      playerData: { ...this.playerA, plusScores: scores },
      updateScrores: true
    });
    if (this.isFinalQuestion()) {
      this.gameComplete();
    }
    else {
      updateTower({ targetFloorId: this.questionsCurrentId+1, currentFloor: true });
      updateQuestionsInterface({
        floorNumber: this.questionsCurrentId+1,
        showAndWaitForQuestionSelect: true,
        timeout: 2000,
        hintsCount: this.playerA.hints
      });
    };
  },

  useHint () {
    const deny = this.playerA.hints === 0;
    const { id, correctId, scores } = this.currentQuestionFromBranch;
    if (deny) return;
    this.playerA.useHint();
    updatePlayerInterface({
      playerData: this.playerA,
      useHint: true,
    });
    this.hideQuestionsInterface();
    updateTower({
      targetFloorId: this.questionsCurrentId,
      correctFloor: true,
      usedQuestionId: id
    });
    if (this.isFinalQuestion()) {
      this.gameComplete();
    } else {
      updateTower({ targetFloorId: this.questionsCurrentId+1, currentFloor: true });
      updateQuestionsInterface({
        floorNumber: this.questionsCurrentId+1,
        showAndWaitForQuestionSelect: true,
        timeout: 2000,
        hintsCount: this.playerA.hints
      });
    }
    this.questionsCurrentId++;
    this.pendingAnswer = false;
    this.timersForAnswer.clear();
  },

  runAnswerTimer () {
    const { timeForAnswer } = this.currentQuestionFromBranch;
    const timerElement =  document.querySelector('.questions-interface .question-button.use .text');
    this.pendingAnswer = true;
    this.timersForAnswer.startTime = new Date();
    this.timersForAnswer.interval = setInterval( () => {
      const dateBetween = getRemainingTimeBetween({
        firstDate: new Date,
        secondDate: this.timersForAnswer.startTime,
        timeForAnswer: timeForAnswer*1000
      });
      if (+dateBetween < 1) {
        this.answerTimeIsOver();
        this.timersForAnswer.clear();
        return;
      };
      const mmss = getTimeAsMinutesAndSeconds(dateBetween);
      changeTextIntoSomeElement({ element: timerElement, text: mmss });
    }, 60);
    this.timersForAnswer.timeot = setTimeout( () =>
      this.timersForAnswer.clear(), timeForAnswer*1000 );
  },

  gameComplete () {
    updateTower({ finished: true });
    setTimeout(() => showFinalWinResultScreen({ gameResult: this.playerA }), 3000 );
  },

  gameOver () {
    setTimeout(() => showFinalLoseResultScreen({ gameResult: this.playerA }), 3000 )
  },

  clearTimersForAnswer () {
    clearTimeout(this.timersForAnswer[0]); clearInterval(this.timersForAnswer[1]);
  },

  isFinalQuestion () {
    return this.questionsCurrentId === questions.length-1;
  }


};

export { Game };
