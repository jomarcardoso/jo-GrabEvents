/**
 *
 * @description atrela eventos de toque ao elemento enviado e chama as funções de callback correspondentes
 * @param {node} el
 * @param {object} options
 */
export default function(el, {
  safeX = 20,
  safeY = 20,
  onTop,
  onBottom,
  onLeft,
  onRight,
  onMouseDown,
  onMouseUp,
  onMouseMove
} = {}) {
  let clicking = false;
  let breakpointX;
  let breakpointY;

  el.addEventListener('mousedown', (e) => {
    e.preventDefault();
    breakpointX = e.screenX;
    breakpointY = e.screenY;
    clicking = true;
    onMouseDown && onMouseDown();
  });

  document.addEventListener('mouseup', (e) => {
    clicking = false;
    onMouseUp && onMouseUp();
  });

  document.addEventListener('mousemove', (e) => {
    if (!clicking) return;

    let positionX = e.screenX;
    let positionY = e.screenY;

    if (safeX < positionX - breakpointX) {
      onRight && onRight();
      breakpointX = positionX;
    }

    if (safeX < breakpointX - positionX) {
      onLeft && onLeft();
      breakpointX = positionX;
    }

    if (safeY < positionY - breakpointY) {
      onTop && onTop();
      breakpointY = positionY;
    }

    if (safeY < breakpointY - positionY) {
      onBottom && onBottom();
      breakpointY = positionY;
    }

    onMouseMove && onMouseMove();
  });
}
