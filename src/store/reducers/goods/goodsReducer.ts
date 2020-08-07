import {
  GOODS_LOADING,
  GOODS_SUCCESS,
  GOODS_FAIL,
  GOODS_STOP,
} from "../../types/goods";
import { GoodsActions, GoodsState } from "./types";

const initialState: GoodsState = {
  loading: false,
  goods: [],
};

export default function (state = initialState, action: GoodsActions) {
  switch (action.type) {
    case GOODS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GOODS_SUCCESS:
      return {
        loading: false,
        goods: action.payload,
      };
    case GOODS_STOP:
      return {
        ...state,
        loading: false,
      };
    case GOODS_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
