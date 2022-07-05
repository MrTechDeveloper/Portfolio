import * as actionTypes from '@actions/actionTypes';
import { Dimensions } from 'react-native';
const initialState = {
  theme: null,
  font: null,
  force_dark: null,
  language: null,
  current_width: Dimensions.get('window').width,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case actionTypes.CHANGE_FONT:
      return {
        ...state,
        font: action.font,
      };
    case actionTypes.FORCE_APPEARANCE:
      return {
        ...state,
        force_dark: action.force_dark,
      };
    case actionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    case actionTypes.WIDTH_SCREEN:
      return {
        ...state,
        current_width: action.width,
      };
    default:
      return state;
  }
};
