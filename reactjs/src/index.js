import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./Page/MainPage/MainPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import SalePage from "./Page/SalePage/SalePage";
import Minh from "./Page/Minh/Minh";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exac path="/" element={<SalePage />} />
        <Route exac path="/MainPage" element={<MainPage />} />
        <Route exac path="/Artist/Min" element={<Minh />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
