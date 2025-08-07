import {createContext , useState} from 'react';

export const  userContext = createContext();

export const UserProvider = ({children}) => {
    const [verify , setVerify]=useState("");
  return (
    <userContext.Provider value={{verify ,setVerify }}>
      {children}
    </userContext.Provider>
  )
}

