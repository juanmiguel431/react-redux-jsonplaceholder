import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPost = () => async (dispatch, getState) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POST', payload: response.data });
};

