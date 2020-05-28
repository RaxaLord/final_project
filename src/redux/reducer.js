import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
};

const GET_USER = 'GET_USER';

export function getUserSession() {
  // console.log(user);
  return {
    type: GET_USER,
    payload: axios.get('/auth/user_session').then((res) => res.data),
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER + '_PENDING':
      return { ...state, loading: true };
    case GET_USER + '_FULFILLED':
      return { ...state, user: payload, loading: false };
    case GET_USER + '_REJECTED':
      return { ...state, loading: false };

    default:
      return state;
  }
}
