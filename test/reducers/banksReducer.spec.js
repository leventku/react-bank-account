import reducer from '../../src/reducers/banksReducer'
import * as types from '../../src/actions/actionTypes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      all: [],
      confirmed: null
    })
  })

  it('should handle BANKS_FETCHED', () => {
    expect(
      reducer({
        all: [],
        confirmed: null
      }, {
        type: types.BANKS_FETCHED,
        payload: [
          { id: 0, name: 'barclays' },
          { id: 1, name: 'natwest' },
        ]
      })
    ).toEqual(
      {
        all: [
          { id: 0, name: 'barclays' },
          { id: 1, name: 'natwest' },
        ],
        confirmed: null 
      }
    )
  })
})