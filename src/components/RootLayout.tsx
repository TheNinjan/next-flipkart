import React, { ReactElement } from "react";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Header from "./Header";
import CategoryC from "./CategoryC";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
    <div className="bg-[#f1f3f6]">
      <Header />
      {/* <CategoryC/> */}
      {children}
      <Footer />
      </div>
    </>
  );
};

export default RootLayout;