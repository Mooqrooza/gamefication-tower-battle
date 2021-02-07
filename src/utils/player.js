// Класс для объекта игрока
class Player {
  addLive = () => this.lives++;

  lossLive = () => this.lives--;

  addHint = () => this.hints++;

  useHint = () => this.hints--;

  addScores = ( scores ) => this.scores += scores;

  lossScores = ( scores ) => this.scores -= scores;

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

export default Player;
