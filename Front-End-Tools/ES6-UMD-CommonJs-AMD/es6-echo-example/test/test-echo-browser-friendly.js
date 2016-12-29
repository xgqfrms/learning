import test from 'tape'
import echo from '../'
import report from 'browserify-tape-spec'

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

if (process.browser) test.createStream().pipe(report('out'))