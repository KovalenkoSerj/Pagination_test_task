const initialState = {
  users: [],
  currentPage: 1,
  usersOnPage: 5,
  loading: true
}
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case 'INITIAL_PAGE':
      return {
        ...state,
        users: action.payload.users,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state
  }
}

