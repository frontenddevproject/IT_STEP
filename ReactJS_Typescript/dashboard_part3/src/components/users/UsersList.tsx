import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardUserInterface } from "./types";
import { UserItem } from "./UserItem";
import { FlexColumn } from "../shared/flex";

export const UsersList = () => {
  const { data, isLoading } = useFetchData<DashboardUserInterface[]>(
    "https://jsonplaceholder.typicode.com/users",
    { method: "GET" }
  );

  return (
   <FlexColumn width="100%" alignItems="center" gap="10px">
      <h1>Users</h1>
      {data?.map((user, i)=> <UserItem key={`${user.name}-${i}`} user={user} />)}
   </FlexColumn>
);
};
