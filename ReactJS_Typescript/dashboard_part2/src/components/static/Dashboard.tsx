import React, { useContext, useEffect } from 'react'
import { FlexColumn } from '../shared/flex'
import { DashboardContext } from '../../contexts/DashboardContext'
import { Link, useNavigate } from 'react-router-dom';

export const Dashboard = () => {
   const {user} = useContext(DashboardContext)!;

   if (!user) return <h1>You are not authorized</h1>
   return (
      <FlexColumn width="100%">
         <Link to="/settings" ><h5>Settings</h5></Link>
         <h1>Dashboard, Hello {user?.email}</h1>
      </FlexColumn>
  )
}
