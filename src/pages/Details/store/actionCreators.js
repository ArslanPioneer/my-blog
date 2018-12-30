import axios from 'axios';
import * as types from './constants';
const changeDetail = (title, content) => ({
  type: types.GET_TITLE_DATA,
  title,
  content
});

export const getDetail = (id) => {
  return dispatch => {
    axios
      .get(
        `https://easy-mock.com/mock/5c2624b4bc1add21289512be/blog/blog/titleDetail?id=${id}`
      )
      .then(response => {
        const data = response.data.data;
        dispatch(changeDetail(data.title, data.content));
      });
  };
};
