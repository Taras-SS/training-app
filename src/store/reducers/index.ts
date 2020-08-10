import { combineReducers } from "redux";
import goodsReducer from "./goods/goodsReducer";
import authReducer from "./auth/authReducer";
import categoriesReducer from "./categories/categoriesReducer";

export default combineReducers({
  goods: goodsReducer,
  auth: authReducer,
  categories: categoriesReducer,
});
