
/**
 *
 * @param {*} el
 * @description atrela eventos de toque ao elemento enviado e chama as funções de callback correspondentes
 */
export default function(el, { safeX = 60, safeY = 60, onTop, onBottom, onLeft, onRight } = {}) {
  let startX;
  let endX;
  let startY;
  let endY;

  el.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].screenX;
    startY = e.changedTouches[0].screenY;
  });

  el.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    endY = e.changedTouches[0].screenY;

    if (safeX < endX - startX) {
      onRight && onRight();
    }

    if (safeX < startX - endX) {
      onLeft && onLeft();
    }

    if (safeY < endY - startY) {
      onTop && onTop();
    }

    if (safeY < startY - endY) {
      onBottom && onBottom();
    }
  });
}

