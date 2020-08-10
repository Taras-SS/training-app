import {
  CATEGORIES_FAIL,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORY_ADDED,
  CATEGORY_ADDING,
  CATEGORY_DELETED,
  CATEGORY_DELETING,
  CATEGORY_DELETING_FAILED,
} from "../../types/categories";

import { CategoriesAction, CategoriesState } from "./types";

const initialState: CategoriesState = {
  loading: false,
  categories: null,
};

export default function (state = initialState, action: CategoriesAction) {
  switch (action.type) {
    case CATEGORIES_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
      };
    case CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: action.payload,
      };
    case CATEGORY_ADDING:
      return {
        ...state,
        loading: false,
      };
    case CATEGORY_ADDED:
      return {
        ...state,
        loading: false,
      };
    case CATEGORY_DELETED:
      return {
        ...state,
        loading: false,
      };
    case CATEGORY_DELETING:
      return {
        ...state,
        loading: false,
      };
    case CATEGORY_DELETING_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
