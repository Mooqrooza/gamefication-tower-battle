import {
    hideAndRemoveSplash,
    putSplashInLoadingCompleteState
  } from '../splash';

import {
    getTimeAsMinutesAndSeconds,
    getDateBetween
  } from './datetime';

import {
    setTimerClassToButtonTextElement,
    changeTextIntoSomeElement,
    setFirstShowClassToElement,
    constructTower,
    updateQuestionsInterface,
    updateTower,
    showFinalWinResultScreen,
    showFinalLoseResultScreen,
  } from './content';

import questions from './questions';

import Player from './player';

const Game = {

  playerA: new Player({ name: 'Венецианские фамильяры' }),

  questions: questions.map( element => ({ ...element, status: '' })),

  questionsCurrentId: 0,

  ready () {
    putSplashInLoadingCompleteState();
  },

  start () {
    constructTower();
    hideAndRemoveSplash();
    setFirstShowClassToElement({ className: 'ground', timeout: 600 });
    setFirstShowClassToElement({ className: 'tower', timeout: 500 });
    setFirstShowClassToElement({ className: 'mountains', timeout: 1000 });
    setFirstShowClassToElement({ className: 'clouds-back', timeout: 1000 });
    setFirstShowClassToElement({ className: 'clouds-front', timeout: 1000 });
    updateQuestionsInterface({
      floorNumber: this.questionsCurrentId+1,
      showAndWaitForQuestionSelect: true,
      timeout: 2000
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

  answerSelected ( selectedAnswerId ) {
    const { id, correctId } = this.currentQuestionFromBranch;
    const answerIsWrong = selectedAnswerId !== correctId;
    this.hideQuestionsInterface();
    if (answerIsWrong) {
      this.playerA.lives -= 1;
      if (this.playerA.lives === 0) { this.gameOver(); return; }
      updateTower({
        targetFloorId: this.questionsCurrentId,
        wrongFloor: true,
        usedQuestionId: id
      });
    } else updateTower({
      targetFloorId: this.questionsCurrentId,
      correctFloor: true,
      usedQuestionId: id
    });
    this.questionsCurrentId++;
    updateTower({ targetFloorId: this.questionsCurrentId, currentFloor: true });
    this.pendingAnswer = false;
    this.timersForAnswer.clear();
    updateQuestionsInterface({
      floorNumber: this.questionsCurrentId+1,
      showAndWaitForQuestionSelect: true,
      timeout: 2000
    });
  },

  hintUsed () {
    const deny = this.playerA.hints > 0;
    if (deny) return;
    this.hideQuestionsInterface();
    this.pendingAnswer = false;
    this.timersForAnswer.clear();
  },

  runAnswerTimer () {
    const { timeForAnswer } = this.currentQuestionFromBranch;
    const timerElement =  document.querySelector('.questions-interface .question-button.use .text');
    this.pendingAnswer = true;
    this.timersForAnswer.startTime = new Date();
    this.timersForAnswer.interval = setInterval( () => {
      const dateBetween = getDateBetween({ secondDate: this.timersForAnswer. startTime, operator: '-' });
      const mmss = getTimeAsMinutesAndSeconds(dateBetween);
      changeTextIntoSomeElement({ element: timerElement, text: mmss })
    }, 60);
    this.timersForAnswer.timeot = setTimeout( () =>
      this.timersForAnswer.clear(), timeForAnswer*1000 );
  },

  gameComplete () {
    showFinalWinResultScreen();
  },

  gameOver () {
    showFinalLoseResultScreen();
  },

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

  clearTimersForAnswer () {
    clearTimeout(this.timersForAnswer[0]); clearInterval(this.timersForAnswer[1]);
  },

};

export { Game };
