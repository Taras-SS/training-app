import axios from "axios";
import { ICategory } from "../models/category";
import { BASE_URL } from "../config";

export const addCategory = (category: ICategory) => {
  return axios.post(`${BASE_URL}/api/category`, category);
};

export const getCategoriesList = () => {
  return axios.get(`${BASE_URL}/api/category`);
};

export const removeCategoryById = (categoryId: string) => {
  return axios.delete(`${BASE_URL}/api/category/${categoryId}`);
};
