import * as actionTypes from './actionTypes'

export const setActiveSlideIndex = (isActive) => ({
  type: actionTypes.SET_ACTIVE_SLIDE_INDEX,
  isActive: isActive,
});
