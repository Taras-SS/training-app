import {
  AUTH_LOADING,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_IN_SUCCESS,
} from "../types/auth";
import { SignUp, ISignUp, SignIn, ISignIn } from "../../api/auth";
import { AppThunk } from "../index";

export const signUp = (
  credential: ISignUp
): AppThunk<Promise<any | { err: any }>> => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    await SignUp(credential);
    dispatch({ type: SIGN_UP_SUCCESS });
    return false;
  } catch (err) {
    dispatch({ type: SIGN_UP_FAIL });
    return { err: err.response.data };
  }
};

export const signIn = (
  credential: ISignIn
): AppThunk<Promise<any | { err: any }>> => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    const response = await SignIn(credential);
    localStorage.setItem("Access-Token", response.headers["access-token"]);
    localStorage.setItem("User", JSON.stringify(response.data));
    dispatch({ type: SIGN_IN_SUCCESS, payload: response.data });
    return false;
  } catch (err) {
    dispatch({ type: SIGN_IN_FAIL });
    return { err: err.response.data };
  }
};
