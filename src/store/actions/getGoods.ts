import {
  GOODS_LOADING,
  GOODS_SUCCESS,
  GOODS_FAIL,
  GOODS_STOP,
} from "../types/goods";
import { getAllGoods } from "../../api/goods";
import { AppThunk } from "../index";

export const getGoods = (): AppThunk => (dispatch) => {
  dispatch({ type: GOODS_LOADING });
  return getAllGoods()
    .then((goods) => {
      dispatch({ type: GOODS_SUCCESS, payload: goods });
    })
    .catch(() => {
      dispatch({ type: GOODS_FAIL });
    })
    .finally(() => {
      dispatch({ type: GOODS_STOP });
    });
};
