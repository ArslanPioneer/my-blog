import * as types from './constants';
const defaultState = {
  title: '',
  content: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
   
    case types.GET_TITLE_DATA:
      return {
        ...state,
        title: action.title,
        content:action.content
      };
    default:
      return state;
  }
};
