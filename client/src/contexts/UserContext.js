import React, { useState, createContext } from "react";
import { useAuth } from "../hooks/useRequest";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const localSt = JSON.parse(localStorage.getItem("user"));
  const state = useAuth();

  console.log('state', state, localSt)

  // if(localSt){
    
  // }

  // if(!state.auth){
  //   localStorage.removeItem("user");
  // }

  console.log('user context', localSt)
  const [user, setUser] = useState(localSt ? localSt : null);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
