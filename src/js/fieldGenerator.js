import image from "../img/goblin.png";
export function drawGameField(rawLength = 8) {
  let field = `<div class="field">`;
  let index = 0;
  for (let j = 0; j < rawLength ** 2; j++) {
    field += `
    <div class='square i${index++}'>
      <img class="goblin hidden" src="${image}" width="100" height="100">
    </div>`;
  }
  field += "</div>";
  return field;
}
