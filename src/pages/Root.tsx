import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../layout/Header";
import PageManager from "../layout/PageManager";

export default function Root() {
  return (
    <div>
      <Header />
      <PageManager>
        <Outlet />
      </PageManager>
    </div>
  );
}
