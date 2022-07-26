import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NumberComp } from "./NumberComp";
import { Tables } from "./Tables";
import { Square } from "./Square";
import { Numsquare } from "./Numsquare";
import { TopNav } from "./TopNav";

export const Home = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/number" element={<NumberComp />} />
          <Route path="/Tables" element={<Tables />} />
          <Route path="/Square" element={<Square />} />
          <Route path="/Numsquare" element={<Numsquare />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
