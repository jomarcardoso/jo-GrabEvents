import { OnGrab } from './OnTouchMove.js';

function onTouchMove() {
  const elXAxis = document.querySelector('#touch-result-1-x');
  const elYAxis = document.querySelector('#touch-result-1-y');
  const elStatus = document.querySelector('#touch-status-1');
  const elDropX = document.querySelector('#touch-drop-1-x');
  const elDropY = document.querySelector('#touch-drop-1-y');
  let contX = 0;
  let contY = 0;

  function onXMove(fn) {
    contX = fn(contX);
    elXAxis.innerHTML = contX;
  }

  function onYMove(fn) {
    contY = fn(contY);
    elYAxis.innerHTML = contY;
  }

  function onGrab() {
    elStatus.innerHTML = 'yes';
  }

  function onDrop() {
    onYMove(() => 0);
    onXMove(() => 0);
    elStatus.innerHTML = 'not';
  }

  function onDrag(e, axes) {
    // console.log(axes);
  }

  function dropX(direction) {
    elDropX.innerHTML = direction;
  }

  function dropY(direction) {
    elDropY.innerHTML = direction;
  }

  OnGrab(
    document.querySelector('#touch-pad-1'), {
      onDragLeft: () => onXMove(i => i -= 1),
      onDragRight: () => onXMove(i => i += 1),
      onDragTop: () => onYMove(i => i -= 1),
      onDragBottom: () => onYMove(i => i += 1),
      onGrab,
      onDrop,
      onDrag,
      onDropTop: () => dropY('top'),
      onDropBottom: () => dropY('bottom'),
      onDropLeft: () => dropX('left'),
      onDropRight: () => dropX('right')
    }
  );
}

onTouchMove();
