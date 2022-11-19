import { endpoints } from "../utils/endPoints";
import { doGet, doPost } from "./commonSer";


export const LoginApi = (payload) => {
  const login = doPost(endpoints.AUTH_LOGIN, payload);
  return login;
};

export const GET_CATEGORIES_API = () => {
  const categories = doGet(endpoints.GET_CATEGORIES);
  return categories;
};

export const Get_Single_Categorie_API = (payload) => {
  console.log("payload", payload)
  const categorie = doGet(`${endpoints.GET_SINGLE_CATEGORIES}/${payload}`);
  return categorie;
};
