import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <header>Root</header>
      <Outlet />
    </div>
  );
}
