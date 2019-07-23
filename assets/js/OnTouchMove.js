/**
 *
 * @description atrela eventos de toque ao elemento enviado e chama as funções de callback correspondentes
 * @param {node} el
 * @param {object} options
 */
export function OnGrab(el, {
  safeX = 20,
  safeY = 20,
  onDragTop,
  onDragBottom,
  onDragLeft,
  onDragRight,
  onGrab,
  onDrag,
  onDrop,
  onDropTop,
  onDropBottom,
  onDropLeft,
  onDropRight,
} = {}) {
  let breakpointX;
  let breakpointY;
  let startX;
  let endX;
  let startY;
  let endY;

  el.addEventListener('touchstart', (e) => {
    breakpointX = e.changedTouches[0].screenX;
    breakpointY = e.changedTouches[0].screenY;
    startX = breakpointX;
    startY = breakpointY;
    onGrab && onGrab(e, { x: startX, y: startY });
  });

  el.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].screenX;
    endY = e.changedTouches[0].screenY;

    if (safeX < endX - startX) {
      onDropRight && onDropRight();
    }

    if (safeX < startX - endX) {
      onDropLeft && onDropLeft();
    }

    if (safeY < endY - startY) {
      onDropBottom && onDropBottom();
    }

    if (safeY < startY - endY) {
      onDropTop && onDropTop();
    }

    onDrop && onDrop(e, { x: endX, y: endY });
  });

  el.addEventListener('touchmove', (e) => {
    let positionX = e.changedTouches[0].screenX;
    let positionY = e.changedTouches[0].screenY;

    if (safeX < positionX - breakpointX) {
      onDragRight && onDragRight();
      breakpointX = positionX;
    }

    if (safeX < breakpointX - positionX) {
      onDragLeft && onDragLeft();
      breakpointX = positionX;
    }

    if (safeY < positionY - breakpointY) {
      onDragTop && onDragTop();
      breakpointY = positionY;
    }

    if (safeY < breakpointY - positionY) {
      onDragBottom && onDragBottom();
      breakpointY = positionY;
    }

    onDrag && onDrag(e, { x: positionX, y: positionY });
  });
}

/**
 *
 * @param {*} el
 * @description atrela eventos de toque ao elemento enviado e chama as funções de callback correspondentes
 */
export function onDrop(el, { safeX = 60, safeY = 60, onDragTop, onDragBottom, onDragLeft, onDragRight } = {}) {
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
      onDragRight && onDragRight();
    }

    if (safeX < startX - endX) {
      onDragLeft && onDragLeft();
    }

    if (safeY < endY - startY) {
      onDragTop && onDragTop();
    }

    if (safeY < startY - endY) {
      onDragBottom && onDragBottom();
    }
  });
}

