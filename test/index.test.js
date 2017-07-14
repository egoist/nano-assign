import assign from '../src'

test('main', () => {
  expect(assign({}, { foo: 'foo' }, null, undefined, { foo: 'bar' })).toEqual({
    foo: 'bar'
  })
})
