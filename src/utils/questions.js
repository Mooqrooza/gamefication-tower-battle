const QuestionsGroup = {
    easyQuestion: {
      id: 0,
      question: 'Что было раньше: яйцо или курица?...<br />Только не гуглить! ',
      correctId: 2,
      answers: ['Курица', 'Яйцо', 'Инфузория'],
      timeForAnswer: 30,
      scores: 100,
    },
    normalQuestion: {
      id: 1,
      question: 'Какой стороной падает хлеб, намазынный сверху маслом?<br />Хлеб "Бородинский", а марка масла неизвестна... ',
      correctId: 3,
      answers: ['Боковой стороной', 'Маслом вниз', 'Хлебом вверх', 'Как получится'],
      timeForAnswer: 20,
      scores: 200,
    },
    hardQuestion: {
      id: 2,
      question: 'Что было до момента возникновения времени? ',
      correctId: 0,
      answers: ['Ничего', 'Нечто', 'Курица'],
      timeForAnswer: 10,
      scores: 300,
    },
};


const questions = [];

const fillQuestions = ({ count }) => {
   for (let i=0; i<count; i++) {
     questions.push(QuestionsGroup)
   }
};

fillQuestions({ count: 10 });


export default questions;
