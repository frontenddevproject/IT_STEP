import React, { useState } from "react";
import { FlexColumn } from "../shared/flex";
import { Input } from "../shared/input";
import { Modal } from "../shared/modal";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ModalButton } from "../shared/button";


export const Auth = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [_, setlocalStorageFormData] = useLocalStorage("userData");

  const onSubmit = () => {
    setlocalStorageFormData(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Modal>
      <FlexColumn width="100%" alignItems="center" gap="15px">
        <h1>Login Form</h1>
        <Input
          width="250px"
          height="25px"
          backgroundColor="#eeeded"
          borderRadius="5px"
          type="text"
          placeholder="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
        <Input
          width="250px"
          height="25px"
          backgroundColor="#eeeded"
          borderRadius="5px"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <button onClick={onSubmit}>Submit</button>
      </FlexColumn>
    </Modal>
  );
};
