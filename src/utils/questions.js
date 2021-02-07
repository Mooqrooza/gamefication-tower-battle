const QuestionsGroup = {
    easyQuestion: {
      id: 0,
      question: 'Что было раньше: яйцо или курица? ',
      correctId: 1,
      answers: ['Курица', 'Яйцо', 'Инфузория'],
      timeForAnswer: 60,
    },
    normalQuestion: {
      id: 1,
      question: 'Какой стороной падает хлеб, намазынный сверху маслом? ',
      correctId: 2,
      answers: ['Боковой стороной', 'Маслом вниз', 'Хлебом вверх'],
      timeForAnswer: 40,
    },
    hardQuestion: {
      id: 2,
      question: 'Что было до момента возникновения времени? ',
      correctId: 3,
      answers: ['Ничто', 'Нечто', 'Курица'],
      timeForAnswer: 20,
    },
};

const questions = [
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
  QuestionsGroup,
];

export default questions;
