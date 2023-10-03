import React from "react";
import { FlexColumn, FlexRow } from "../../shared/flex";
import { HeaderLanding } from "./Layout/HeaderLanding";
import { MainLanding } from "./Layout/MainLanding";
import { ScrollTopContextProvider } from "react-use-scroll-to";


export const Landing = () => {
  return (
    <>
    <ScrollTopContextProvider>
      <HeaderLanding />
      <MainLanding />
    </ScrollTopContextProvider>
    </>
  );
};
