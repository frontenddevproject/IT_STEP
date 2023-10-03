import React, { FC } from "react";
import { DashboardUserInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/flex";

interface PropsInterface {
  user: DashboardUserInterface;
}

export const UserItem: FC<PropsInterface> = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <FlexColumn
      width="90%"
      background="lightgray"
      margin="5px"
      padding="10px"
      gap="8px"
    >
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
    </FlexColumn>
  );
};
