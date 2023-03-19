import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "../Basics/Registration";
import Signin from "../Basics/Signin";
import Site from "../Basics/Site";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Site />}>
            <Route path="" element={<Signin />}></Route>
            <Route path="register" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
