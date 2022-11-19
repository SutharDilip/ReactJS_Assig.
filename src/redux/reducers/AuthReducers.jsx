import { authConstant } from "../constants";

const initialState = {
  categories: [],
  categorie: [],
  carts: [],
  token: "",
  message: "",
};

export default function AuthReducer(state = initialState || null, action) {
  switch (action.type) {
    case authConstant.USER_LOGIN:
      return { ...state, token: action?.payload };
    case authConstant.USER_LOGIN_FAILED:
      return { ...state, message: "please Enter valid password !" };
    case authConstant.ALL_CATEGORIES:
    return { ...state, categories: action?.payload, message: "" };
    case authConstant.GET_SINGLE_CATEGORIES:
      return { ...state, categorie: action?.payload };
    case authConstant.ADD_TO_CART:
    return { ...state, carts: [...state.carts, action?.payload] };
    case authConstant.REMOVE_TO_CART:
      let filterCart = state.carts.filter((ele) => ele.id != action?.payload?.id)
      return { ...state, carts: filterCart };
    default:
      return state;
  }
}
