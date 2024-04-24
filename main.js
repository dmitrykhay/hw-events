/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/hammer.png
const hammer_namespaceObject = __webpack_require__.p + "5e6b5d98823a28e66b7d.png";
;// CONCATENATED MODULE: ./src/img/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// CONCATENATED MODULE: ./src/js/fieldGenerator.js

function drawGameField(rawLength = 8) {
  let field = `<div class="field">`;
  let index = 0;
  for (let j = 0; j < rawLength ** 2; j++) {
    field += `
    <div class='square i${index++}'>
      <img class="goblin hidden" src="${goblin_namespaceObject}" width="100" height="100">
    </div>`;
  }
  field += "</div>";
  return field;
}
;// CONCATENATED MODULE: ./src/js/Score.js
class Score {
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
;// CONCATENATED MODULE: ./src/js/goblinMover.js

class GoblinMover {
  constructor(fieldLength) {
    this.fielIndexes = Array.from({
      length: fieldLength ** 2
    }, (_, i) => i);
    this.score = new Score();
    this.field = document.body.firstChild;
    this.cell = null;
  }
  clickEvent() {
    const element = document.body;
    element.addEventListener("click", event => {
      if (event.target.classList.contains("goblin") && !event.target.classList.contains("hidden")) {
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
      if (this.cell && !this.cell.firstElementChild.classList.contains("hidden")) {
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
;// CONCATENATED MODULE: ./src/js/app.js


const FILED_LENGTH = 4;
function app() {
  document.body.innerHTML = drawGameField(FILED_LENGTH);
  const goblin = new GoblinMover(FILED_LENGTH);
  goblin.mover();
  goblin.clickEvent();
}
app();
;// CONCATENATED MODULE: ./src/index.js



/******/ })()
;
//# sourceMappingURL=main.js.map