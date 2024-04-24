import { drawGameField } from "./fieldGenerator.js";
import { GoblinMover } from "./goblinMover.js";

const FILED_LENGTH = 4;
function app() {
  document.body.innerHTML = drawGameField(FILED_LENGTH);
  const goblin = new GoblinMover(FILED_LENGTH);
  goblin.mover();
  goblin.clickEvent();
}

app();
