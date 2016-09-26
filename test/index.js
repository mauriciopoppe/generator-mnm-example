'use strict'

import generatorMnmExample from '../src/index.js'
import test from 'ava'

test('awesome:test', t => {
  const message = 'everything is awesome'
  t.is(generatorMnmExample('awesome'), message, message)
})

