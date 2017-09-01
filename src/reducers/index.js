import { combineReducers }  from 'redux'

import photoReducer from './PhotoReducer'

const Reducers = combineReducers({
  photos: photoReducer,
})

export default Reducers
