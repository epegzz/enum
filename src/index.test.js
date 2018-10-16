import { StringEnum } from './index'

describe('es6-enum', () => {
  it('works', () => {
    expect(StringEnum('one', 'two', 'three')).toEqual({
      one: 'one',
      two: 'two',
      three: 'three'
    })
  })
})
