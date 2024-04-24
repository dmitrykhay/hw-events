import { Score } from "./Score";

export class GoblinMover {
  constructor(fieldLength) {
    this.fielIndexes = Array.from({ length: fieldLength ** 2 }, (_, i) => i);
    this.score = new Score();
    this.field = document.body.firstChild;
    this.cell = null;
  }

  clickEvent() {
    const element = document.body;
    element.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("goblin") &&
        !event.target.classList.contains("hidden")
      ) {
        event.target.classList.add("hidden");
        if (this.score.score > 1) {
          this.score.updateScore();
        } else {
          this.score.printScore();
        }
      }
    });
  }

  mover() {
    const timeoutID = setInterval(() => {
      if (
        this.cell &&
        !this.cell.firstElementChild.classList.contains("hidden")
      ) {
        this.score.failCounter();
        this.cell.firstElementChild.classList.add("hidden");
      }
      if (this.score.failScore === 5) {
        document.body.innerHTML = "Game Over";
        clearInterval(timeoutID);
        return;
      }
      let cellIndex = Math.floor(Math.random() * this.fielIndexes.length);
      this.cell = this.field.children[cellIndex];
      this.cell.firstElementChild.classList.remove("hidden");
    }, 1000);
  }
}
