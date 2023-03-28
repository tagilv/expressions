import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";

//Note: Importing "PropsWithChildren" interface from react library. PropsWithChildren is built in TS interface in React that extedns the "ReactNode" interface. Allows us to define a type for the react components props that include the "children" prop

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
