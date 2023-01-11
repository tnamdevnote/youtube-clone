import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import PageManager from "./PageManager";

export default function Root() {
  return (
    <>
      <Header />
      <PageManager>
        <Outlet />
      </PageManager>
    </>
  );
}
