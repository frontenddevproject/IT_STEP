import React, { useContext } from 'react'
import { DashboardContext } from '../../contexts/DashboardContext';
import { FlexColumn } from '../shared/flex';

export const Settings = () => {
   const {user} = useContext(DashboardContext)!;

   if (!user) return <h1>You are not authorized</h1>
  return (
    <FlexColumn width="100%" height="100vh" justifyContent="center" alignItems="center">
      <h1>There will be a settings page here</h1>
    </FlexColumn>
  )
}
