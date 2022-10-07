import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPost());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value();
};

export const fetchPost = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POST', payload: response.data });
};

export const fetchUser = (id) => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get(`users/${id}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}

// export const fetchUser = (id) => (dispatch, getState) => _fetchUser(id, dispatch);
//
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`users/${id}`);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
