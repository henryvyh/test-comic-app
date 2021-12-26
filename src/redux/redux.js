import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./cart/CartReducer";
import productsReducer from "./product/ProductReducer";

const middleWare = [thunk];
const rootReducer = combineReducers({
	productsReducer,
	cartReducer,
});
const store = createStore(rootReducer, applyMiddleware(...middleWare));
export default store;
