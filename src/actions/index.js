import fetch from 'isomorphic-fetch'

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS'
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS'
export const RECEIVE_PHOTOS_ERROR = 'RECEIVE_PHOTOS_ERROR'

const REQUEST_PHOTO_SERVER_URL = ''

function requestPhotos() {
  return {
    type: REQUEST_PHOTOS,
  }
}

function receivePhotos(json) {
  return {
    type: RECEIVE_PHOTOS,
    photos: json,
    receivedAt: Date.now(),
  }
}

function receivePhotosErrors(error) {
  return {
    type: RECEIVE_PHOTOS_ERROR,
    error: error,
    receivedAt: Date.now(),
  }
}

export function fetchPhotos() {
  return (dispatch, getState) => {
    dispatch(requestPhotos())
    return (fetch(REQUEST_PHOTO_SERVER_URL))
      .then(response => response.json())
      .then(json => dispatch(receivePhotos(json)))
      .catch(error => dispatch(receivePhotosErrors(error)))
  }
}
