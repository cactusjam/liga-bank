import * as actionTypes from './actionTypes'

const ACTION_HANDLERS = {
  [actionTypes.SET_ACTIVE_SLIDE_INDEX]:  (state, { isActive }) => ({
    ...state,
    isActiveSlideIndex: isActive,
  })
};

const initialState = {
  isActiveSlideIndex: false
}

export default function appReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
