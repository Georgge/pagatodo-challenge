import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// REDUCERS IMPORTS
import bankDuck from './ducks/bankDuck';

const rootReducer = combineReducers({
  bank: bankDuck,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
