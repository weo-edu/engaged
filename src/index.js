let documentListeners = ['keydown', 'click']
let windowListeners = ['mousemove', 'scroll', 'touchstart']

function engaged (listener) {

  documentListeners.forEach((type) => {
    document.addEventListener(type, listener, true)
  })

  windowListeners.forEach((type) => {
    window.addEventListener(type, listener, true)
  })

  return function () {
    documentListeners.forEach((type) => {
      document.removeEventListener(type, listener)
    })

    windowListeners.forEach((type) => {
      window.removeEventListener(type, listener)
    })
  }
}



export default engaged
