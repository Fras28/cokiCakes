import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialogSlide from "../BtnNavidad/BtnNavidad";
import "./LandingStart.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncAllProducts, asyncCategorias, asyncComercio } from "../redux/slice";
import { ButtonEnter } from "./ButtonEnter/ButtonEnter";



export const Inicio = (url) => {
  const dispatch = useDispatch();
  const [animateOut, setAnimateOut] = useState(false);
  
  useEffect(() => {
    const fetchData = () => {
      console.log("Effect is running");
      dispatch(asyncComercio());
      dispatch(asyncAllProducts());
      dispatch(asyncCategorias());
    };
    
    fetchData();
    
    const intervalId = setInterval(fetchData, 15 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, [dispatch]);


  const toTop = () => {
    window.scrollTo(0, 0);
  };

  toTop();

  const handleButtonClick = () => {
    // Realiza la lógica necesaria antes de la redirección
    setAnimateOut(true);

    // Espera un tiempo suficiente para que la animación ocurra antes de redirigir
    setTimeout(() => {
      url.history.push(`${url.location.pathname}/Landing`);
    }, 500); // Ajusta este tiempo según la duración de la animación
  };

  if (url.location.pathname === "/") {
    url.location.pathname = "/sinMesa";
    console.log(url.location.pathname);
  }

  return (
    <div className={`LandingBack ${animateOut ? "animate__animated animate__slideOutUp" : ""}`}>
      <NavLink to={`${url.location.pathname}`}>
        <div className="marcaLanging"></div>
      </NavLink>
      <div>
      <div>
        <AlertDialogSlide />
      </div>
      <div className="btnEnter"   onClick={handleButtonClick}  >
   <ButtonEnter titulo="Ver Catalogo"  />
      </div>
      </div>
    </div>
  );
};