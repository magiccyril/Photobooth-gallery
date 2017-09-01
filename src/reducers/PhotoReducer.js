import {
  REQUEST_PHOTOS,
  RECEIVE_PHOTOS,
  RECEIVE_PHOTOS_ERROR,
} from '../actions'

const initialState = {
  isFetching: false,
  error: false,
  items: [],
}

const PhotoReducer = (state = initialState, action) => {
  switch (action.type) {

    case REQUEST_PHOTOS:
      return {
        ...state,
        isFetching: true,
      }
      
    case RECEIVE_PHOTOS:
      return {
        ...state,
        isFetching: false,
        items: action.photos.reverse(),
        lastUpdated: action.receivedAt,
        error: false,
      }
      
    case RECEIVE_PHOTOS_ERROR:
      return {
        ...state,
        isFetching: false,
        items: [],
        lastUpdated: action.receivedAt,
        error: true,
      }

    default:
      return state
  }
}

export default PhotoReducer