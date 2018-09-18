import {
  SET_YEAR,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_ERROR
} from "../actions/pageAction";

const initialState = {
  year: 2018,
  photos: [],
  isFetching: false,
  isFetchingError: false
};
// lets start there
export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.year };
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.year, isFetching: true };
    case GET_PHOTOS_SUCCESS: {
      return {
        ...state,
        photos: action.photos,
        isFetching: false,
        isFetchingError: false
      };
    }
    case GET_PHOTOS_ERROR: {
      return {
        ...state,
        photos: action.photos,
        isFetching: false,
        isFetchingError: true
      };
    }
    default:
      return state;
  }
}
