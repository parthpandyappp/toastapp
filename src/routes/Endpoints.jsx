import { Route, Routes } from "react-router-dom";
import { Beverages, Desserts, Main, PlaceOrder, Special } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Special />} />
      <Route path="/main" element={<Main />} />
      <Route path="/desserts" element={<Desserts />} />
      <Route path="/beverages" element={<Beverages />} />
      <Route path="/placeorder" element={<PlaceOrder />} />
    </Routes>
  );
};

export { Endpoints as Routes };
