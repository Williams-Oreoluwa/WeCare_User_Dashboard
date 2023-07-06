import React from "react";

import Organization from "./pages/Organization";
import Verification from "./pages/Verification";
import "./style.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CreatePassword from "./pages/CreatePassword";
import InviteTeams from "./pages/InviteTeams";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Organization />} />
          <Route path="/verify" element={<Verification />} />
          <Route path="/create+password" element={<CreatePassword />} />
          <Route path="/invite+team+memebers" element={<InviteTeams />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
