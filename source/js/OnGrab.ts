/**
 *
 * @description atrela eventos de toque ao elemento enviado e chama as funções de callback correspondentes
 * @param {node} el
 * @param {object} options
 */
export default function OnGrab(el, {
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
  let clicking = false;

  function handleGrab(e, x, y) {
    breakpointX = x;
    breakpointY = y;
    startX = breakpointX;
    startY = breakpointY;
    onGrab && onGrab(e, { x: startX, y: startY });
  }

  el.addEventListener('mousedown', (e) => {
    clicking = true;
    const x = e.screenX;
    const y = e.screenY;
    handleGrab(e, x, y);
  });

  el.addEventListener('touchstart', (e) => {
    const x = e.changedTouches[0].screenX;
    const y = e.changedTouches[0].screenY;
    handleGrab(e, x, y);
  });

  function handleDrop(e, x, y) {
    endX = x;
    endY = y;

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
  }

  document.addEventListener('mouseup', (e) => {
    const x = e.screenX;
    const y = e.screenY;
    clicking = false;
    handleDrop(e, x, y)
  });

  el.addEventListener('touchend', (e) => {
    const x = e.changedTouches[0].screenX;
    const y = e.changedTouches[0].screenY;
    handleDrop(e, x, y);
  });

  function handleDrag(e, x, y) {
    let positionX = x;
    let positionY = y;

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
  }

  document.addEventListener('mousemove', (e) => {
    if (!clicking) return;
    const x = e.screenX;
    const y = e.screenY;
    handleDrag(e, x, y);
  });

  el.addEventListener('touchmove', (e) => {
    const x = e.changedTouches[0].screenX;
    const y = e.changedTouches[0].screenY;
    handleDrag(e, x, y);
  });
}
