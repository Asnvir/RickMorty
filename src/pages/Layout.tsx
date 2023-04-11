import React, {Fragment} from "react";
import {Header} from "../components/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../components/Footer";

export const Layout = () => {
  return(
      <>
          <Header/>
          <div className="container mx-auto">
              <Outlet/>
          </div>

          {/*<Footer/>*/}
      </>
  )
}