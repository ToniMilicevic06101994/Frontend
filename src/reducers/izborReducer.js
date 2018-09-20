const initialState = {
  data: {}
};

export default function izborReducer(state = initialState, action) {
  switch (action.type) {
    case 'IZBOR_SAVED':
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}
