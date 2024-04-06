import { createStore } from 'redux';
import rootReducer from './reducers';

// Create the Redux store with combined reducers
const store = createStore(rootReducer);

export default store;