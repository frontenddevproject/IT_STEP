import React, { useContext, useEffect } from "react";
import { FlexColumn, FlexRow } from "../shared/flex";
import { DashboardContext } from "../../contexts/DashboardContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Search } from "../shared/Search";

export const Dashboard = () => {
  const { user } = useContext(DashboardContext)!;

  if (!user) return <h1>You are not authorized</h1>

  const dashboardLinks = [
    { link: "users", text: "Users" },
    { link: "posts", text: "Posts" },
    { link: "comments", text: "Comments" },
    { link: "settings", text: "Settings" }
  ];

  return (
    <FlexColumn width="100%">
      <FlexRow width="100%" gap="15px" height="50px" padding="15px" >
        {dashboardLinks.map(({ link, text }, i) => (
          <Link key={`${link}-${i}`} to={link} style={ {fontSize: "25px", textDecoration: "underline", cursor: "pointer"} }>
            {text}
          </Link>
        ))}
      </FlexRow>
      <FlexRow width="100%" justifyContent="center"><h1>Dashboard, Hello {user?.email}</h1></FlexRow>
       
      <Outlet />
    </FlexColumn>
  );
};
