import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./Page/MainPage/MainPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import SalePage from "./Page/SalePage/SalePage";
import Anet from "./Page/Anet/Anet";
import Aaron from "./Page/Aaron/Aaron";
import Nicole from "./Page/Nicole/Nicole";
import Ben from "./Page/Ben/Ben";
import AboutPage from "./Page/AboutPage/AboutPage";
import Minh from "./Page/Minh/Minh";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exac path="/" element={<SalePage />} />
        <Route exac path="/MainPage" element={<MainPage />} />
        <Route exac path="/AboutPage" element={<AboutPage />} />
        <Route exac path="/Artist/Min" element={<Minh />} />
        <Route exac path="/Artist/Anet" element={<Anet />} />
        <Route exac path="/Artist/Aaron" element={<Aaron />} />
        <Route exac path="/Artist/Nicole" element={<Nicole />} />
        <Route exac path="/Artist/Ben" element={<Ben />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
