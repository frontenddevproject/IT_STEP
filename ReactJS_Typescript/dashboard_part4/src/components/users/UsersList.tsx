import React, { useContext } from "react";
import { UserItem } from "./UserItem";
import { FlexColumn } from "../shared/flex";
import { Search } from "../shared/Search";
import { SearchContext } from "../../contexts/SearchContext";



export const UsersList = () => {

  const {users, userSearchResult, value} = useContext(SearchContext)!;

  return (
   <FlexColumn width="100%" alignItems="center" gap="10px">
      <h1>Users</h1>
      <Search />
      {(value ? userSearchResult : users).map((user, i)=> <UserItem key={`${user.name}-${i}`} user={user} />)}
   </FlexColumn>
);
};
