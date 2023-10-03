import React, { Dispatch, FC, PropsWithChildren, createContext, useState } from 'react';
import { UserInterface } from '../types';

interface DasboardContextInterface {
   user: UserInterface | null,
   setUser: Dispatch<UserInterface | null>
};

export const DashboardContext = createContext<DasboardContextInterface | null>(null);


export const DashboardContextProvider: FC<PropsWithChildren> = ({children}) => {
   const [user, setUser] = useState<UserInterface | null>(null);
  return (
    <DashboardContext.Provider value={{user, setUser}}>
      {children}
    </DashboardContext.Provider>
  )
}
