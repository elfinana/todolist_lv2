import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detailtodo from "../pages/Detailtodo";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="detailtodo/:id" element={<Detailtodo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
