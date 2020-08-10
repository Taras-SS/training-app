import {
  CATEGORIES_LOADING,
  CATEGORIES_FAIL,
  CATEGORIES_SUCCESS,
  CATEGORY_ADDING,
  CATEGORY_ADDED,
  CATEGORY_DELETING_FAILED,
  CATEGORY_DELETING,
  CATEGORY_DELETED,
} from "../types/categories";

import { ICategory } from "../../models/category";
import {
  getCategoriesList,
  addCategory,
  removeCategoryById,
} from "../../api/categories";
import { AppThunk } from "../index";

export const getCategories = (): AppThunk => async (dispatch) => {
  dispatch({ type: CATEGORIES_LOADING });
  try {
    const response = await getCategoriesList();
    dispatch({ type: CATEGORIES_SUCCESS, payload: response.data });
    return false;
  } catch (err) {
    dispatch({ type: CATEGORIES_FAIL });
    return { err: err.response.data };
  }
};

export const AddCategory = (category: ICategory): AppThunk => async (
  dispatch
) => {
  dispatch({ type: CATEGORY_ADDING });
  try {
    const response = await addCategory(category);
    dispatch({ type: CATEGORY_ADDED, payload: response.data });
    return response.data.category;
  } catch (err) {
    dispatch({ type: CATEGORIES_FAIL });
    return { err: err.responnse.data };
  }
};

export const removeCategory = (categoryId: string): AppThunk => async (
  dispatch
) => {
  dispatch({ type: CATEGORY_DELETING });
  try {
    await removeCategoryById(categoryId);
    dispatch({ type: CATEGORY_DELETED });
    return false;
  } catch (err) {
    dispatch({ type: CATEGORY_DELETING_FAILED });
    return { err: err.resposne.data };
  }
};
