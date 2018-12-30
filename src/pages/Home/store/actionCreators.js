import axios from 'axios';

const queryList = articleList => ({
  type: 'home/queryArticleList',
  articleList
});

export const queryArticlesList = () => {
  return dispatch => {
    axios
      .get(
        'https://easy-mock.com/mock/5c2624b4bc1add21289512be/blog/blog/articleList'
      )
      .then(response => {
        const articleList = response.data.data;
        dispatch(queryList(articleList));
      });
  };
};
