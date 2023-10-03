import React, { FC, PropsWithChildren, useContext, useEffect } from 'react'
import { DashboardContext } from '../../contexts/DashboardContext';
import { useNavigate } from 'react-router-dom';

interface PropsInterface {
   fallback: string,
}


export const PrivateRoute: FC<PropsWithChildren & PropsInterface> = ({children, fallback}) => {
   const {user} = useContext(DashboardContext)!;
   const navigate = useNavigate();

   useEffect(() => {
      if (!user) {
         navigate(fallback)
      }
   },[user, navigate, fallback])

  return (
      <>
         {children || null}
      </>
  )
}
