import * as actions from '../../src/actions'
import * as types from '../../src/actions/actionTypes'

describe('actions', () => {
  it('should create an action to userStart', () => {
    const expectedAction = {
      type: types.USER_STARTED,
      payload: true
    }
    expect(actions.userStart()).toEqual(expectedAction)
  })
})