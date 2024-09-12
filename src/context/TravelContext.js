import React, { createContext, useState } from "react";

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null); // 'Seeker' or 'Watcher'
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <TravelContext.Provider
      value={{ userRole, setUserRole, loggedIn, setLoggedIn }}
    >
      {children}
    </TravelContext.Provider>
  );
};
