'use client';
import Head from "next/head";
import React, { useState } from "react";
//import BackToTop from "../elements/BackToTop"
// import Footer from "./Footer";
// import Header from "./Header";
// import MobileMenu from "./MobileMenu";
import Header from "../Header/header";
function PublicLayout({ children }: { children: React.ReactNode }) {
  const [hiddenClass, setHiddenClass] = useState("hidden");
  const handleHidden = () => setHiddenClass("");
  const handleRemove = () => {
    if (hiddenClass === "") {
      setHiddenClass("hidden");
    }
  };
  return (
    <>

      <div className="main font-body text-body">
        <Header handleHidden={handleHidden} />
        {/* <MobileMenu
          hiddenclassName={hiddenClass}
          handleRemove={handleRemove}
        /> */}
        {children}
        {/* <Footer /> */}
        {/* <BackToTop /> */}
      </div>
    </>
  )
}

export default PublicLayout