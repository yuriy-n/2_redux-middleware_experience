import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReduces from "../reducers";

const store = createStore(rootReduces, applyMiddleware(thunk, logger));

export default store;
