export class Score {
  constructor() {
    this.score = 1;
    this.failScore = 0;
  }
  printScore() {
    const score = document.createElement("div");
    score.textContent = `Score: ${this.score++}`;
    score.classList.add("score");
    document.body.appendChild(score);
  }

  updateScore() {
    const score = document.querySelector(".score");
    score.textContent = `Score: ${this.score++}`;
  }

  failCounter() {
    this.failScore++;
  }
}
