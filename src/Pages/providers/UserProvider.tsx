import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props:any) => {
  const [userInfo, setUserInfo] = useState({ userName: "test" });
  
  return(
    <UserContext.Provider value={{userInfo, setUserInfo}}>
      {props.children}
    </UserContext.Provider>
  )
}