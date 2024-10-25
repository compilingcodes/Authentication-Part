import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./Components/Menu";
import Home from "./Pages/Auth/Home";
import Login from "./Pages/Auth/Login";
import Pnf from "./Pages/Auth/Pnf";
import Register from "./Pages/Auth/Register";
import AuthRoute from "./PrivateRoute/AuthRoute";

function App() {
  return (
    <BrowserRouter>
      <Menu />

      <ToastContainer autoClose={3000} />
      <Routes>
        <Route element={<AuthRoute />}>
          <Route path={`/`} element={<Home />} />
        </Route>

        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
