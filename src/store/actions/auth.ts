import { AUTH_LOADING, SIGN_UP_FAIL, SIGN_UP_SUCCESS } from "../types/auth";
import { SignUp, ISignUp } from "../../api/auth";
import { AppThunk } from "../index";

export const signUp = (
    credential: any
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
