Element.prototype.makeDraggable = function () {
  let object = this
  let startCursorX
  let startCursorY
  let startX
  let startY

  object.addEventListener('dragstart', function () {
    startCursorX = event.pageX
    startCursorY = event.pageY
    startX = object.style.marginLeft.replace('px', '') * 1
    startY = object.style.marginTop.replace('px', '') * 1
  })

  object.addEventListener('dragover', function () {
    event.preventDefault()
  })

  object.addEventListener('dragend', function () {
    object.style.position = 'absolute'
    object.style.marginLeft = startX + event.pageX - startCursorX + 'px'
    object.style.marginTop = startY + event.pageY - startCursorY + 'px'
  })
}

function removeFirst() {
  document.getElementById('first').remove()
}

function removeSecond() {
  document.getElementById('second').remove()
}

document.getElementById('first').makeDraggable()
document.getElementById('second').makeDraggable()