import { Route, Routes } from "react-router-dom";
import { Beverages, Desserts, Main, Special } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Special />} />
      <Route path="/main" element={<Main />} />
      <Route path="/beverages" element={<Beverages />} />
      <Route path="/desserts" element={<Desserts />} />
    </Routes>
  );
};

export { Endpoints as Routes };
