import axios from 'axios';

const initialState = {
  user: null,
  loading: false,
};

const GET_USER = 'GET_USER';

export function getUserSession() {
  let user = axios.get('/auth/user_session').then((res) => res.data);
  return {
    type: GET_USER,
    payload: user,
  };
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USER + '_PENDING':
      return { ...state, loading: true };
    case GET_USER + '_FUFFILLED':
      return { ...state, user: payload, loading: false };
    case GET_USER + '_REJECTED':
      return { ...state, loading: false };

    default:
      return state;
  }
}
