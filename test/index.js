/**
 * Imports
 */

import test from 'tape'
import engaged from '../src'
import event from 'synthetic-dom-events'

/**
 * Tests
 */

test('should work with click', (t) => {
  let timeEngaged = 0
  engaged(function () {
    timeEngaged++
  })

  trigger(document, 'click')

  setTimeout(function () {
    t.equal(timeEngaged, 1)
    t.end()
  }, 10)

})

test('should work with keydown', (t) => {
  let timeEngaged = 0
  engaged(function () {
    timeEngaged++
  })

  trigger(document, 'keydown')

  setTimeout(function () {
    t.equal(timeEngaged, 1)
    t.end()
  }, 10)

})

test('should work with mousemove', (t) => {
  let timeEngaged = 0
  engaged(function () {
    timeEngaged++
  })

  trigger(window, 'mousemove')

  setTimeout(function () {
    t.equal(timeEngaged, 1)
    t.end()
  }, 10)

})

test('should work with scroll', (t) => {
  let timeEngaged = 0
  engaged(function () {
    timeEngaged++
  })

  trigger(window, 'scroll')

  setTimeout(function () {
    t.equal(timeEngaged, 1)
    t.end()
  }, 10)

})

test('should work with touchstart', (t) => {
  let timeEngaged = 0
  engaged(function () {
    timeEngaged++
  })

  trigger(window, 'touchstart')

  setTimeout(function () {
    t.equal(timeEngaged, 1)
    t.end()
  }, 10)

})


test('should not engage if not events', (t) => {
  let timeEngaged = 0
  engaged(function () {
    timeEngaged++
  })

  setTimeout(function () {
    t.equal(timeEngaged, 0)
    t.end()
  }, 0)
})

function trigger (el, type, options) {
  let ev = event(type, options)
  el.dispatchEvent(ev)
}
