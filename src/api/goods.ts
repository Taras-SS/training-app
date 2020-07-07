import axios from "axios";
import { BASE_URL } from "../config";

interface IGoods {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export const uploadImage = async (data:any, options:any) => {
  return await axios.post(`${BASE_URL}/api/uploadPhoto`, data, options);
};

export const addGoods = async (data:IGoods) => {
  return await axios.post(`${BASE_URL}/api/goods`, data);
}
