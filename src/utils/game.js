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
    updateQuestionsInterface,
    updateDataInPlayerInterface,
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

  answerSelected ( selectedAnswerId ) {
    const { id, correctId, scores } = this.currentQuestionFromBranch;
    const answerIsWrong = !(selectedAnswerId == correctId);
    this.hideQuestionsInterface();
    answerIsWrong ? this.wrongAnswerSelected() : this.correctAnswerSelected();
    this.questionsCurrentId++;
    this.pendingAnswer = false;
    this.timersForAnswer.clear();
  },

  wrongAnswerSelected () {
    const { id, correctId, scores } = this.currentQuestionFromBranch;
    const noLivesLeft = this.playerA.lives-1 === 0;
    this.playerA.lives -= 1;
    updateTower({
      targetFloorId: this.questionsCurrentId,
      wrongFloor: true,
      usedQuestionId: id
    });
    updateDataInPlayerInterface({
      data: this.playerA,
      loseLive: true
    });
    if (noLivesLeft) { this.gameOver({ timeout: 1000 }); }
    else {
      updateTower({ targetFloorId: this.questionsCurrentId+1, currentFloor: true });
      updateQuestionsInterface({
        floorNumber: this.questionsCurrentId+1,
        showAndWaitForQuestionSelect: true,
        timeout: 2000
      });
    };
  },

  correctAnswerSelected () {
    const { id, correctId, scores } = this.currentQuestionFromBranch;
    const thisIsLastFloor = this.questionsCurrentId === this.questions.length-1;
    this.playerA.scores += scores;
    updateTower({
      targetFloorId: this.questionsCurrentId,
      correctFloor: true,
      usedQuestionId: id
    });
    updateDataInPlayerInterface({
      data: { ...this.playerA, plusScores: scores },
      updateScrores: true
    });
    if (thisIsLastFloor) {
      updateTower({ finished: true });
      this.gameComplete({ timeout: 2200 });
    }
    else {
      updateTower({ targetFloorId: this.questionsCurrentId+1, currentFloor: true });
      updateQuestionsInterface({
        floorNumber: this.questionsCurrentId+1,
        showAndWaitForQuestionSelect: true,
        timeout: 2000
      });
    };
  },

  useHint () {
    const deny = this.playerA.hints === 0;
    if (deny) return;
    this.playerA.hints--;
    updateDataInPlayerInterface({
      data: this.playerA,
      useHint: true
    });
    return;
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
      const dateBetween = getRemainingTimeBetween({
        firstDate: new Date,
        secondDate: this.timersForAnswer.startTime,
        timeForAnswer: timeForAnswer*1000
      });
      if (+dateBetween < 1) {
        this.answerSelected(-1);
        this.timersForAnswer.clear();
        return;
      };
      const mmss = getTimeAsMinutesAndSeconds(dateBetween);
      changeTextIntoSomeElement({ element: timerElement, text: mmss });
    }, 60);
    this.timersForAnswer.timeot = setTimeout( () =>
      this.timersForAnswer.clear(), timeForAnswer*1000 );
  },

  gameComplete ({ timeout }) {
    setTimeout(() => showFinalWinResultScreen({}), timeout );
  },

  gameOver ({ timeout }) {
    setTimeout(() => showFinalLoseResultScreen({}), timeout )
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
