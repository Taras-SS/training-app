import { User } from "../../../models/user";

import {
  AUTH_LOADING,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAIL,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
} from "../../types/auth";

export interface AuthState {
  loading: boolean;
  user: User | null;
}

export interface AuthLoadingAction {
  type: typeof AUTH_LOADING;
}

export interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
}

export interface SignUpFailAction {
  type: typeof SIGN_UP_FAIL;
}

export interface SignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS;
  payload: User;
}

export interface SignInFailAction {
  type: typeof SIGN_IN_FAIL;
}

export interface SignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS;
}

export interface SignOutFailAction {
  type: typeof SIGN_OUT_FAIL;
}

export type AuthAction =
  | AuthLoadingAction
  | SignUpSuccessAction
  | SignUpFailAction
  | SignInSuccessAction
  | SignInFailAction
  | SignOutSuccessAction
  | SignOutFailAction;
