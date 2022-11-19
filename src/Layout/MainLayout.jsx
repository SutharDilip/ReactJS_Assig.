import { Button } from "@mui/material";
import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const MainLayout = () => {
  const auth = localStorage.getItem("token");
  const navigate = useNavigate();

  const logOut = () => {
    navigate("/auth/login")
    localStorage.removeItem("token");
  }

  const GoInCart = () => {
    navigate("/cart")
  }
  return auth ? (<>
    <Button variant="contained" style={{width: "100px", float: "right", margin: "10px"}} fullWidth onClick={() => logOut()}>Log Out</Button>
    <Button variant="contained" style={{width: "150px", float: "right", margin: "10px"}} fullWidth onClick={() => GoInCart()}>Go To Cart</Button>
    <Outlet />
  </>
    ) : (
    <>
      <Navigate to="/auth/login" />
    </>
  );
};
