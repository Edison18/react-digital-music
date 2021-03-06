import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITE_ARTISTS_SUCCESS':
      return action.payload;
    case 'REMOVE_FAVORITE_ARTIST_SUCCESS':
      let newData = {...state};
      delete newData[action.payload];
      return newData;
    default:
      return state;
  }
}

const isLoading = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITE_ARTISTS':
      return true;
    case 'FETCH_FAVORITE_ARTISTS_SUCCESS':
    case 'FETCH_FAVORITE_ARTISTS_FAILED':
      return false;
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_FAVORITE_ARTISTS':
    case 'FETCH_FAVORITE_ARTISTS_SUCCESS':
      return null;
    case 'FETCH_FAVORITE_ARTISTS_FAILED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  data,
  isLoading,
  errorMessage
});
