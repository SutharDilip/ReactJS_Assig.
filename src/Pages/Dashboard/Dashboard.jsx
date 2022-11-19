import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Get_Categories, Get_Single_Categorie } from "../../redux/action/AuthActions";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  const ALL_CATEGORIES = useSelector((state) => state?.AuthReducer?.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(Get_Categories());
  }, [dispatch]);

  const handleClick = (categorie) => {
      console.log("categorie", categorie)
      dispatch(Get_Single_Categorie(categorie, navigate))
    //   dispatch()
  }

  return (
    <div>
      <h1 style={{textAlign : 'center'}}>All Categories</h1>
      {ALL_CATEGORIES && ALL_CATEGORIES?.map((ele, index) =>(
          <div key={index}>
          <button onClick={() => handleClick(ele)}>{ele}</button>
          </div>
      ))}
    </div>
  );
};
