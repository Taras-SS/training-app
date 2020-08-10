import { ICategory } from "../../../models/category";

import {
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
  CATEGORY_ADDED,
  CATEGORY_ADDING,
  CATEGORY_DELETED,
  CATEGORY_DELETING_FAILED,
  CATEGORY_DELETING,
} from "../../types/categories";

export interface CategoriesState {
  loading: boolean;
  categories: ICategory[] | null;
}

export interface CategoriesLoadingAction {
  type: typeof CATEGORIES_LOADING;
}

export interface CategoriesFailAction {
  type: typeof CATEGORIES_FAIL;
}

export interface CategoriesSuccessAction {
  type: typeof CATEGORIES_SUCCESS;
  payload: ICategory[];
}

export interface CategoryAddingAction {
  type: typeof CATEGORY_ADDING;
}

export interface CategoryAddedAction {
  type: typeof CATEGORY_ADDED;
}

export interface CategoryRemovedAction {
  type: typeof CATEGORY_DELETED;
}

export interface CategoryDeletingAction {
  type: typeof CATEGORY_DELETING;
}

export interface CategoryDeletingFailedAction {
  type: typeof CATEGORY_DELETING_FAILED;
}

export type CategoriesAction =
  | CategoriesLoadingAction
  | CategoriesFailAction
  | CategoriesSuccessAction
  | CategoryAddingAction
  | CategoryAddedAction
  | CategoryRemovedAction
  | CategoryDeletingFailedAction
  | CategoryDeletingAction;
