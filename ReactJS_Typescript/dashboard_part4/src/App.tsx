import React from "react";
import { FlexColumn } from "./components/shared/flex";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./App.css";
import { DashboardContextProvider } from "./contexts/DashboardContext";
import { SearchContextProvider } from "./contexts/SearchContext";



function App() {
  return (  
    <SearchContextProvider>
        <DashboardContextProvider>
          <RouterProvider router={router} />
        </DashboardContextProvider>
    </SearchContextProvider>
  )
}

export default App;
