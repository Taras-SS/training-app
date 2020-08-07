import {
  GOODS_LOADING,
  GOODS_SUCCESS,
  GOODS_FAIL,
  GOODS_STOP,
} from "../../types/goods";
import { Goods } from "../../../models/goods";

export interface GoodsState {
  loading: boolean;
  goods: Goods[];
}

interface GoodsLoadingAction {
  type: typeof GOODS_LOADING;
}

interface GoodsSuccessAction {
  type: typeof GOODS_SUCCESS;
  payload: Goods[];
}

interface GoodsStopAction {
  type: typeof GOODS_STOP;
}

interface GoodsFailAction {
  type: typeof GOODS_FAIL;
}

export type GoodsActions =
  | GoodsLoadingAction
  | GoodsSuccessAction
  | GoodsStopAction
  | GoodsFailAction;
