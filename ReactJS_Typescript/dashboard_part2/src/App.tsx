import React from "react";
import { FlexColumn } from "./components/shared/flex";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./App.css";
import { DashboardContextProvider } from "./contexts/DashboardContext";



function App() {
  return (
    <FlexColumn width="100%">
      <DashboardContextProvider>
        <RouterProvider router={router} />
      </DashboardContextProvider>
    </FlexColumn>
  )
}

export default App;
