import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  player: reducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

export default store;
