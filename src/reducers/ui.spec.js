import reducer, * as ui from './ui'

describe('UI reducer', () => {
  const stateSetup = modalOpen => {
    return reducer(
      { modalOpen: false },
      { type: 'TOGGLE_MODAL', modalOpen: modalOpen }
    )
  }
  describe('when receiving a TOGGLE_MODAL action', () => {

    it('triggers "modalOpen: true" state', () => {
      const state = stateSetup(true);
      expect(ui.getModalStatus(state)).toEqual(true)
    })
    it('triggers "modalOpen: false" state', () => {
      const state = stateSetup(false);
      expect(ui.getModalStatus(state)).toEqual(false)
    })
  });
});