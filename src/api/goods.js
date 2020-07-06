
import axios from "axios";
import {BASE_URL} from "../config";

export const uploadImage = async (data,options) => {
    return await axios.post(`${BASE_URL}/api/uploadPhoto`,data,options);
}
