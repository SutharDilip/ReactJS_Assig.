import axios from "axios";
let base_Url = "https://fakestoreapi.com";

export const api = axios.create({
  baseURL: base_Url,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    let authRoute = req.url.includes("login") || req.url.includes("singup");
    if (!authRoute) {
      let token = localStorage.getItem("Token");
      req.headers["Authorization"] = `${token}`;
    }
    console.log("req",req)
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    if (res.data.error) {
      return Promise.reject(res.data);
    } else {
      return Promise.resolve(res.data);
    }
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      try {
        console.log("error", error.response.status)
      } catch (error) {
        window.location.href = "/auth/login";
        Promise.reject(error.response.data);
      }
    }
    return Promise.reject(error.response.data);
  }
);
