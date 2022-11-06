import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddData } from "../Pages/AddData";
import { Login } from "../Pages/Login";
import { PrivateRoutes } from "./PrivateRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/add" element={<PrivateRoutes />}>
          <Route path="/add" element={<AddData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { Router };
