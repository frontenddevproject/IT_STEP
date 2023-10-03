import React from "react";
import { FlexColumn } from "./components/shared/flex";
import { Auth } from "./components/static/Auth";

import "./App.css";
import { Counter } from "./components/static/Counter";
import { Modal } from "./components/shared/modal";

function App() {
  return (
    <FlexColumn width="100%" alignItems="center" justifyContent="center" >
      <Auth />
      <Modal>
        <Counter />
      </Modal>
    </FlexColumn>
  );
}

export default App;
