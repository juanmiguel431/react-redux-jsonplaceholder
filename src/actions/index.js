import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost());
    const posts = getState().posts;
    const userIds = _.uniq(_.map(posts, 'userId'));

    userIds.forEach(userId => {
      dispatch(fetchUser(userId));
    });
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
