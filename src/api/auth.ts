import axios from "axios";
import { BASE_URL } from "../config";

export interface ISignUp {
  email: string;
  name: string;
  password: string;
}

export const SignUp = (credential: ISignUp) => {
  return axios.post(`${BASE_URL}/api/signup`, credential);
};
