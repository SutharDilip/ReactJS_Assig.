import {
  GET_CATEGORIES_API,
  Get_Single_Categorie_API,
  LoginApi,
} from "../../service/AuthService";
import { authConstant } from "../constants";


export const Logins = (payload, navigate) => (dispatch) => {
  console.log("payload", payload)
  return LoginApi(payload)
    .then((res) => {
      localStorage.setItem("token", res.token);
      dispatch({
        type: authConstant.USER_LOGIN,
        payload: res.token,
      });
      navigate("/")
    })
    .catch((error) => {
      console.log("USER_LOGIN_FAILED", error)
      dispatch({
        type: authConstant.USER_LOGIN_FAILED,
        payload: error,
      });
    });
};

export const Get_Categories = () => (dispatch) => {
  return GET_CATEGORIES_API()
    .then((res) => {
      dispatch({
        type: authConstant.ALL_CATEGORIES,
        payload: res,
      });
    })
};

export const Get_Single_Categorie = (payload, navigate) => (dispatch) => {
  console.log("payload", payload)
  return Get_Single_Categorie_API(payload)
    .then((res) => {
      dispatch({
        type: authConstant.GET_SINGLE_CATEGORIES,
        payload: res,
      });
      navigate(`/listview/${payload}`)
    })
};

export const Add_To_Cart = (payload) => (dispatch) => {
  console.log("payload", payload)
  if(payload) {
    dispatch({
      type: authConstant.ADD_TO_CART,
      payload: payload,
    });
  }
};

export const Remove_To_Cart = (payload) => (dispatch) => {
  console.log("payload", payload)
  if(payload) {
    dispatch({
      type: authConstant.REMOVE_TO_CART,
      payload: payload,
    });
  }
};