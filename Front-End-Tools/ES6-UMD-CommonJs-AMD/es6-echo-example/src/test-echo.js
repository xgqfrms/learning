import test from 'tape'
import echo from '../'

test('exists', (t) => {
  t.ok(test, 'test lib correctly imported')
  t.end()
})

test('echo exists', (t) => {
  t.ok(echo, 'echo lib correctly imported')
  t.end()
})

test('can echo', (t) => {
  let str = 'hello world'
  t.equal(str, echo(str), 'echoed')
  t.end()
})