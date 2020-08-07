import { combineReducers } from "redux";
import goodsReducer from "./goods/goodsReducer";
import authReducer from "./auth/authReducer";

export default combineReducers({
  goods: goodsReducer,
  auth: authReducer,
});
